import { Box } from "@mui/material";

export default function WhatIsML() {
  return (
    <Box>
      Let’s start with a simple analogy to ground the idea: Imagine you’re
      teaching a child how to identify fruit. You show them several pictures —
      apples, bananas, oranges — and say, “This is an apple,” “This is a
      banana,” and so on. The child doesn’t have a complex set of rules about
      what makes an apple different from a banana, but with enough examples,
      they’ll start recognizing patterns. They’ll learn to differentiate based
      on characteristics like color, shape, and size, even though you didn’t
      spell out each rule.
      <br />
      <br />
      Now, instead of a child, imagine a computer. How does it learn? Instead of
      telling it exactly what an apple looks like, you give it data — lots and
      lots of examples — and let it learn the patterns on its own. That’s the
      magic of machine learning.
      <br />
      <br />
      <b>So What is Machine Learning, Really?</b>
      <br />
      Machine learning (ML) is a field of study within artificial intelligence
      (AI) that focuses on creating systems that can learn from data and improve
      over time, without being explicitly programmed. Here’s a breakdown: <br />
      <br />
      1. Data: This is the most critical element. It’s the fuel for learning.
      Just as humans learn by experiencing the world around us, computers learn
      from the data we provide.
      <br />
      <br />
      2. Algorithms: Think of these as the recipes or methods for processing the
      data. An algorithm can find patterns in the data, such as identifying the
      traits that define a cat in a picture.
      <br />
      <br />
      3. Model: After an algorithm processes the data, it creates a model — this
      is the outcome of the learning process. It’s a mathematical representation
      that allows the system to make predictions based on new, unseen data. For
      example, after learning from thousands of pictures of cats and dogs, the
      model can look at a new image and decide whether it is a cat or a dog.
      <br />
      <br />
      Instead of being told exactly what to do (like traditional programming), a
      machine learns to make decisions on its own, based on what it sees. It
      improves as it gets more examples, making it more accurate over time.
    </Box>
  );
}
