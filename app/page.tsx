import Header from "@/components/Header";
import JoinFbCommunity from "@/components/JoinFbCommunity";
import CodeIcon from "@mui/icons-material/Code";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const benefits = [
    {
      title: "Real-World ML Projects",
      description:
        "Each project on this site uses machine learning to solve a real-world problem.",
      image: "/realWorldMachineLearning.jpg",
    },
    {
      title: "You take the lead",
      description:
        "Tackle projects on your own, without following detailed instructions.",
      image: "/noMoreHandHolding.jpg",
    },
    {
      title: "Portfolio Ready Projects",
      description:
        "Showcase projects that prove your skills perfect for hiring managers and tech recruiters.",
      image: "/portfolioReadyProject.jpg",
    },
    {
      title: "Built For Web Developers",
      description:
        "Our projects are tailored for web devs who know html, css and javascript and want to start building ML projects",
      image: "/introduction-image.jpg",
    },
  ];

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: "700px",
          backgroundImage: 'url("/introduction-image.jpg")',
          backgroundSize: "cover",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(to bottom, rgba(0,0,0,0.4) 30%, rgba(0,0,0,1) 100%)`,
          }}
        />
        <Header />
        <Box
          sx={{
            maxWidth: "720px",
            position: "absolute",
            top: "50%",
            transform: "translate(0, -10%)",
            px: 4,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              fontWeight: 800,
              lineHeight: 1.2,
              mb: 3,
              fontSize: { xs: "2rem", md: "3.5rem" },
            }}
          >
            Start Building Machine Learning Projects
            <br />
            Using Just JavaScript!
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#0018FF",
              color: "#fff",
              textTransform: "none",
              fontWeight: 600,
              px: 4,
              py: 1.5,
              borderRadius: "999px",
              fontSize: "1rem",
              "&:hover": {
                backgroundColor: "#0012cc",
              },
            }}
          >
            <Link href="projects">Start Your First ML Project Now!</Link>
          </Button>
        </Box>
      </Box>

      <Box sx={{ py: 8, px: 4, backgroundColor: "#0f0f0f" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 700, color: "white", mb: 6 }}
        >
          Your Benefits
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {benefits.map((benefit, index) => (
            <Grid key={index}>
              <Box
                sx={{
                  height: 280,
                  maxWidth: 607,
                  borderRadius: 2,
                  position: "relative",
                  backgroundImage: `url(${benefit.image})`,
                  backgroundSize: "cover",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    background: `linear-gradient(to bottom, rgba(0,0,0,0.4) 30%, rgba(0,0,0,1) 100%)`,
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    p: 2,
                  }}
                >
                  <Typography variant="subtitle1" fontWeight={600}>
                    {benefit.title}
                  </Typography>
                  <Typography variant="body2">{benefit.description}</Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          background: `linear-gradient(
                  135deg,
                  #00F9FF 10%,
                 #0018FF 50%,
                  #00F9FF 100%
                ) `,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          px: 4,
          py: 8,
        }}
      >
        <Typography
          variant="h3"
          sx={{ fontWeight: "bold", color: "#fff", mb: 6 }}
        >
          Built For
        </Typography>

        <Grid container spacing={4} sx={{ maxWidth: 1000 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: "rgba(0, 0, 50, 0.5)",
                color: "#fff",
                borderRadius: 3,
                p: 2,
                height: "100%",
              }}
            >
              <CardContent>
                <CodeIcon sx={{ fontSize: 30, mb: 2, textAlign: "unset" }} />
                <Typography variant="h6" fontWeight="bold">
                  Web developers who know HTML, CSS, and JavaScript and want to
                  apply their skills to machine learning.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Card
              sx={{
                backgroundColor: "rgba(0, 0, 50, 0.5)",
                color: "#fff",
                borderRadius: 3,
                p: 2,
                height: "100%",
              }}
            >
              <CardContent>
                <CodeIcon sx={{ fontSize: 30, mb: 2, textAlign: "unset" }} />
                <Typography variant="h6" fontWeight="bold">
                  Web developers stuck in machine learning tutorial hell who are
                  ready to start building real projects.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          sx={{
            mt: 6,
            backgroundColor: "#fff",
            color: "#000",
            textTransform: "none",
            fontWeight: "bold",
            px: 4,
            py: 1.5,
            borderRadius: "999px",
            fontSize: "1rem",
            "&:hover": {
              backgroundColor: "#e0e0e0",
            },
          }}
        >
          <Link href="projects">Start Your First ML Project Now!</Link>
        </Button>
      </Box>

      <Box sx={{ backgroundColor: "#0f0f0f", color: "#fff", py: 8, px: 4 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ fontWeight: 700, color: "white", mb: 6 }}
        >
          About Me
        </Typography>
        <Box
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Box
            sx={{
              borderRadius: "16px",
              background: `linear-gradient(
                  45deg,
                  rgba(0, 0, 0, 1) 30%,
                  rgba(0, 249, 255, 0.3) 50%,
                  rgba(0, 0, 0, 1) 80%
                ) `,
            }}
          >
            <Image
              src="/mena_agina.png"
              alt="Profile"
              width={608}
              height={608}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
          <Box sx={{ maxWidth: "608px", marginTop: { xs: "20px", md: 0 } }}>
            <Typography sx={{ mb: 2 }}>
              Hi, I’m Mena Agina — founder of this site, software developer, and
              AI enthusiast.
            </Typography>
            <Typography sx={{ mb: 2 }}>
              This platform is made for web developers who know HTML, CSS, and
              JavaScript and want to start building practical, real-world ML
              projects
            </Typography>
            <Typography sx={{ mb: 4 }}>
              We provide clear project descriptions, expected outcomes, and all
              the resources you need to build confidently and successfully.
              Finish the project, and it is yours to showcase anywhere — your
              portfolio, LinkedIn, or even our community.
            </Typography>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#0018FF",
                color: "#fff",
                textTransform: "none",
                fontWeight: 600,
                px: 4,
                py: 1.5,
                borderRadius: "999px",
                fontSize: "1rem",
                "&:hover": {
                  backgroundColor: "#0012cc",
                },
              }}
            >
              <Link href="projects">Let’s build something real</Link>
            </Button>
          </Box>
        </Box>
      </Box>
      <JoinFbCommunity header="Join Our Community 🚀" />
    </>
  );
}
