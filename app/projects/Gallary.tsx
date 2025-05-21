"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallary() {
  const images = [
    {
      original: "project_thumbnail.png",
      thumbnail: "project_thumbnail.png",
    },
    {
      original: "dashboard.png",
      thumbnail: "dashboard.png",
    },
    {
      original: "positive_reviews.png",
      thumbnail: "positive_reviews.png",
    },
    {
      original: "neutral_reviews.png",
      thumbnail: "neutral_reviews.png",
    },
    {
      original: "negative_reviews.png",
      thumbnail: "negative_reviews.png",
    },
  ];
  return <ImageGallery items={images} />;
}
