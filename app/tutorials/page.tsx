import LockIcon from "@mui/icons-material/Lock";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import {
  Avatar,
  Box,
  Chip,
  Container,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import Introduction from "./Introduction";

const sections = [
  {
    number: 1,
    title: "Lets Get Started",
    description:
      " This module lays the groundwork for your machine learning journey using ML5.js. You’ll learn what these tutorials cover, what machine learning really means, and how to get started with the ML5 library.",
    items: [
      {
        title: "Getting The Most From These Tutorials",
        desc: "A quick guide on how to follow along and make the most out of these tutorials.",
        premium: false,
      },
      {
        title: "Is It Machine Learning Or Artificial Intelligence?",
        desc: " AI and ML are connected, but not the same — here’s the key difference.",
        premium: false,
      },
      {
        title: "What The Heck Is ML5.js — And How Do I Use It?",
        desc: "Get introduced to ML5.js, the beginner-friendly tool we’ll use to build ML projects.",
        premium: false,
      },
    ],
  },
  {
    number: 2,
    title: "Using Pretrained Models",
    description:
      " In this module, you will learn what pretrained models are and how to use them. You will then apply your new knowledge into building practial projects later on at the end of this module.",
    items: [
      {
        title: "What Exactly Is A Model?",
        desc: "Let’s start with the basics — what does “model” mean in machine learning?",
        premium: false,
      },
      {
        title: "What Are Pretrained Models?",
        desc: "Now that we know what a model is, let’s look at models that have already been trained for you.",
        premium: true,
      },
      {
        title: "What Are Some Examples Of Pretrained Models I Can Use?",
        desc: "Show me the tools! Let’s explore real models you can start using right away.",
        premium: true,
      },
      {
        title: "How do I Get Hands-on With These Pretrained Models?",
        desc: "It’s time to play — here’s how to interact with and experiment with them.",
        premium: true,
      },
      {
        title: "Are There Any Real-World Applications Using Pretrained Models?",
        desc: "Yes! Let’s look at how these models are solving problems in the real world.",
        premium: true,
      },
      {
        title: "Give Me A Project Idea To Apply What I’ve Learned?",
        desc: "Ready to build? Here is a project idea to put your new skills to use.",
        premium: false,
      },
    ],
  },
  {
    number: 3,
    title: " But I want to build my own model — how do I do that?",
    description:
      "We’re still working on the content for this module. In the meantime, make sure you are comfortable using pretrained models first before diving into building your own.",
    items: [],
  },
];

export default function Tutorials() {
  return (
    <Container>
      <Introduction />
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Box>
        {sections.map((section, idx) => (
          <Box key={idx} sx={{ mb: 8 }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{ mb: 2 }}
            >
              <Avatar
                sx={{
                  bgcolor: "#00C982",
                  width: 40,
                  height: 40,
                  color: "white",
                }}
              >
                <Typography fontWeight="bold">{section.number}</Typography>
              </Avatar>
              <Typography variant="h5" fontWeight="bold">
                {section.title}
              </Typography>
            </Stack>

            <Typography variant="body1" sx={{ mb: 3 }}>
              {section.description}
            </Typography>

            <List>
              {section.items.map((item, i) => (
                <ListItem alignItems="flex-start" key={i} sx={{ pl: 0 }}>
                  <ListItemIcon>
                    <PlayCircleOutlineIcon sx={{ color: "#1976d2" }} />
                  </ListItemIcon>
                  <Box>
                    <Typography fontWeight="bold" variant="subtitle1">
                      {item.title}
                      {item.premium && (
                        <Chip
                          icon={<LockIcon sx={{ fontSize: 16 }} />}
                          label="Premium"
                          size="small"
                          sx={{
                            color: "white",
                            bgcolor: "#0012cc",
                            marginLeft: "10px",
                          }}
                        />
                      )}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {item.desc}
                    </Typography>
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
