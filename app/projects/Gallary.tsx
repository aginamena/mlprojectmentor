"use client";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type Links = {
  original: string;
  thumbnail: string;
};
export default function Gallary({ images }: { images: string[] }) {
  // const images = [
  //   {
  //     original: "dashboard.png",
  //     thumbnail: "dashboard.png",
  //   },
  //   {
  //     original: "positive_reviews.png",
  //     thumbnail: "positive_reviews.png",
  //   },
  //   {
  //     original: "negative_reviews.png",
  //     thumbnail: "negative_reviews.png",
  //   },
  //   {
  //     original: "neutral_reviews.png",
  //     thumbnail: "neutral_reviews.png",
  //   },
  // ];
  return (
    <ImageGallery
      items={images.map((imgUrl) => ({
        original: imgUrl,
        thumbnail: imgUrl,
      }))}
    />
  );
}
