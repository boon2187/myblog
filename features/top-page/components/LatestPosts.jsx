import React from "react";
import { getAllPosts } from "../../common/lib";
import BlogCard from "../../blog/components/BlogCard";

async function LatestPosts({ posts }) {
  const latestPosts = posts.slice(0, 3);
  console.log(latestPosts[0]);
  return (
    <div className="text-white w-1/2">
      <p>{new Date(latestPosts[0].frontmatter.date).toLocaleDateString()}</p>
      <p>{latestPosts[0].frontmatter.title}</p>
      <BlogCard posts={latestPosts} />
    </div>
  );
}

export default LatestPosts;
