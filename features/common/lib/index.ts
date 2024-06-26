import fs from "fs";
import path from "path";
import matter from "gray-matter";

// マークダウンファイルの中身を取得
export const getAllPosts = async () => {
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

  return posts;
};
