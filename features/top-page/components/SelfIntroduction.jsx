import Image from "next/image";
import React from "react";

function SelfIntroduction() {
  return (
    <div className="flex flex-col sm:flex-row text-gray-100">
      <div className="bg-black mb-4	sm:flex-1">
        <Image
          src="/images/profile_image.png"
          width={100}
          height={100}
          alt="profile"
          className="rounded-full bg-neutral-900 w-24 h-24 sm:w-32 sm:h-32"
        />
      </div>
      <div className="sm:flex-[3]">
        <h2 className="text-3xl l font-bold">Fumitsugu Ito</h2>
        <p className="text-neutral-400 pt-3">
          Hi there! I am a software engineer who build web sites and web apps
          using React, Next.js and WordPress(PHP). And also I build Smartphone
          Apps with Flutter for my personal projects. One more thing.... I work
          for challenged person's support for employment in Matsumoto, my
          hometown. I advised them about IT, software engineering and
          programming there.
        </p>
      </div>
    </div>
  );
}

export default SelfIntroduction;
