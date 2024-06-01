import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import SelfIntroduction from "../features/top-page/components/SelfIntroduction";
import TwitterInfo from "../features/top-page/components/TwitterInfo";
import InstaInfo from "../features/top-page/components/InstaInfo";
import LatestPosts from "../features/top-page/components/LatestPosts";

export default async function HomePage() {
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
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="w-full">
              <SelfIntroduction />
            </div>
            <div className="flex w-full h-28 bg-neutral-900	rounded-xl mt-32">
              <TwitterInfo />
              <InstaInfo />
            </div>
            <div className="w-full mt-6">
              <LatestPosts posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
