/* eslint-disable */
import React, { useEffect } from "react";
import { SearchBox, ProjectCard } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import CONSTANTS from "../../redux/actions";
import axios from "axios";

const ProjectList = () => {
  const { projects } = useSelector((state) => state.projects);

  const dispatch = useDispatch();

  useEffect(() => {
    dataFetch();
  }, []);

  const dataFetch = async () => {
    try {
      const query = `{
        repositories {
          pathname
          issues {
            title
          }
        }
      }`;
      dispatch({ type: CONSTANTS.FETHING_PROJECTS });
      const res = await axios.get(
        `http://localhost:8080/graphql?query=${query}`
      );
      dispatch({
        type: CONSTANTS.FETCHED_PROJECTS,
        payload: res.data.data.repositories,
      });
    } catch (error) {
      dispatch({ type: CONSTANTS.ERROR });
    }
  };
  return (
    <div>
      <SearchBox placeholder="Search Projects..." />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {projects.map((data, index) => (
          <div key={index}>
            <ProjectCard repository={data} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
