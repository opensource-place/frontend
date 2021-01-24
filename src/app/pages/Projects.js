import React from "react";
import { IssueList, ProjectList, NavBar } from "../components/";

const Projects = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h1>Project List</h1>
        <ProjectList />
        <div>
          <IssueList
            repository_slug={"ozlemts/React-Next10-Tailwind2-Starter"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
