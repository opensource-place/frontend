import { useState } from "react";
import { NavBar } from "../components";
import axios from "axios";

const Start = () => {
  const [issue, setIssue] = useState("");
  const [getDBStatus, setDBStatus] = useState(false);
  const [getDBStatusMSG, setDBStatusMSG] = useState("");

  const addIssue = async (e) => {
    e.preventDefault();

    const url = 'http://localhost:8080';

    const response = await axios.post(`${url}/repository`, {
      url: issue,
    })

    setDBStatus(response.data.result)
    setDBStatusMSG(response.data.msg)
  };

  return (
    <div>
      <NavBar />
      {getDBStatus ? (
        <div role="alert">
          {getDBStatusMSG}
        </div>
      ) : null}
      <div>
        <div>
          <div>
            <input
              type="text"
              className="form-control"
              onChange={(e) => setIssue(e.target.value)}
              placeholder="GitHub Repository URL (furkanportakal/opensourceadam)"
              name="note"
            />
            <button
              onClick={addIssue}
              type="Submit"
            >
              Add Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
