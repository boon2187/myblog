import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import remarkBreaks from "remark-breaks";
import type { Metadata } from "next";
import "./content.css";
import MarkdownImage from "../../../features/blog/components/MarkdownImage";
import { getAllPosts } from "../../../features/common/lib";
import type { PostFrontmatter } from "../../../features/common/lib";

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">
): Promise<Metadata> {
  "use cache";
  const { slug } = await props.params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return { title: "記事が見つかりません" };
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data } = matter(fileContents);
  const { title } = data as PostFrontmatter;

  return {
    title: `${title} | Flutter-Newbie Blog`,
  };
}

export default async function BlogPage(props: PageProps<"/blog/[slug]">) {
  "use cache";
  const { slug } = await props.params;
  const filePath = path.join(process.cwd(), "content", `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    console.error(`File not found: ${filePath}`);
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const { title, image: imageUrl } = data as PostFrontmatter;
  const date = new Date(data.date)
    .toLocaleDateString("ja-JP", {
      year: "numeric",
      month: "numeric",
      day: "numeric",
    })
    .replace(/\//g, ".");

  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .use(remarkBreaks)
    .process(content);
  const contentHtml = processedContent.toString();

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
