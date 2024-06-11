import Image from "next/image";
import React from "react";

function InstaInfo() {
  return (
    <div className="flex">
      <div>
        <Image
          src={"/images/twitter.png"}
          width={100}
          height={100}
          alt="profile"
        />
      </div>
      <div>
        <p className="text-white">Please follow me.</p>
      </div>
    </div>
  );
}

export default InstaInfo;
