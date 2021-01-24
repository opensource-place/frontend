import React from "react";
import { Footer, NavBar } from "../components";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <NavBar />
      <div>
        <h2>
          The platform includes open source projects. You can list all published
          open-source projects and also add your project on Github to the
          platform and your projects make open source!
        </h2>
        <a
          href="https://github.com/FurkanPortakal/opensourceadam"
          className="text-center mt-2 mb-6 underline"
        >
          Feel free to contribute!
        </a>
        <Link to="/start">
          <button>Start</button>
        </Link>
      </div>
      <Footer />
    </div>
  );
};

export default LandingPage;
