import { db } from "@/lib/firebase";
import { Container, Typography } from "@mui/material";
import { doc, getDoc, setDoc } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";

const componentMap = {
  Typography,
  Image,
};

export default async function TutorialSection({
  params,
}: {
  params: Promise<{ tutorial: string }>;
}) {
  const { tutorial } = await params;

  // const docRef = doc(db, "tutorials", tutorial);
  // const docSnap = await getDoc(docRef);
  // let components = [];
  // if (docSnap.exists()) components = docSnap.data().result;

  const x = [
    {
      component: "Typography",
      props: {
        variant: "h4",
      },
      children: "Before We Dive into Pretrained Models… What Is a Model?",
    },
    {
      component: "Typography",
      props: {},
      children: [
        "A ",
        { type: "b", children: "model" },
        " is simply an algorithm that has been trained on a large dataset so that it can learn patterns and make predictions on new data it hasn’t seen before.",
        { type: "br" },
        { type: "br" },
        "Imagine you have an input (some kind of data) going into a box labeled “model” — and then, out comes a prediction.",
      ],
    },
    {
      component: "Image",
      props: {
        alt: "Model with input and output",
        width: 500,
        height: 500,
        src: "https://res.cloudinary.com/carleton-university/image/upload/v1749744761/what_is_a_model/model_with_input_and_output.png",
      },
    },
    {
      component: "Typography",
      props: {},
      children: [
        "The input is the data we feed into the algorithm during training — this could be images, numbers, text, sounds, and so on. The algorithm analyzes the data, finds patterns, and “learns” from it. Once training is complete, it becomes a model that can make predictions on similar (but unseen) data.",
        { type: "br" },
        { type: "br" },
        "That’s the core idea behind ",
        { type: "b", children: "machine learning" },
        " 😊",
      ],
    },
  ];
  // await setDoc(doc(db, "tutorials", "what_are_models"), { result: x });

  // console.log(docSnap.data());

  return (
    <>
      <Container>
        <Typography variant="h4">What is a Model?</Typography>
        <Typography>
          A <b>model</b> is simply an algorithm that has been trained on a large
          dataset so that it can learn patterns and make predictions on new data
          it hasn’t seen before.
          <br />
          <br />
          Imagine you have an input (some kind of data) going into a box labeled
          “model” — and then, out comes a prediction.
        </Typography>

        <Image
          alt="Model with input and output"
          width={500}
          height={500}
          src="https://res.cloudinary.com/carleton-university/image/upload/v1749744761/what_is_a_model/model_with_input_and_output.png"
        />

        <Typography>
          The input is the data we feed into the algorithm during training —
          this could be images, numbers, text, sounds, and so on. The algorithm
          analyzes the data, finds patterns, and “learns” from it. Once training
          is complete, it becomes a model that can make predictions on similar
          (but unseen) data.
          <br />
          <br />
          That’s the core idea behind <b>machine learning</b> 😊
        </Typography>
        <Typography
          variant="h4"
          style={{ marginTop: "10px", marginBottom: "10px" }}
        >
          🐱 Cats vs. 🐶Dogs
        </Typography>
        <Typography>
          Let’s say you want to train a model to tell the difference between
          pictures of cats and dogs. You would feed it lots of labeled images —
          some of cats, some of dogs — so it can learn what makes them
          different.
          <br />
          <br />
          Then, when you give the trained model a brand-new image of a dog (that
          it hasn’t seen before), it will say confidently: “That looks like a
          dog!”
          <br />
          <br />
          If it learned well, its prediction will be accurate. If not, it might
          guess incorrectly — and that’s okay too. Models get better with
          practice and more data.
        </Typography>
        <Typography>
          How exactly the model learns the differences between cats and dogs is
          a more technical topic — we’ll explore it in the next module.
          <br />
          <br />
          But here’s the cool part: <b>really smart people</b> have already
          built powerful models that can:
        </Typography>
        <ol>
          <li> Recognize people in images</li>
          <li> Understand voice commands like “go”, “left”, “right”</li>
          <li> Detect facial expressions, hand gestures and body poses</li>
        </ol>
        <br />
        <br />
        <Typography>
          <b>And that’s what this module is all about</b> <br /> We’ll learn how
          to use these pre-trained models — built by others and trained on
          massive datasets — to make predictions and build creative projects,
          right in the browser using ml5.js.
        </Typography>
        <br />
        <br />
        <Typography variant="h4"> 🚀 Ready?</Typography>
        <Typography>
          I hope you’re as excited as I am. <br /> Let’s go into the next
          tutorial and start using machine learning in the most fun way
          possible!
        </Typography>
      </Container>
      -------------------------------------------------
      <Container>
        <Typography variant="h3">🤖 What Are Pretrained Models?</Typography>
        <Typography>
          <b>Pretrained models </b>are machine learning models that have already
          been trained by experts using huge amounts of data to perform a
          specific task — like recognizing objects in images, detecting body
          movements, understanding sounds, or even analyzing text.
          <br />
          <br />
          Instead of training a model yourself (which can take time, lots of
          data, and computing power), you can simply use a pretrained model in
          your application.
        </Typography>
        All you have to do is:
        <ul>
          <li>
            Provide the correct input to the model (like an image, sound, or
            text),
          </li>
          <li>And it will return an output — usually a prediction.</li>
        </ul>
        <br />
        <br />
        <Typography variant="h3">🚀 Why Use Pretrained Models?</Typography>
        <Typography>
          There are a lot of great reasons to start with pretrained models,
          especially if you are new to machine learning:
        </Typography>
        <ol>
          <li>
            ✅ 1. <b>Saves Time: </b>
            Training a model from scratch can take hours, days, or even weeks —
            especially if you are working with a large dataset. Pretrained
            models are ready to go instantly.
          </li>
          <li>
            ✅ 2. <b>Requires Less Technical Skill: </b>
            You don’t need to worry (yet!) about data collection, model
            architecture, training loops, or optimization. Someone else already
            handled the hard parts!
          </li>
          <li>
            ✅ 3. <b>Provides Better Results (Early On): </b>
            Pretrained models are trained on high-quality, massive datasets.
            That usually means better and more reliable predictions compared to
            a beginner model trained on small or messy data
          </li>
        </ol>
        <br />
        <br />
        <Typography>
          💡 In the module, you’ll learn how to build and train your own models
          from scratch. But starting with pretrained models helps you focus on
          understanding how machine learning fits into your creative projects
          without getting overwhelmed by technical details.
        </Typography>
        <br />
        <br />
        <Typography variant="h3">
          🧰 Pretrained Models Available in ml5.js
        </Typography>
        <Typography>
          ml5.js provides 7 easy-to-use pretrained models, ready to drop into
          your projects. <br />
          As of this writing, these are:
        </Typography>
        <ul>
          <li>
            <b>BodyPose –</b> detects and tracks body keypoints
          </li>
          <li>
            <b>BodySegmentation –</b> separates the person from the background
            in a video feed
          </li>
          <li>
            <b>HandPose –</b> tracks hand and finger positions
          </li>
          <li>
            <b>FaceMesh –</b> detects and maps facial landmarks
          </li>
          <li>
            <b>Sentiment –</b> analyzes the mood (positive/negative) of a
            sentence
          </li>
          <li>
            <b>SoundClassifier –</b> recognizes sound and speech
          </li>
          <li>
            <b>ImageClassifier –</b> identifies objects in images
          </li>
        </ul>
        <br />
        <br />
        <Typography>
          In the <b>next tutorial,</b> we’ll take a closer look at 3 of the 7
          models: Bodypose, ImageClassifier and SoundClassifier. See you in the
          next section
        </Typography>
      </Container>
      -------------------------------------------------------
      <Container>
        <Typography variant="h3">Examples of Pretrained models</Typography>
        <Typography>
          As of now, ML5.js offers 7 pretrained models. In this tutorial, we
          will focus on just 3 of them. Once you are comfortable with these, you
          should be able to explore the rest on your own by following the ML5
          documentation.
        </Typography>
        <br />
        <br />
        <Typography variant="h3">BodyPose</Typography>
        <Typography>
          The BodyPose model tracks <b>key body parts in real-time</b> using
          your webcam. There are two versions of this model available in ml5:
          BlazePose and MoveNet
        </Typography>
        <Typography>
          The MoveNet model tracks 17 key parts of your body, which includes
          your Nose, Eyes, Ears, Shoulders, Elbows, Wrists, Hips, Knees, and
          Ankles
          <br />
          <br />
          Below is an example of the MoveNet model predicting the key points of
          a person (Albert Einstein in this case):
        </Typography>
        <Image
          src="https://res.cloudinary.com/carleton-university/image/upload/v1749802043/tutorials/bodypose_with_albert_einstein.png"
          alt="Bodypose with albert einstein"
          width={500}
          height={500}
        />
        <Typography>
          And here’s an illustration showing all 17 body parts that MoveNet
          tracks:
        </Typography>
        <Image
          src="https://res.cloudinary.com/carleton-university/image/upload/v1749802396/tutorials/bodypose_movenet.png"
          alt="Bodypose movenet model"
          width={500}
          height={500}
        />
        <Typography>
          The BlazePose Tracks 33 key body points, offering more precision. This
          includes everything MoveNet tracks, plus: Mouth, Fingers, Toes, Hands,
          Heels, Index Fingers, and more
          <br />
          <br />
          Here’s a BlazePose example showing its detailed tracking capabilities:
        </Typography>
        <Image
          src="https://res.cloudinary.com/carleton-university/image/upload/v1749802567/tutorials/bodypose_blazepose.png"
          alt="Bodypose blazepose mddel"
          width={500}
          height={500}
        />
        <br />
        <br />
        <Typography variant="h5">
          Which of the models Should You Use?
        </Typography>
        <Typography>
          If you want <b>faster performance</b>, especially for simpler
          projects, go with <b>MoveNet</b> . If you need <b>high precision</b>{" "}
          (e.g. for detailed motion or gesture tracking), choose{" "}
          <b>BlazePose</b>.
          <br />
          <br />
          Below is a side-by-side comparison of both models in action:
        </Typography>
        <Image
          src="https://res.cloudinary.com/carleton-university/image/upload/v1749802986/tutorials/bodypose_movenet_blazepose.png"
          alt="movement with blazepose model comparison"
          width={500}
          height={500}
        />
        <br /> <br />
        <Typography variant="h3">ImageClassifier</Typography>
        <Typography>
          The ImageClassifier is a pretrained model in ml5.js that can recognize
          and describe the contents of an image. <br />
          It was trained on a huge dataset of images — including animals,
          plants, cars, buildings, and more. Because of this training, it is
          really good at recognizing and naming many common objects you show it.{" "}
          <br /> <br />
          For example, if you show it a photo of a car, it will be able to say,{" "}
          <br />
          “That looks like a sports car” Or if you show it a tree, it might
          respond, “That’s a palm tree.”
        </Typography>
        <br />
        <Typography variant="h5">Works With images and videos</Typography>
        <Typography>
          Even though it’s called ImageClassifier, the model can also work on a
          video feed from your webcam. This means it can recognize objects or
          people in real-time — not just in a still image. <br />
          For example, you could use it to tell whether the person in front of
          the webcam is more likely to be identified as a boy or a girl, based
          on the features the model has been trained on.
        </Typography>
        <br />
        <Typography>
          The image name of the bird below was predicted by the image classifier
        </Typography>
        <Image
          src="https://res.cloudinary.com/carleton-university/image/upload/v1749803502/tutorials/imageclassifier_american_robin.png"
          alt="ImageClassifier on the American robin"
          width={500}
          height={500}
        />
        <Typography>
          The model analyzes the image and gives you a label (what it thinks the
          object is) and a confidence score (how sure it is about that
          prediction) <br />
          In this case, the model says: “This bird is a robin, American robin,
          Turdus migratorius” with Confidence: 90% <br />
          And it’s absolutely right! The bird is an American robin from the
          Turdus migratorius family. 🙌
        </Typography>
        <br />
        <br />
        <Typography variant="h5">Important note about accuracy</Typography>
        <Typography>
          The ImageClassifier will always try to classify the image you give it,
          even if the object is not part of its training data. <br />
          Let’s say the model was trained only on pictures of cats and dogs.{" "}
          <br />
          Now, if you give it a picture of a horse, it does not know what a
          horse is — so it will guess the closest thing it knows. <br />
          In this case, the model might say: “This is a dog” with confidence:
          65% <br />
          It’s not trying to trick you — it just hasn’t seen horses before, so
          it makes its best guess.
        </Typography>
        <br />
        <br />
        <Typography variant="h3">SoundClassifier</Typography>
        <Typography>
          The SoundClassifier in ml5.js can recognize and classify specific
          sounds or spoken words. It comes pre-trained to understand 18 common
          words, including:
        </Typography>
        <br />
        <Typography>
          Numbers: zero to nine <br />
          Commands: up, down, left, right <br />
          Actions: stop, go <br />
          Responses: "yes, no <br />
          It can also recognize background noise!
        </Typography>
        <br />
        <Typography variant="h5">Why is this so cool</Typography>
        <Typography>
          With this pre-trained model, you can build exciting and accessible
          applications. For example, you could create a game that responds to
          voice commands: <br />
          Say up ➡️ the character jumps up <br />
          Say left ➡️ the character moves left
          <br />
          This can be especially helpful for people with disabilities—such as
          those without arms—enabling them to play games using only their voice.
        </Typography>
        <br />
        <Typography variant="h5">Confidence score</Typography>
        <Typography>
          Just like the ImageClassifier, the SoundClassifier uses a confidence
          score to show how certain it is about its prediction. <br />
          🧍‍♂️ Similarly, the BodyPose model also provides a confidence score to
          indicate how sure it is about detecting key body parts.
        </Typography>
        <br />
        <Typography variant="h3">Hurray!</Typography>
        <Typography>
          Now that we’ve covered the theory behind pretrained models and
          explored a few examples, it’s time to dive into some code! <br />
          In the next section, you’ll get to play around with the three
          pretrained models we just learned about. <br />
          See you there! 😊
          <br />
        </Typography>
      </Container>
      --------------------------------------------------
      <Container>
        <Typography variant="h3">Playing with pretrained models</Typography>
        <br />
        <Typography>
          In this tutorial, we’ll explore the BodyPose model together. After
          this, you’ll get the chance to experiment with the other six models on
          your own.
          <br />
          The best way to learn how these machine learning models work is by
          actually playing with them. When you experiment, you discover what
          works—and what doesn’t.
          <br />
          <br />
          As you experiment with these models, make sure you can answer the
          following questions:
        </Typography>
        <Typography variant="h5">
          1: What does the model do? In our case — what exactly does the
          BodyPose model do?
        </Typography>
        <Typography>
          According to the documentation, BodyPose is a full-body pose
          estimation model. It can detect and track key body parts in real-time.{" "}
          <br />
          You might ask: Which body parts? <br />
          Well, the model can track 17 key points, and even up to 33 key points
          — including your eyes, shoulders, nose, hips, and all the way down to
          your feet!
        </Typography>
        <Typography variant="h5">
          2: What are the inputs to the model? For BodyPose, what kind of input
          does it need?
        </Typography>
        <Typography>
          BodyPose takes in an HTML img tag, a video, a canvas element, or a
          p5.js image or video as input. <br />
          Basically, it needs an image or video to detect poses from.
        </Typography>
        <Typography variant="h5">
          Step 3: What does the model output? Specifically, what does the
          BodyPose model give us as output?
        </Typography>
        <Typography>
          The output is an array of poses. Each pose contains the X and Y
          coordinates of each keypoint, along with a confidence score that shows
          how sure the model is about the position of each point.
        </Typography>
        <Typography variant="h5">
          Step 4: Run the model and experiment!
        </Typography>
        <Typography>
          Here’s a snapshot of me below, waving at you while BodyPose tracks my
          face and body keypoints. <br />
          Now it’s your turn — tinker with the code, change things around, and
          see how the model reacts. If things go wrong, just refresh the page
          and try again! <br />
          📝 Tip: Be sure to check the BodyPose documentation to see all the
          cool features you can try out.
        </Typography>
        <br />
        <Image
          src="https://res.cloudinary.com/carleton-university/image/upload/v1749832032/tutorials/running_bodypose_model.png"
          alt="Running Bodypose model"
          width={800}
          height={800}
        />
        <br />
        <Typography>
          👉 <b>Before you move on:</b> <br />
          Click the Play icon to run the model in your browser. To stop it,{" "}
          <br />
          click the Stop icon (it’s right next to the play button).
        </Typography>
        <br />
        <br />
        <Typography variant="h5">Have fun!</Typography>
      </Container>
      ----------------------------------------------------
      <Container>
        <Typography variant="h3">
          Real world use case of pretrained models
        </Typography>
        <Typography>
          There are tons of creative and practical ways people around the world
          are using pretrained machine learning models — from solving real-world
          problems to just having fun!
          <br />
          Of course, I can not show you every single example out there, but here
          are a few cool ones to give you a taste. And with a quick Google
          search, you’ll find even more!
        </Typography>
        <br />
        <Typography>🤖 Cool Real-World Uses of Pretrained Models</Typography>
        <br />
        <Typography>
          <Link href="https://experiments.withgoogle.com/billtjonesai">
            1: PoseNet + Art
          </Link>
          <br />
          Used in collaboration with one of America’s most iconic artists to
          create interactive art experiences
        </Typography>
        <Typography>
          <Link href="https://x.com/drewbuttons/status/1184933151170351105">
            2. DeepSquat with Teachable Machine & TensorFlow
          </Link>
          <br />
          An ML model that checks if you’re doing your squats properly — trained
          with Teachable Machine!
        </Typography>
        <Typography>
          <Link href="https://experiments.withgoogle.com/semi-conductor">
            3. Conduct an Orchestra with Your Arms
          </Link>
          <br />
          Wave your arms in the air, and the browser turns you into a virtual
          conductor.
        </Typography>
        <Typography>
          <Link href="https://www.youtube.com/watch?v=OAdegPmkK-o">
            4. Helping People Be Better Understood
          </Link>
          <br />
          ML models are being used to improve communication tools for people
          with disabilities.
        </Typography>
        <Typography>
          <Link href="https://experiments.withgoogle.com/objectifier-spatial-programming">
            5. Train Everyday Objects to Respond to You
          </Link>
          <br />
          Use your webcam to turn objects in your environment into smart,
          interactive tools.
        </Typography>
        <Typography>
          <Link href="https://experiments.withgoogle.com/teachable-snake">
            6. Play Snake with Your Face
          </Link>
          <br />A classic snake game, but instead of a keyboard, you control it
          with your webcam!
        </Typography>
        <br />
        <br />

        <Typography>
          And that’s just scratching the surface. <br />
          You can explore even more on the Google Experiments website, or head
          over to our Projects section to see how we’re using these pretrained
          models in real apps.
        </Typography>
        <br />
        <br />
        <Typography>
          Now it’s time to build your first project using pretrained models!{" "}
          <br />
          🎯 Let’s head to the next section to see what you’ll be building.
        </Typography>
      </Container>
      -----------------------------------------------------
      <Container>
        <Typography variant="h3">It is finally time to build</Typography>
        <Typography>
          The best way to truly master a skill is to use it — not just learn the
          theory, but put it into action. <br />
          Now that you’ve learned the theory, it’s time to bring it to life with
          your very first project!
        </Typography>
        <Typography>
          🎯 Your Project: My Selfie Cam! <br />
          I’ve dropped the link to the starter files below. Here’s what you
          should do:
          <br />
          1. Download the starter files <br />
          2. Read through the README.md <br />
          3. Check out the Figma/images folder so you can visualize what you’ll
          be building
        </Typography>
        <br />
        <Typography></Typography>
        <br />
        <Typography>
          I’m super excited to see what you create! When you are done, don’t
          forget to share your finished project with the community on Facebook —
          we’d all love to check it out and cheer you on! <br />
          <Link href="https://aiprojectmentor.vercel.app/projects/my_selfie_cam">
            🚀 Ready? Here’s the link: to the project you will be building
          </Link>
        </Typography>
        <br />
        <Typography>
          Good luck — and most importantly, have fun building! 🙌
        </Typography>
      </Container>
    </>
  );
  // const result = components.map((item, index) => {
  //   const Component = componentMap[item.component];
  //   if (!Component) return null;

  //   return (
  //     <Component key={index} {...item.props}>
  //       {item.children && renderChildren(item.children)}
  //     </Component>
  //   );
  // });
  // return <Container>{result}</Container>;
}

function renderChildren(children) {
  if (typeof children === "string") return children;

  return children.map((child, i) => {
    if (typeof child === "string") return child;
    if (child.type === "br") return <br key={i} />;
    if (child.type === "b") return <b key={i}>{child.children}</b>;
    return null;
  });
}
