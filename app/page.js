import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

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
    <div>
      <div>
        <div>
          <h2 className="text-2xl">My Blog</h2>
          <div>
            {posts.map((post) => (
              <article key={post.slug}>
                <div>
                  <h3>
                    <Link href={`/blog/${post.slug}`}>
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
  );
}
