"use client";
import React, { useState, useEffect } from "react";
import matter from "gray-matter";
import MarkdownImage from "./MarkdownImage";
import axios from "axios";

export default function EyecatchImage({ markdown }) {
  const { data } = matter(markdown);
  const imageUrl = data.image;
  const [imageSize, setImageSize] = useState({ width: 480, height: 480 });

  useEffect(() => {
    const fetchImageSize = async () => {
      if (imageUrl) {
        try {
          const res = await axios.post("/api/imageSize", { imageUrl });
          console.log(res);
          const { width, height } = res.data;
          console.log(width, height);
          const aspectRatio = width / height;
          setImageSize({
            width: 480,
            height: Math.round(480 / aspectRatio),
          });
        } catch (error) {
          console.error("Error fetching image size", error);
        }
      }
    };

    fetchImageSize();
  }, [imageUrl]);
  return (
    <div className="max-w-96">
      {imageUrl && (
        <MarkdownImage
          markdown={markdown}
          width={imageSize.width}
          height={imageSize.height}
        />
      )}
    </div>
  );
}
