import Lecture from "@/components/Lecture";
import { Box, Container, Typography, Button } from "@mui/material";
import Link from "next/link";
import Conclusion from "./Conclusion";
import PremiumContent from "./PremiumContent";
import WhatIsML from "./WhatIsML";
import WhyMLIsImportant from "./WhyMLIsImportant";
import WhyMLProjects from "./WhyMLProjects";

export default function NestedList() {
  return (
    <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Typography variant="h5" style={{ marginBottom: "30px" }}>
        This crash course in machine learning will teach you everything you need
        to start building ML projects on this site.
      </Typography>
      <Box>
        <Typography style={{ marginBottom: "10px" }}>
          Part 1: Introduction to Machine Learning
        </Typography>
        <Lecture
          title="Why Should You Start Building Machine Learning Projects?"
          content={<WhyMLProjects />}
          defaultExpanded={true}
        />
        <Lecture
          title="What is Machine Learning?"
          content={<WhatIsML />}
          defaultExpanded={false}
        />
        <Lecture
          title="Why is Machine Learning Important?"
          content={<WhyMLIsImportant />}
          defaultExpanded={false}
        />
      </Box>
      <Box style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Typography style={{ marginBottom: "10px" }}>
          Part 2: Machine Leaning Foundations
        </Typography>
        <Lecture
          title="Types of Machine Learning"
          content={<PremiumContent />}
          defaultExpanded={false}
        />
        <Lecture
          title="What is a Model?"
          content={<PremiumContent />}
          defaultExpanded={false}
        />
        <Lecture
          title="Introducing TensorFlow.js"
          content={<PremiumContent />}
          defaultExpanded={false}
        />
        <Lecture
          title="Setting Up TensorFlow.js"
          content={<PremiumContent />}
          defaultExpanded={false}
        />
        <Lecture
          title="Key Operations on Tensors"
          content={<PremiumContent />}
          defaultExpanded={false}
        />
      </Box>
      <Box>
        <Typography style={{ marginBottom: "10px" }}>
          Part 3: Machine Learning Core
        </Typography>
        <Lecture
          title="Using Pre-trained Models"
          content={<PremiumContent />}
          defaultExpanded={false}
        />
        <Lecture
          title="Fine-Tuning Pre-trained Models"
          content={<PremiumContent />}
          defaultExpanded={false}
        />
        <Lecture
          title="Preparing Your Data for Training"
          content={<PremiumContent />}
          defaultExpanded={false}
        />

        <Lecture
          title="Creating Your Own Model from Scratch"
          content={<PremiumContent />}
          defaultExpanded={false}
        />
        <Lecture
          title="Evaluating Model Performance"
          content={<PremiumContent />}
          defaultExpanded={false}
        />

        <Lecture
          title="Saving and Deploying Your Model"
          content={<PremiumContent />}
          defaultExpanded={false}
        />
        <Lecture
          title="Using Models in a Web App"
          content={<PremiumContent />}
          defaultExpanded={false}
        />

        <Lecture
          title="Conclusion"
          content={<Conclusion />}
          defaultExpanded={false}
        />
      </Box>

      <Box style={{ textAlign: "center", marginTop: "40px" }}>
        <Typography variant="h5" style={{ marginBottom: "30px" }}>
          Ready to Get Out of Tutorial Hell?
        </Typography>
        <Link href="https://forms.gle/zGadCw1NJqmLdp6w9">
          <Button variant="contained">Start ml projects now</Button>
        </Link>
      </Box>
    </Container>
  );
}
