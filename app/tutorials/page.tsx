import { Box, Container, Typography } from "@mui/material";

export default function Tutorial() {
  return (
    <Container>
      <Typography>heading text goes here</Typography>
      <Box>(1)...</Box>
      <Box>(2)...</Box>
      <Box>
        <Typography variant="h3">3. Using Pretrained Models</Typography>
        <Typography variant="h6">
          In this module, you will learn what pretrained models are and how to
          use them. You will then apply your new knowledge into building
          practial projects later on at the end of this module.
        </Typography>
        <Typography variant="h5">a. What exactly is a model?</Typography>
        <Typography variant="h6">
          Let’s start with the basics — what does “model” mean in machine
          learning?
        </Typography>
        <Typography variant="h5">b. What are pretrained models?</Typography>
        <Typography variant="h6">
          Now that we know what a model is, let’s look at models that have
          already been trained for you.
        </Typography>
        <Typography variant="h5">
          c. What are some examples of pretrained models I can use?
        </Typography>
        <Typography variant="h6">
          Show me the tools! Let’s explore real models you can start using right
          away.
        </Typography>
        <Typography variant="h5">
          d. How do I get hands-on with these pretrained models?
        </Typography>
        <Typography variant="h6">
          It’s time to play — here’s how to interact with and experiment with
          them.
        </Typography>
        <Typography variant="h5">
          f. Are there any real-world applications for pretrained models?
        </Typography>
        <Typography variant="h6">
          Yes! Let’s look at how these models are solving problems in the real
          world.
        </Typography>
        <Typography variant="h5">
          f. What are some fun project ideas to apply what I’ve learned?
        </Typography>
        <Typography variant="h6">
          Ready to build? Here is a project idea to put your new skills to use.
        </Typography>
      </Box>
      <Box>
        <Typography variant="h3">
          4. But I want to build my own model — how do I do that?
        </Typography>
        <Typography variant="h6">
          We’re still working on the content for this module. In the meantime,
          make sure you are comfortable using pretrained models first before
          diving into building your own.
        </Typography>
      </Box>
    </Container>
  );
}
