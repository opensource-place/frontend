import { useState, useEffect } from "react";
import { NavBar } from "../components";
import Markdown from "markdown-to-jsx";
import mdDocument from "../docs/hello.md";

const Doc = () => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(mdDocument)
      .then((res) => res.text())
      .then((md) => {
        setContent(md);
      });
  });

  return (
    <div>
      <NavBar />
      <h1>Documents</h1>
      <div>
        <Markdown children={content} />
      </div>
    </div>
  );
};

export default Doc;
