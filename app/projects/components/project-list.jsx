import Link from "next/link";
import React from "react";

const ProjectList = async () => {
  const response = await fetch("https://api.github.com/users/boon2187/repos");
  const repos = await response.json();

  return (
    <ul className="text-white grid grid-cols-1 sm:grid-cols-2 gap-4">
      {repos.map((repo) => (
        <li key={repo.id} className="bg-gray-800 p-4 rounded-lg mb-4">
          <div className="flex justify-between items-center mb-4">
            <Link href={repo.html_url}>
              <h3 className="text-base font-semibold text-white">
                {repo.name.length > 24
                  ? `${repo.name.substring(0, 20)}...`
                  : repo.name}
              </h3>
            </Link>
            <div>🌟{repo.stargazers_count}</div>
          </div>
          <p className="text-gray-400 text-sm sm:text-xs">{repo.description}</p>
        </li>
      ))}
    </ul>
  );
};

export default ProjectList;
