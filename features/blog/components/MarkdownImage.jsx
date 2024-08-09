import React from "react";
import matter from "gray-matter";
import Image from "next/image";

const MarkdownImage = ({ imageUrl, width, height }) => {
  // const { data } = matter(markdown);
  // const imageUrl = data.image;
  // // console.log(width, height);

  return (
    <div>
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="Blog Eyecatch"
          width={width}
          height={height}
        />
      )}
    </div>
  );
};

export default MarkdownImage;
