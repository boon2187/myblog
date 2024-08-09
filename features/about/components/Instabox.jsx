import Image from "next/image";
import Link from "next/link";
import React from "react";

function Instabox() {
  return (
    <div className="flex rounded bg-neutral-900 py-3">
      <div className="py-1 px-3">
        <Link href="https://www.instagram.com/boon_boon/">
          <Image
            src={"/images/instgram-logo.png"}
            width={100}
            height={100}
            alt="profile"
            className="rounded-xl min-w-20"
          />
        </Link>
      </div>
      <div className="px-1">
        <Link href="https://www.instagram.com/boon_boon/">
          <h2 className="text-lg font-semibold text-gray-100">My Instagram</h2>
        </Link>
        <p className="text-neutral-400 mt-1">
          I usually post pictures of the mountains and skies of my hometown,
          Matsumoto.
        </p>
      </div>
    </div>
  );
}

export default Instabox;
