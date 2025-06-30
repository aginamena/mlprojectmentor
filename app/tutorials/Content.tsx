"use client";

import { loginWithGoogle } from "@/lib/auth";
import { auth } from "@/lib/firebaseClient";
import { Box, Chip, Typography, CircularProgress } from "@mui/material";
import { useRouter } from "next/navigation";
import { useState } from "react";

type SubTutorial = {
  tutorial_name: string;
  premium: boolean;
  title: string;
  description: string;
};

export default function Content({
  sub_tutorial,
}: {
  sub_tutorial: SubTutorial;
}) {
  const [loading, setLoading] = useState(false);
  const user = auth.currentUser;
  const router = useRouter();

  async function displayContent() {
    if (sub_tutorial.premium) {
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
        router.push(`../tutorials/${sub_tutorial.tutorial_name}`);
      } else {
        alert("You have to upgrade to access this tutorial");
        router.push("../pricing");
      }
    } else {
      router.push(`../tutorials/${sub_tutorial.tutorial_name}`);
    }
    setLoading(false);
  }
  async function handleOnClick() {
    setLoading(true);
    if (user) {
      displayContent();
    } else {
      await loginWithGoogle();
      displayContent();
    }
  }

  return (
    <Box onClick={handleOnClick} style={{ cursor: "pointer" }}>
      <Typography
        fontWeight="bold"
        variant="subtitle1"
        style={{ textDecoration: "underline" }}
      >
        {sub_tutorial.title}
        {loading && (
          <CircularProgress
            size={16}
            style={{ marginLeft: "5px", color: "white" }}
          />
        )}
        {sub_tutorial.premium && (
          <Chip
            label="Premium"
            size="small"
            sx={{
              color: "white",
              bgcolor: "#0012cc",
              marginLeft: "5px",
              p: 1,
            }}
          />
        )}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {sub_tutorial.description}
      </Typography>
    </Box>
  );
}
