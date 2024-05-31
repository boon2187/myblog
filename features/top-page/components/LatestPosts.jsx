import React from "react";
import { getAllPosts } from "../../common/lib";
import BlogCard from "../../blog/components/BlogCard";

async function LatestPosts() {
  const allposts = await getAllPosts();
  const latestPosts = allposts.slice(0, 3);
  console.log(latestPosts);

  return (
    <div className="text-white w-1/2">
      <BlogCard posts={latestPosts} />
    </div>
  );
}

export default LatestPosts;
