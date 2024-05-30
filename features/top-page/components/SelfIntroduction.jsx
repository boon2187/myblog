import Image from "next/image";
import React from "react";

function SelfIntroduction() {
  return (
    <div className="flex text-gray-100">
      <div className="bg-black	flex-1">
        <Image
          src="/images/profile_image.png"
          width={100}
          height={100}
          alt="profile"
          className="rounded-full bg-neutral-900"
        />
      </div>
      <div className="flex-[3]">
        <h2>Fumitsugu Ito</h2>
        <p className="text-neutral-400">
          Hi there! I am software engineer who build web sites and web apps
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
