import JoinFbCommunity from "@/components/JoinFbCommunity";
import { Box } from "@mui/material";
import React from "react";

export default function ProjectLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box>
      {children}
      <JoinFbCommunity header="Do you Have a Question?" />
    </Box>
  );
}
