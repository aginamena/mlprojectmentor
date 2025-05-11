import Benefit from "@/components/Benefit";
import { Container, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        Start Building Machine Learning Projects — Using Just JavaScript!
      </Typography>
      <Box style={{ textAlign: "center", marginTop: "40px" }}>
        <Link href="projects">
          <Button variant="contained" size="large">
            Start ml projects now
          </Button>
        </Link>
      </Box>

      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "50px",
          marginBottom: "50px",
        }}
      >
        <Image
          src="/mena_agina.png"
          width={500}
          height={200}
          alt="mena agina"
        />
        <Box sx={{ width: { xs: "100%", md: "50%" } }}>
          <Typography>
            Hi, I’m Mena Agina — founder of this site, software developer, and
            AI enthusiast.
          </Typography>
          <Typography style={{ marginTop: "30px", marginBottom: "30px" }}>
            This platform is made for web developers who know HTML, CSS, and
            JavaScript and want to start building practical, real-world ML
            projects
          </Typography>
          <Box>
            <Box>
              <Typography>
                We provide clear project descriptions, expected outcomes, and
                all the resources you need to build confidently and
                successfully.
              </Typography>
            </Box>
          </Box>

          <Typography style={{ marginTop: "30px", marginBottom: "30px" }}>
            Finish the project, and it is yours to showcase anywhere — your
            portfolio, LinkedIn, or even our community. <br />
          </Typography>
          <Typography>Let’s build something real. 🚀</Typography>
        </Box>
      </Box>
      <Box style={{ marginTop: "30px", marginBottom: "30px" }}>
        <Typography
          variant="h4"
          style={{ textAlign: "center", marginBottom: "20px" }}
        >
          What you will get
        </Typography>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Benefit
            title="Real-World ML Projects "
            description=" Work on projects with no step-by-step instructions."
          />
          <Benefit
            title="No More Hand-Holding"
            description="You won’t follow a tutorial. You’ll face prompts and specs that push you to build from scratch."
          />
          <Benefit
            title="Build a Real Portfolio project"
            description="Showcase projects that prove your skills—perfect for hiring managers and tech recruiters"
          />
          <Benefit
            title="Built for Web Developers"
            description="Our projects are tailored for devs who know html, css and javascript and want to start building ML projects."
          />
        </Box>
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ marginBottom: "30px" }}>
          Who is this for
        </Typography>
        <Box>
          <Typography>
            1. Web developers stuck in machine learning tutorial hell who are
            ready to start building real projects.
          </Typography>
          <Typography>
            {" "}
            2. Web developers who know HTML, CSS, and JavaScript and want to
            apply their skills to machine learning.
          </Typography>
        </Box>
      </Box>
      <Box style={{ textAlign: "center", marginTop: "30px" }}>
        <Typography variant="h5" style={{ marginBottom: "30px" }}>
          Start Your First ML Project Now
        </Typography>
        <Link href="projects">
          <Button variant="contained">Start ml projects now</Button>
        </Link>
      </Box>
    </Container>
  );
}
