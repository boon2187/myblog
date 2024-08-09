import BlogCard from "../../features/blog/components/BlogCard";
import { getAllPosts } from "../../features/common/lib";

export const metadata = {
  title: "My Blog",
};

export default async function Blogs() {
  const posts = await getAllPosts();

  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Blog
          </h2>
          <BlogCard posts={posts} />
        </div>
      </div>
    </div>
  );
}
