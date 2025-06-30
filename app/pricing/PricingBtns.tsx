"use client";

import { loginWithGoogle } from "@/lib/auth";
import { auth } from "@/lib/firebaseClient";
import { Button, CircularProgress } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
export default function PricingBtns({ priceId }: { priceId: string }) {
  const user = auth.currentUser;
  const [loading, setLoading] = useState(false);

  async function handleSubscribe() {
    const stripe = await loadStripe(
      process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
    );
    const { sessionId } = await fetch("/api/create_checkout_session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ priceId, customerEmail: auth.currentUser?.email }),
    }).then((res) => res.json());

    if (stripe) {
      const result = await stripe.redirectToCheckout({ sessionId });

      if (result.error) {
        console.error(result.error);
      }
    }
    setLoading(false);
  }
  async function handleOnclick() {
    setLoading(true);
    if (user) {
      handleSubscribe();
    } else {
      await loginWithGoogle();
      handleSubscribe();
    }
  }
  return (
    <Button
      variant="contained"
      onClick={handleOnclick}
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
      {loading && (
        <CircularProgress
          size={24}
          style={{ marginLeft: "5px", color: "black" }}
        />
      )}
    </Button>
  );
}
