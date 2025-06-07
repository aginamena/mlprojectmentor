"use client";
import { useState } from "react";
import { Box, ToggleButtonGroup, ToggleButton } from "@mui/material";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import { styled } from "@mui/system";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(() => ({
  backgroundColor: "#2D3548",
  borderRadius: "8px",
  padding: "4px",
  marginBottom: "20px",
}));

const StyledToggleButton = styled(ToggleButton)(() => ({
  color: "#B0B0B0",
  fontWeight: 500,
  textTransform: "none",
  border: "none",
  borderRadius: "6px !important",
  "&.Mui-selected": {
    backgroundColor: "#08193D",
    color: "#ffffff",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#08193D",
    color: "#ffffff",
  },
  "&.Mui-selected:focus": {
    backgroundColor: "#08193D",
    color: "#ffffff",
  },
  "&:hover": {
    backgroundColor: "#1A233A",
  },
}));

export default function Gallary({
  desktop_images,
  mobile_images,
}: {
  desktop_images: string[];
  mobile_images: string[];
}) {
  const [device, setDevice] = useState("desktop");

  const handleChange = (_, newDevice: string) => {
    if (newDevice !== null) {
      setDevice(newDevice);
    }
  };

  return (
    <Box style={{ textAlign: "center" }}>
      <StyledToggleButtonGroup value={device} exclusive onChange={handleChange}>
        <StyledToggleButton value="Desktop">Desktop</StyledToggleButton>
        <StyledToggleButton value="Mobile">Mobile</StyledToggleButton>
      </StyledToggleButtonGroup>
      {device == "Desktop" ? (
        <ImageGallery
          items={desktop_images.map((imgUrl) => ({
            original: imgUrl,
            thumbnail: imgUrl,
          }))}
        />
      ) : (
        <ImageGallery
          items={mobile_images.map((imgUrl) => ({
            original: imgUrl,
            thumbnail: imgUrl,
          }))}
        />
      )}
    </Box>
  );
}
