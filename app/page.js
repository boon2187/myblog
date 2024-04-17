import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import Head from "next/head";

export default async function Blogs() {
  // contentディレクトリ内のマークダウンファイル一覧を取得
  // postsDirectoryは './conent/'
  const postsDirectory = path.join(process.cwd(), "content");
  // fs.readdirSync()でディレクトリ内のファイル名を取得
  const fileNames = fs.readdirSync(postsDirectory);

  // 各ファイルの中身を取得
  const posts = await Promise.all(
    // 各ファイル情報を取得
    fileNames.map(async (fileName) => {
      // ファイルのpathを取得
      const filePath = path.join(postsDirectory, fileName);
      // ファイルの中身を取得
      const fileContents = fs.readFileSync(filePath, "utf8");
      // ファイルのメタデータを取得
      const { data } = matter(fileContents);

      // slugとfrontmatterを返す
      return {
        slug: fileName.replace(/\.md$/, ""),
        frontmatter: data,
      };
    })
  ).then((posts) =>
    // 最新日付順に並び替え
    posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
  );

  return (
    <>
      <Head>
        <title>My Blog</title>
      </Head>
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              My Blog
            </h2>
            <div className="mt-10 space-y-16 border-t border-gray-300 pt-10 sm:mt-16 sm:pt-16">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-400">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="mt-3 text-lg font-semibold leading-6 text-gray-100 group-hover:text-gray-400"
                      >
                        {post.frontmatter.title}
                      </Link>
                    </h3>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
