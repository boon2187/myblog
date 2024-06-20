import React from "react";

const About = () => {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About
          </h2>
          <div className="mt-10 space-y-16 mx-auto border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16">
            <div className="flex flex-col sm:flex-row">
              <div className="text-white">プロフィールのイラスト</div>
              <div>
                <div className="text-white">槍ヶ岳の写真</div>
                <div className="text-white">オンデーズでの</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
