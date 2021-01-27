/* eslint-disable */
import React, { useState, useEffect } from "react";
import { SearchBox, ProjectCard } from "../../components";
import axios from "axios";

const ProjectList = () => {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    const query = `{
      repositories {
        pathname
        issues {
          title
        }
      }
    }`;

    // const res = await axios.get(`/graphql?query=${query}`)
    const res = await axios.get(`http://localhost:8080/graphql?query=${query}`);
    setRepositories(res.data.data.repositories);
  };

  return (
    <div>
      <SearchBox placeholder="Search Projects..." />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
        {repositories.map((data, index) => (
          <div key={index}>
            <ProjectCard repository={data.pathname} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
