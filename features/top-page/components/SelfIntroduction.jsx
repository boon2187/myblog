import Image from "next/image";
import React from "react";

function SelfIntroduction() {
  return (
    <div className="text-white">
      <div>
        <Image
          src="/images/profile_image.png"
          width={200}
          height={200}
          alt="profile"
        />
      </div>
      <div>
        <h2>Fumitsugu Ito</h2>
        <p>
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
