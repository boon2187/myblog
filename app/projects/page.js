import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import ProjectList from "./components/project-list";

const Projects = () => {
  return (
    <div className="bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            My Projects
          </h2>
          <div className="mt-10 space-y-16 mx-auto border-t border-gray-400 pt-10 sm:mt-16 sm:pt-16">
            <div className="text-neutral-400 mb-8">
              This is the list of my GitHub repos.
            </div>
            <div className="max-w-xl mx-auto">
              <ErrorBoundary
                fallback={
                  <div className="text-2xl text-white">
                    Cannot fetch projects currently.
                  </div>
                }
              >
                <ProjectList />
              </ErrorBoundary>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
