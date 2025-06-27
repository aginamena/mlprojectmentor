"use client";

import { Box, Chip, Typography } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import { useUser } from "@auth0/nextjs-auth0";
import { useRouter } from "next/navigation";
import { getDocumentDataInCollection } from "@/lib/databaseQuery";

type SubTutorial = {
  name: string;
  premium: boolean;
  title: string;
  description: string;
};

export default function Content({
  sub_tutorial,
}: {
  sub_tutorial: SubTutorial;
}) {
  const { user } = useUser();
  const router = useRouter();

  async function handleOnClick() {
    if (!user) {
      router.push(`../auth/login?returnTo=/tutorials`);
    } else if (sub_tutorial.premium) {
      const profile = await getDocumentDataInCollection(
        "users",
        user.email as string
      );
      if (!profile?.has_subscribed) {
        alert("You have to upgrade to access this tutorial");
        router.push("../pricing");
      } else {
        router.push(`tutorials/${sub_tutorial.name}`);
      }
    } else {
      router.push(`tutorials/${sub_tutorial.name}`);
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
        {!user && <LockIcon style={{ fontSize: 16, marginLeft: "5px" }} />}
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
