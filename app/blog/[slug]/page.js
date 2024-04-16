import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

// ブログ記事ページ
export default async function BlogPage({ params }) {
  // URLのパラエータから該当するファイル名を取得する
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, "utf8");
  // frontmatterからdateとcontentを取得
  const { data, content } = matter(fileContents);
  const title = data.title; // ブログ記事のタイトル
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString(); // ブログ記事のHTML

  return (
    <div>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
    </div>
  );
}
