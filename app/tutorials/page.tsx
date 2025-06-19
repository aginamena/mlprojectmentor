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
import Link from "next/link";

const tutorials = [
  {
    number: 1,
    title: "Lets Get Started",
    description:
      " This module lays the groundwork for your machine learning journey using ML5.js. You’ll learn what machine learning really means, and how to get started with the ML5 library.",
    sub_tutorials: [
      {
        title: "Getting The Most From These Tutorials",
        description:
          "A quick guide on how to follow along and make the most out of these tutorials.",
        premium: false,
        tutorial_name: "getting_the_most_from_these_tutorials",
      },
      {
        title: "Is It Machine Learning Or Artificial Intelligence?",
        description:
          " AI and ML are connected, but not the same — here’s the key difference.",
        premium: false,
        tutorial_name: "machine_learning_or_artificial_intelligence",
      },
      {
        title: "What The Heck Is ML5.js — And How Do I Use It?",
        description:
          "Get introduced to ML5.js, the beginner-friendly tool we’ll use to build ML projects.",
        premium: false,
        tutorial_name: "what_is_ml5.js_and_how_do_i_use_it",
      },
    ],
  },
  {
    number: 2,
    title: "Using Pretrained Models",
    description:
      " In this module, you will learn what pretrained models are and how to use them. You will then apply your new knowledge into building practial projects later on at the end of this module.",
    sub_tutorials: [
      {
        title: "What Exactly Is A Model?",
        description:
          "Let’s start with the basics — what does “model” mean in machine learning?",
        premium: false,
        tutorial_name: "what_is_a_model",
      },
      {
        title: "What Are Pretrained Models?",
        description:
          "Now that we know what a model is, let’s look at models that have already been trained for you.",
        premium: true,
        tutorial_name: "what_are_pretrained_models",
      },
      {
        title: "What Are Some Examples Of Pretrained Models I Can Use?",
        description:
          "Show me the tools! Let’s explore real models you can start using right away.",
        premium: true,
        tutorial_name: "examples_of_pretrained_models",
      },
      {
        title: "How do I Get Hands-on With These Pretrained Models?",
        description:
          "It’s time to play — here’s how to interact with and experiment with them.",
        premium: true,
        tutorial_name: "playing_with_pretrained_models",
      },
      {
        title: "Are There Any Real-World Applications Using Pretrained Models?",
        description:
          "Yes! Let’s look at how these models are solving problems in the real world.",
        premium: true,
        tutorial_name: "real_world_use_case_of_pretrained_models",
      },
      {
        title: "Give Me A Project To Apply What I’ve Learned",
        description:
          "Ready to build? Here is a project to put your new skills to use.",
        premium: false,
        tutorial_name: "first_project_to_build",
      },
    ],
  },
  {
    number: 3,
    title: " But I want to build my own model — how do I do that?",
    description:
      "We’re still working on the content for this module. In the meantime, make sure you are comfortable using pretrained models first before diving into building your own.",
    sub_tutorials: [],
  },
];

export default function Tutorials() {
  return (
    <Container>
      <Introduction />
      <Divider sx={{ mt: 4, mb: 4 }} />
      <Box>
        {tutorials.map((tutorial, idx) => (
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
                <Typography fontWeight="bold">{tutorial.number}</Typography>
              </Avatar>
              <Typography variant="h5" fontWeight="bold">
                {tutorial.title}
              </Typography>
            </Stack>

            <Typography variant="body1" sx={{ mb: 3 }}>
              {tutorial.description}
            </Typography>

            <List>
              {tutorial.sub_tutorials.map((sub_tutorial, i) => (
                <ListItem alignItems="flex-start" key={i} sx={{ pl: 0 }}>
                  <ListItemIcon>
                    <PlayCircleOutlineIcon sx={{ color: "#1976d2" }} />
                  </ListItemIcon>
                  <Link href={`tutorials/${sub_tutorial.tutorial_name}`}>
                    <Typography
                      fontWeight="bold"
                      variant="subtitle1"
                      style={{ textDecoration: "underline" }}
                    >
                      {sub_tutorial.title}
                      {sub_tutorial.premium && (
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
                      {sub_tutorial.description}
                    </Typography>
                  </Link>
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
