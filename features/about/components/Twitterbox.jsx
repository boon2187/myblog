import { faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";
import React from "react";

function Twitterbox() {
  return (
    <Link href="https://twitter.com/boon2187">
      <div className="flex rounded bg-neutral-900 py-3 h-20 items-center">
        <div className="py-1 px-3">
          <FontAwesomeIcon icon={faXTwitter} size="2x" />
        </div>
        <div className="px-1">
          <h2 className="font-semibold text-gray-100">My X account</h2>
        </div>
      </div>
    </Link>
  );
}

export default Twitterbox;
