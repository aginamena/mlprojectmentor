"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallary() {
  const images = [
    {
      original: "homepage.png",
      thumbnail: "homepage.png",
    },
    {
      original: "review.png",
      thumbnail: "review.png",
    },
  ];
  return <ImageGallery items={images} />;
}
