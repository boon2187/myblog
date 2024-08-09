import Image from "next/image";
import React from "react";
import profile from "../../public/images/profile_image.png";
import aboutMe from "../../public/images/about-me.jpg";
import aboutCastle from "../../public/images/about-castle.jpg";
import aboutMountain from "../../public/images/about-mountain.jpg";

export const metadata = {
  title: "About Me...",
};

const About = () => {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About
          </h2>
          <div className="mt-10 space-y-16 mx-auto border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16">
            <div className="max-w-xl mx-auto">
              <div className="w-24 float-left">
                <Image
                  src={profile}
                  width={100}
                  height={100}
                  alt="profile"
                  className="w-full"
                />
              </div>
              <div>
                <p className="text-neutral-400 pt-3">
                  Hello! I'm Fumitsugu Ito, born in Tokyo and raised in Chiba. I
                  specialize in Web Apps with React and Next.js, and smartphone
                  app with Flutter.
                </p>
                <p className="text-neutral-400 pt-3">
                  In addition, I work for challenged person's support for
                  employment. I advised them about IT, software engineering and
                  programming.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-neutral-400">
              <div>
                <Image
                  src={aboutCastle}
                  width={100}
                  height={100}
                  alt="Matsumoto Castle"
                  className="w-4/5 mx-auto sm:w-full rounded"
                />
                <h4 className="text-lg font-semibold text-neutral-400 text-center mt-3">
                  Matsumoto Castle
                </h4>
              </div>
              <div>
                <Image
                  src={aboutMe}
                  width={100}
                  height={100}
                  alt="Me"
                  className="w-4/5 mx-auto sm:w-full rounded"
                />
                <h4 className="text-lg font-semibold text-neutral-400 text-center mt-3">
                  Me... 10 years ago
                </h4>
              </div>
              <div>
                <Image
                  src={aboutMountain}
                  width={100}
                  height={100}
                  alt="Mt Jonen"
                  className="w-4/5 mx-auto sm:w-full rounded"
                />
                <h4 className="text-lg font-semibold text-neutral-400 text-center mt-3">
                  Mount Jōnen
                </h4>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white">Connect</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-neutral-400">
                <div>Instagram</div>
                <div>site</div>
                <div>email</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
