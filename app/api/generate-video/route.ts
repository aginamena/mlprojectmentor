import { prompt5 } from "@/app/prompt";
import { supabase } from "@/lib/supabase";
import { GoogleGenAI } from '@google/genai';
import { generateText, tool } from "ai";
import { NextResponse } from "next/server";
import { z } from "zod";

function pcmToWav(pcmBuffer: Buffer, sampleRate = 24000) {
  const numChannels = 1;
  const bitsPerSample = 16;
  const byteRate = sampleRate * numChannels * bitsPerSample / 8;
  const blockAlign = numChannels * bitsPerSample / 8;

  const wavHeader = Buffer.alloc(44);

  wavHeader.write('RIFF', 0);
  wavHeader.writeUInt32LE(36 + pcmBuffer.length, 4);
  wavHeader.write('WAVE', 8);
  wavHeader.write('fmt ', 12);
  wavHeader.writeUInt32LE(16, 16);
  wavHeader.writeUInt16LE(1, 20); // PCM
  wavHeader.writeUInt16LE(numChannels, 22);
  wavHeader.writeUInt32LE(sampleRate, 24);
  wavHeader.writeUInt32LE(byteRate, 28);
  wavHeader.writeUInt16LE(blockAlign, 32);
  wavHeader.writeUInt16LE(bitsPerSample, 34);
  wavHeader.write('data', 36);
  wavHeader.writeUInt32LE(pcmBuffer.length, 40);

  return Buffer.concat([wavHeader, pcmBuffer]);
}

async function convertVoiceoverToPublicUrl(script: string, voiceName: string = 'Kore'): Promise<string> {
  try {
    const ai = new GoogleGenAI({});

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-preview-tts',
      contents: [{ parts: [{ text: script }] }],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName },
          },
        },
      },
    });

    const part = response.candidates?.[0]?.content?.parts?.[0];
    const audioData = part?.inlineData?.data;

    if (!audioData) {
      throw new Error('No audio returned from Gemini');
    }

    const pcmBuffer = Buffer.from(audioData, 'base64');
    const wavBuffer = pcmToWav(pcmBuffer, 24000);

    // Upload to Supabase
    const filePath = `voiceovers/${crypto.randomUUID()}.wav`;

    const { error } = await supabase.storage
      .from('audios')
      .upload(filePath, wavBuffer, {
        contentType: 'audio/wav',
        upsert: false,
      });

    if (error) throw error;

    const { data } = supabase.storage
      .from('audios')
      .getPublicUrl(filePath);

    return data.publicUrl;
  } catch (err) {
    console.error('convertVoiceoverToPublicUrl error:', err);
    throw new Error(`Failed to generate voiceover: ${err instanceof Error ? err.message : 'Unknown error'}`);
  }
}

export async function POST(req: Request) {
  const {imageUrls} = await req.json()

  const prompt = `
Given the attached image(s), create a high-energy video advertising my products.
Return a clear visual design concept that can be converted into Remotion code.
`;

  const {text} = await generateText({
    model: "google/gemini-2.5-pro",
    system: prompt5,
    tools: {
      generateSceneVoiceover: tool({
        description: "Get the public url of a voice over script.",
        parameters: z.object({
          sceneScript: z.string().describe("The voiceover script for the scene"),
          voiceName: z.string().optional().describe("Voice name (e.g., 'Kore', 'Aoede')"),
        }),
        execute: async ({ sceneScript, voiceName = 'Kore' }) => {
          const voiceoverUrl = await convertVoiceoverToPublicUrl(sceneScript, voiceName);
          return {
            voiceoverUrl,
          };
        },
      }),
    },
    messages: [
      {
        role: "user",
        content: [
          ...imageUrls.map((imageUrl: string) => ({
            type: "image",
            image: imageUrl
          })),
          {
            type: "text",
            text: prompt,
          },
        ],
      },
    ],
  });

  return NextResponse.json({
    design: text,
  })
}
