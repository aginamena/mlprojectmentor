"use client";

import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { useEffect, useState } from "react";

export default function PaymentOptions() {
  const [plans, setPlans] = useState([{ id: "" }]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function init() {
      setLoading(true);
      const request = await fetch("/api/subscription_plans");
      const response = await request.json();
      setPlans(response);
      setLoading(false);
    }
    init();
  }, []);

  async function handleSubscribe(priceId: string) {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );
    const { sessionId } = await fetch("/api/create_checkout_session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId }),
    }).then((res) => res.json());

    if (stripe) {
      const result = await stripe.redirectToCheckout({ sessionId });

      if (result.error) {
        console.error(result.error);
      }
    }
  }
  if (loading) {
    return <Typography>Loading...</Typography>;
  }
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            background: "linear-gradient(135deg, #F97316, #EF4444)",
            color: "white",
            borderRadius: 4,
            p: 4,
            textAlign: "left",
            position: "relative",
            height: "100%",
          }}
        >
          <Typography fontWeight="bold" sx={{ mb: 1 }}>
            YEARLY
          </Typography>

          <Box display="flex" alignItems="center" mb={1}>
            <Typography variant="h4" fontWeight="bold">
              $15
            </Typography>
            <Typography sx={{ ml: 1 }}>/month</Typography>
          </Box>

          <Typography sx={{ mb: 2 }}>
            - Billed yearly
            <strong> ($180)</strong>
          </Typography>

          <Typography sx={{ mb: 2 }}>
            - Grants you access to all <strong>premium tutorials</strong> and
            projects.
          </Typography>
          <Typography sx={{ mb: 2 }}>
            - The <strong>best option</strong> for long time frame learners.
          </Typography>
          <Typography sx={{ mb: 4 }}>
            - Saves you extra $240 compared to our monthly plan.
          </Typography>
          <Button
            variant="contained"
            onClick={() => handleSubscribe(plans[0].id)}
            sx={{
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
            Smart learners go premium — join them
          </Button>

          <Chip
            label="🚀 Most popular"
            size="small"
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
          />
        </Box>
      </Grid>
      <Grid size={{ xs: 12, md: 4 }}>
        <Box
          sx={{
            border: "1px solid #333",
            borderRadius: 4,
            p: 4,
            textAlign: "left",
            color: "white",
            height: "100%",
          }}
        >
          <Typography fontWeight="bold" sx={{ mb: 1 }}>
            MONTHLY
          </Typography>

          <Box display="flex" alignItems="center" mb={1}>
            <Typography variant="h4" fontWeight="bold">
              $35
            </Typography>
            <Typography sx={{ ml: 1 }}>/month</Typography>
          </Box>

          <Typography sx={{ mb: 2 }}>- Billed monthly</Typography>

          <Typography sx={{ mb: 2 }}>
            - Grants you access to all <strong>premium tutorials</strong> and
            projects.
          </Typography>
          <Typography sx={{ mb: 4 }}>
            - The <strong>best option</strong> for short time frame learners.
          </Typography>

          <Button
            variant="contained"
            onClick={() => handleSubscribe(plans[1].id)}
            sx={{
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
            Smart learners go premium — join them
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}
