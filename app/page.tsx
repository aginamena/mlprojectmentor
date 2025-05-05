import Benefit from "@/components/Benefit";
import { Container, Typography, Box, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <Container style={{ paddingTop: "40px", paddingBottom: "40px" }}>
      <Typography variant="h4" style={{ textAlign: "center" }}>
        Stop following tutorials. Start building real-world projects.
      </Typography>
      <Box style={{ textAlign: "center", marginTop: "40px" }}>
        <Link href="https://forms.gle/zGadCw1NJqmLdp6w9">
          <Button variant="contained" size="large">
            Sign up
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
          <Box>
            <Typography>
              Hello! My name is Mena Agina — I am the founder of this website, a
              software developer and AI enthusiast (and if you’re reading this,
              chances are you are too).
            </Typography>
            <Typography style={{ marginTop: "30px", marginBottom: "30px" }}>
              Let’s be honest: <br />
              Many web developers get stuck in tutorial hell — watching endless
              machine learning or coding videos without ever building something
              real. Without hands-on projects, your learning stalls, confidence
              dips, and your portfolio remains empty.
            </Typography>
            <Box>
              That’s where this site comes in. <br />
              <Box>
                <Typography>
                  My goal is to help you get back to doing what you love —
                  building real projects. We’ll provide:
                </Typography>
                <Typography> (1) A clear project description</Typography>
                <Typography>
                  (2) Detailed design guidelines for desktop, mobile, and tablet
                </Typography>
                <Typography>
                  (3) CSS styling instructions and all the key requirements
                  you’ll need to build the app
                </Typography>
              </Box>
            </Box>

            <Typography style={{ marginTop: "30px", marginBottom: "30px" }}>
              Once you’re done, the project is yours. <br />
              Share it with friends, add it to your résumé or LinkedIn, and even
              showcase it in our community so others can see your work.
            </Typography>
            <Typography>
              I hope you’re as excited as I am. <br />
              Sign up now so we can notify you when the next project is ready to
              build!
            </Typography>
          </Box>
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
            title="Real-World AI Projects "
            description=" Work on projects that mimic real startup
          challenges—no step-by-step instructions."
          />
          <Benefit
            title="No More Hand-Holding"
            description="You won’t follow a tutorial. You’ll face prompts and specs that push you to build from scratch."
          />
          <Benefit
            title="Build a Real Portfolio project"
            description="Showcase projects that prove your skills—perfect for hiring
          managers and tech recruiters"
          />
          <Benefit
            title="Built for Web Developers"
            description="Our projects are tailored for devs who know React, Next.js, or similar stacks and want to start building AI projects."
          />
        </Box>
      </Box>
      <Box style={{ textAlign: "center" }}>
        <Typography variant="h4" style={{ marginBottom: "30px" }}>
          Who is this for
        </Typography>
        <Box>
          <Typography>(1) Web developers tired of tutorial hell</Typography>
          <Typography>
            {" "}
            (2) Self-taught devs looking to break into AI
          </Typography>
          <Typography>(3) Bootcamp grads building their portfolio</Typography>
          <Typography> (4) Engineers transitioning into ML</Typography>
        </Box>
      </Box>
      <Box style={{ textAlign: "center", marginTop: "30px" }}>
        <Typography variant="h5" style={{ marginBottom: "30px" }}>
          Ready to Get Out of Tutorial Hell?
        </Typography>
        <Link href="https://forms.gle/zGadCw1NJqmLdp6w9">
          <Button variant="contained">Sign up</Button>
        </Link>
      </Box>
    </Container>
  );
}
