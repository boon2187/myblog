import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  date: string;
  image: string;
  description: string;
  tags?: string[];
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
};

// マークダウンファイルの中身を取得
export const getAllPosts = async (): Promise<Post[]> => {
  "use cache";
  const postsDirectory = path.join(process.cwd(), "content");
  const fileNames = fs.readdirSync(postsDirectory);

  const posts = await Promise.all(
    fileNames.map(async (fileName) => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: fileName.replace(/\.md$/, ""),
        frontmatter: data as PostFrontmatter,
      };
    })
  ).then((posts) =>
    posts.sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
  );

  return posts;
};
