import React from "react";
import Link from "next/link";

async function LatestPosts({ posts }) {
  const latestPosts = posts.slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-100">Latest Posts</h2>
      <p className="text-neutral-400 my-3">
        I occasionally write about programming, especially Flutter, React,
        Next.js, and more. Check me out to stay up to date.
      </p>
      <ul>
        {latestPosts.map((post) => (
          <li
            key={post.slug}
            className="flex flex-col py-3 sm:flex-row sm:py-3 sm:gap-x-14"
          >
            <Link href={`/blog/${post.slug}`}>
              <h2 className="text-neutral-300">
                {new Date(post.frontmatter.date).toLocaleDateString()}
              </h2>
            </Link>
            <Link href={`/blog/${post.slug}`}>
              <p className="font-semibold text-gray-100">
                {post.frontmatter.title}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestPosts;
