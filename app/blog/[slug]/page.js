import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import "./content.css";
import MarkdownImage from "../../features/blog/components/MarkdownImage";
// メタデータを設定するための関数
export async function generateMetadata({ params }) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  // ファイルが存在するかチェック
  if (!fs.existsSync(filePath)) {
    // ファイルが存在しない場合の処理
    console.error(`File not found: ${filePath}`);
    return { title: "記事が見つかりません" };
  }

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, "utf8");
  // frontmatterからdateとcontentを取得
  const { data } = matter(fileContents);
  const title = data.title; // ブログ記事のタイトル

  return {
    title: `${title} | Flutter-Newbie Blog`,
  };
}

// ブログ記事ページ
export default async function BlogPage({ params }) {
  // URLのパラエータから該当するファイル名を取得する
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  // ファイルが存在するかチェック
  if (!fs.existsSync(filePath)) {
    // ファイルが存在しない場合の処理
    console.error(`File not found: ${filePath}`);
    return;
  }

  // ファイルの中身を取得
  const fileContents = fs.readFileSync(filePath, "utf8");
  // frontmatterからdateとcontentを取得
  const { data, content } = matter(fileContents);
  const title = data.title; // ブログ記事のタイトル
  const imageUrl = data.image; // ブログ記事のアイキャッチ画像
  const date = new Date(data.date)
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    .replace(/\//g, "."); // 「年/月/日」を「年.月.日」に置換

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content);
  const contentHtml = processedContent.toString(); // ブログ記事のHTML

  return (
    <div id="blog-contents" className="bg-black px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-200">
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
          {title}
        </h1>
        <div className="mx-auto">
          <MarkdownImage imageUrl={imageUrl} width={1024} height={1024} />
        </div>
        <p className="text-right">{date}</p>
        <div dangerouslySetInnerHTML={{ __html: contentHtml }}></div>
      </div>
    </div>
  );
}
