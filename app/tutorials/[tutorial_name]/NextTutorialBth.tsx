"use client";

import { loginWithGoogle } from "@/lib/auth";
import { auth } from "@/lib/firebaseClient";
import { Box, Button, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NextTutorialBtn({
  next_tutorial,
}: {
  next_tutorial: {
    tutorial_name: string;
    premium: boolean;
  };
}) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const user = auth.currentUser;

  async function displayNextContent() {
    if (next_tutorial.premium) {
      const request = await fetch("/api/get_data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentId: auth.currentUser?.email,
          collectionName: "users",
        }),
      });
      const profile = await request.json();
      if (profile.has_subscribed) {
        router.push(`../tutorials/${next_tutorial.tutorial_name}`);
      } else {
        alert("You have to upgrade to access the next tutorial");
        router.push("../pricing");
      }
    } else {
      router.push(`../tutorials/${next_tutorial.tutorial_name}`);
    }
    setLoading(false);
  }
  async function handleOnClick() {
    setLoading(true);
    if (user) {
      displayNextContent();
    } else {
      await loginWithGoogle();
      displayNextContent();
    }
  }

  return (
    <Box sx={{ textAlign: "center" }}>
      <Button
        variant="contained"
        onClick={handleOnClick}
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
        Next tutorial
        {loading && (
          <CircularProgress
            size={16}
            style={{ marginLeft: "5px", color: "black" }}
          />
        )}
      </Button>
    </Box>
  );
}
