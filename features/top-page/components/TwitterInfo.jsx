import Image from "next/image";
import Link from "next/link";
import React from "react";

const TwitterInfo = () => {
  return (
    <div className="flex rounded bg-neutral-900 py-3">
      <div className="py-1 px-3">
        <Link href="https://twitter.com/boon2187">
          <Image
            src={"/images/twitter.png"}
            width={100}
            height={100}
            alt="profile"
            className="rounded-xl min-w-20"
          />
        </Link>
      </div>
      <div className="px-1">
        <Link href="https://twitter.com/boon2187">
          <h2 className="text-lg font-semibold text-gray-100">My X account</h2>
        </Link>
        <p className="text-neutral-400 mt-1">
          I post about my personal development, work, family, and more.
        </p>
      </div>
    </div>
  );
};

export default TwitterInfo;
