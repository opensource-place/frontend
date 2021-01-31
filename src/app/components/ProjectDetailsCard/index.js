/* eslint-disable */
import React, { useEffect, useState } from "react";
import { Container, Issues, Details } from "./style";
import { useParams } from "react-router-dom";
import axios from "axios";

function ProjectDetail() {
  const { projectname, reponame } = useParams();
  const [issues, setIssues] = useState([]);

  const findDate = (datex) => {
    // const datex = "2021-01-20T17:08:40Z";
    const porti = datex.slice(0, 10).split("-");
    let a = porti[0];
    porti[0] = porti[2];
    porti[2] = a;
    let b = porti.join().replaceAll(",", "-");
    return b;
  };

  useEffect(() => {
    projectFetch();
  }, []);

  const projectFetch = async () => {
    const query = `{
      issues(pathname:"/${projectname}/${reponame}") {
        html_url
        title
        created_at
        user{
            avatar_url
        }
      }
    }`;

    const res = await axios.get(`http://localhost:8080/graphql?query=${query}`);
    setIssues(res.data.data.issues);
  };

  return (
    <Container>
      <Details>
        <h1>
          {projectname} - {reponame}
        </h1>
        <h2>Total issue: {issues.length}</h2>
      </Details>
      <Issues>
        {issues.map((item, i) => (
          <div key={i}>
            <a href={item.html_url}>
              <h2>{item.title}</h2>
            </a>
            <img
              height="50px"
              width="50px"
              src={item.user.avatar_url}
              alt="The issue creator"
            />
            <h2>{findDate(item.created_at)}</h2>
          </div>
        ))}
      </Issues>
    </Container>
  );
}

export default ProjectDetail;
