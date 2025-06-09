import Header from "@/components/Header";
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
      <Header />
      {children}
      <JoinFbCommunity header="Have a Question?" />
    </Box>
  );
}
