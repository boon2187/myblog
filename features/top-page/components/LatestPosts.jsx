import React from "react";
import Link from "next/link";

async function LatestPosts({ posts }) {
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="text-white w-1/2">
      {latestPosts.map((post) => (
        <div key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <p>{new Date(post.frontmatter.date).toLocaleDateString()}</p>
            <p>{post.frontmatter.title}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LatestPosts;
