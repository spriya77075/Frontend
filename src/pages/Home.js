import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="hero text-center text-white">

      <h1 className="display-4 fw-bold">
        Discover Amazing Events
      </h1>

      <p className="lead">
        Concerts • Sports • Comedy • Conferences
      </p>

      <Link
        to="/events"
        className="btn btn-warning btn-lg mt-3"
      >
        Browse Events
      </Link>

    </div>

  );
}

export default Home;