import React from "react";
import Link from "next/link";
import MarkdownImage from "./MarkdownImage";
import exp from "constants";

const BlogCard = ({ posts }) => {
  return (
    <div className="mt-10 space-y-16 mx-auto border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16">
      {posts.map((post) => (
        <article key={post.slug} className="flex max-w-xl flex-row">
          <div className="w-1/3">
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-400"
            >
              <MarkdownImage
                imageUrl={post.frontmatter.image}
                width={1024}
                height={1024}
              />
            </Link>
          </div>
          <div className="group w-2/3 ml-8">
            {/* 日付の表示 */}
            <div className="text-xs">
              <div className="text-gray-500">
                {new Date(post.frontmatter.date).toLocaleDateString()}
              </div>
            </div>
            {/* 記事タイトルへのリンク */}
            <Link
              href={`/blog/${post.slug}`}
              className="text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-400"
            >
              <h3 className="mt-3 text-lg sm:text-xl font-semibold leading-6 text-gray-100 group-hover:text-gray-400">
                {post.frontmatter.title}
              </h3>
              {/* 記事の説明文（description）を表示 */}
              <p
                className="hidden  sm:mt-2 sm:line-clamp-3 sm:text-sm sm:leading-6 sm:text-gray-400"
                dangerouslySetInnerHTML={{
                  __html: `${post.frontmatter.description}`,
                }}
              ></p>
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
};

export default BlogCard;
