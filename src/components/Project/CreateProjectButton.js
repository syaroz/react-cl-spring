import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const CreateProjectButton = () => {
  return (
    <React.Fragment>
      <Link to="/addProject" className="btn btn-lg btn-info">
        Create Project
      </Link>
    </React.Fragment>
  );
};

export default CreateProjectButton;