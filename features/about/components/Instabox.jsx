import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Image from "next/image";
import Link from "next/link";
import React from "react";

function Instabox() {
  return (
    <div className="flex rounded bg-neutral-900 py-3">
      <div className="py-1 px-3">
        <Link href="https://www.instagram.com/boon_boon/">
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </Link>
      </div>
      <div className="px-1">
        <Link href="https://www.instagram.com/boon_boon/">
          <h2 className="text-lg font-semibold text-gray-100">My Instagram</h2>
        </Link>
      </div>
    </div>
  );
}

export default Instabox;
