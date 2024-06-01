import React from "react";
import Link from "next/link";
import MarkdownImage from "../../blog/components/MarkdownImage";

async function LatestPosts({ posts }) {
  const latestPosts = posts.slice(0, 3);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-100">Latest Posts</h2>
      <p className="text-neutral-400 my-3">
        I occasionally write about programming, especially Flutter, React,
        Next.js, and more. Check me out to stay up to date.
      </p>
      <ul className="">
        {latestPosts.map((post) => (
          <li key={post.slug} className="flex items-center">
            <div className="flex-1">
              <div className="flex flex-col py-3 sm:flex-row ">
                <Link href={`/blog/${post.slug}`} className="sm:w-1/5">
                  <h2 className="text-neutral-300">
                    {new Date(post.frontmatter.date).toLocaleDateString()}
                  </h2>
                </Link>
                <Link href={`/blog/${post.slug}`}>
                  <p className="font-semibold text-gray-100">
                    {post.frontmatter.title}
                  </p>
                </Link>
              </div>
            </div>
            <div className="py-1 sm:hidden">
              <Link href={`/blog/${post.slug}`}>
                <MarkdownImage
                  imageUrl={post.frontmatter.image}
                  width={100}
                  height={100}
                />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LatestPosts;
