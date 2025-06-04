"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function Gallary({ images }: { images: string[] }) {
  return (
    <ImageGallery
      items={images.map((imgUrl) => ({
        original: imgUrl,
        thumbnail: imgUrl,
      }))}
    />
  );
}
