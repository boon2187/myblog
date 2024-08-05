import React from "react";

const ProjectList = async () => {
  const response = await fetch("https://api.github.com/users/boon2187/repos");
  const repos = await response.json();
  console.log(repos);

  return (
    <div className="text-white">
      {repos.map((repo) => (
        <div key={repo.id} className="bg-gray-800 p-4 rounded-lg mb-4">
          <h3 className="text-xl font-bold text-white">{repo.name}</h3>
          <p className="text-gray-400">{repo.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
