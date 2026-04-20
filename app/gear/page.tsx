import Image from "next/image";
import type { Metadata } from "next";
import profile from "../../public/images/profile_image.png";

export const metadata: Metadata = {
  title: "My Gear",
};

export default function Gear() {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Gear
          </h2>
          <div className="mt-10 space-y-16 mx-auto border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16">
            <div className="w-full flex">
              <div className="w-1/4">
                <Image
                  src={profile}
                  width={100}
                  height={100}
                  alt="profile"
                  className="w-full"
                />
              </div>
              <div className="my-auto">
                <h2 className="text-neutral-400 text-2xl font-semibold">
                  Sorry....
                </h2>
                <p className="text-neutral-400 m-3">
                  This page is under construction...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
