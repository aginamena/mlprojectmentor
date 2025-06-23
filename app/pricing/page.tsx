import Header from "@/components/Header";
import CheckIcon from "@mui/icons-material/Check";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Faq from "./Faq";
import PaymentOptions from "./PaymentOptions";

const benefits = [
  {
    title: "Full Access to Premium Tutorials",
    description:
      "Get unlimited access to all current and upcoming tutorials to deepen your machine learning skills.",
  },
  {
    title: "Unlock All Premium Projects",
    description:
      "Gain access to every existing and future project — hands-on and practical for real-world learning.",
  },
  {
    title: "Portfolio-Ready Projects",
    description:
      "Each project is styled, documented, and designed to be showcase-ready for your portfolio or job applications.",
  },
  {
    title: "Real-World Development Experience",
    description:
      "Work with real project requirements and designs — just like in a professional software development environment.",
  },
];

const testimonials = [
  {
    name: "Rebecca Dokubo",
    profile:
      "https://res.cloudinary.com/carleton-university/image/upload/v1750617957/testimonials/Rebecca%20Dokubo.jpg",
    content:
      "The tutorial section really helped me build a strong foundation in machine learning. It gave me the confidence to expand and apply what I learned. Thank you!",
  },
  {
    name: "Emmanuel J. Kunle",
    profile:
      "https://res.cloudinary.com/carleton-university/image/upload/v1750617893/testimonials/Matthew%20Obasi.jpg",
    content:
      "Practice really does make perfect. I've been building their machine learning projects since they started releasing them, and I've significantly improved in working with requirements, design, and programming overall.",
  },
  {
    name: "Matthew Obasi",
    profile:
      "https://res.cloudinary.com/carleton-university/image/upload/v1750617827/testimonials/Emmanuel%20J.%20Kunle.jpg",
    content:
      "Mena has been incredibly helpful in guiding me through the projects whenever I reach out on Facebook. Thank you so much, sir!",
  },
];

export default async function Pricing() {
  //   const pricing = await fetch("/api/subscription_plans");
  //   const prices = await pricing.json();
  //   const subscriptionPlans = await getSubscriptionPlans();

  return (
    <>
      <Header />
      <Container>
        <Box
          sx={{
            color: "white",
            py: 8,
            textAlign: "center",
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            Accelerate Your Learning
          </Typography>

          <Typography sx={{ mt: 1, mb: 6, opacity: 0.85 }}>
            Free gives you the basics. Premium gives you mastery.
          </Typography>
          <PaymentOptions />
        </Box>
      </Container>
      <Box
        sx={{
          backgroundColor: "#21252F",
          color: "white",
          py: 10,
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h5" fontWeight="bold" mb={6}>
            What You Gain by Upgrading
          </Typography>

          <Grid container spacing={6}>
            {benefits.map((benefit, idx) => (
              <Grid size={{ xs: 12, sm: 6, md: 6 }} key={idx}>
                <Box display="flex" alignItems="flex-start" gap={2}>
                  {/* <Box>{benefit.icon}</Box> */}
                  <CheckIcon fontSize="large" color="success" />
                  <Box textAlign="left">
                    <Typography fontWeight="bold" fontSize={16}>
                      {benefit.title}
                    </Typography>
                    <Typography sx={{ mt: 0.5, fontSize: 14 }}>
                      {benefit.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Container>
        <Box
          sx={{
            py: 8,
            px: 2,
            textAlign: "center",
            color: "#fff",
          }}
        >
          <Typography variant="h4" fontWeight="bold" mb={6}>
            Hear From Other Developers
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {testimonials.map((testimonial, index) => (
              <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
                <Card
                  sx={{
                    height: "100%",
                    backgroundColor: "#111",
                    color: "#fff",
                    borderRadius: 3,
                    p: 3,
                    border: "1px solid #333",
                  }}
                >
                  <CardContent>
                    <Typography variant="body1" fontStyle="italic" mb={3}>
                      “ {testimonial.content} “
                    </Typography>
                    <Stack direction="column" alignItems="center" spacing={1}>
                      <Avatar src={testimonial.profile} />
                      <Typography fontWeight="bold">
                        {testimonial.name}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

      <Box sx={{ bgcolor: "#242727", py: 8, px: 2 }}>
        <Container
          sx={{
            display: { xs: "block", md: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            textAlign="center"
            sx={{ mb: { md: 0, xs: 5 } }}
          >
            Frequently Asked <br />
            Questions
          </Typography>
          <Faq />
        </Container>
      </Box>
    </>
  );
}
