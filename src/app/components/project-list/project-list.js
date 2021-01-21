import { useState, useEffect } from "react";
import ProjectCard from "../project-card/project-card";
import SearchBox from "../search-box/search-box";
import axios from "axios";

const ProjectList = () => {
  const [repositorySlugList, setRepositorySlugList] = useState([]);
  const [filteredRepositories, setFilteredRepositories] = useState([]);
  const [repositories, setRepositories] = useState([]);
  const [searchField, setSearchField] = useState("");

  useEffect(() => {
    dataFetch();
  }, []);

  const handleChange = (e) => {
    setSearchField(e.target.value);
    const filteredRepos = repositorySlugList.filter((repo) =>
      repo.repoName.startsWith(searchField)
    );
    setFilteredRepositories(filteredRepos);
  };

  const dataFetch = () => {
    const query = `
        {
          repositories {
            pathname
            issues {
              title
            }
          }
        }`;

    axios.get(`http://localhost:8080/graphql?query=${query}`).then((res) => {
      const { repositories } = res.data.data;
      setRepositories(repositories);
    });
  };

  return (
    <div className="w-full">
      <SearchBox
        placeholder="Search Projects..."
        handleChange={(e) => handleChange(e)}
      />
      <div className="flex">
        {repositories.map((data, index) => (
          <ProjectCard key={index} repository={data} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
