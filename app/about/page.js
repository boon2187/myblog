import Image from "next/image";
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
              <div className="text-white w-1/2">
                <Image
                  src="/images/profile_image.png"
                  width={100}
                  height={100}
                  alt="profile"
                  className="w-full"
                />
              </div>
              <div className="">
                <p className="text-neutral-400 pt-3">
                  Hello! I'm Fumitsugu Ito, born in Tokyo and raised in Chiba. I
                  specialize in Web Apps with React and Next.js, and smartphone
                  app with Flutter.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
