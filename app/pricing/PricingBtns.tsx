"use client";

import { useUser } from "@auth0/nextjs-auth0";
import LockIcon from "@mui/icons-material/Lock";
import { Button } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

export default function PricingBtns({ priceId }: { priceId: string }) {
  const { user } = useUser();
  const router = useRouter();

  async function handleSubscribe() {
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
  function handleOnclick() {
    if (!user) {
      router.push(`../auth/login?returnTo=/pricing`);
    } else {
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
      Smart learners go premium — join them{" "}
      {!user && <LockIcon style={{ marginLeft: "5px" }} />}
    </Button>
  );
}
