import SelfIntroduction from "../features/top-page/components/SelfIntroduction";
import TwitterInfo from "../features/top-page/components/TwitterInfo";
import InstaInfo from "../features/top-page/components/InstaInfo";
import LatestPosts from "../features/top-page/components/LatestPosts";
import { getAllPosts } from "../features/common/lib";

export default async function HomePage() {
  const posts = await getAllPosts();

  return (
    <>
      <div className="bg-black py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl">
            <div className="w-full">
              <SelfIntroduction />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full mt-16 sm:mt-32">
              <TwitterInfo />
              <InstaInfo />
            </div>
            <div className="w-full mt-16 sm:mt-32">
              <LatestPosts posts={posts} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
