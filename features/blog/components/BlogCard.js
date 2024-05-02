import React from "react";
import Link from "next/link";
import MarkdownImage from "./MarkdownImage";

export default function BlogCard({ posts, fileContents }) {
  return (
    <div className="mt-10 space-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16">
      {posts.map((post) => (
        <article
          key={post.slug}
          className="flex max-w-xl flex-col items-start justify-between"
        >
          {/* 試しにアイキャッチ */}
          <div>
            <MarkdownImage markdown={fileContents} width={1024} height={1024} />
          </div>
          <div className="group relative">
            {/* 日付の表示 */}
            <div className="flex items-center gap-x-4 text-xs">
              <div className="text-gray-500">
                {new Date(post.frontmatter.date).toLocaleDateString()}
              </div>
            </div>
            <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-400">
              {/* 記事タイトルへのリンク */}
              <Link
                href={`/blog/${post.slug}`}
                className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-400"
              >
                {post.frontmatter.title}
              </Link>
            </h3>
            {/* 記事の説明文（description）を表示 */}
            <p
              className="mt-5 line-clamp-3 text-sm leading-6 text-gray-400"
              dangerouslySetInnerHTML={{
                __html: `${post.frontmatter.description}`,
              }}
            ></p>
          </div>
        </article>
      ))}
    </div>
  );
}
