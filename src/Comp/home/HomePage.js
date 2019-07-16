import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Home for the list of Shows</h1>
      <Link to="about" className="btn btn-primary btn-lg">
        About
      </Link>
    </div>
  );
};

export default HomePage;
