import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

//Home page component

const Home = () => {
  return (
    <div class="container" style={{ marginTop: "20vh" }}>
      <div class="row">
        <div class="col">
          <h1 style={{ fontSize: "8vh" }}>
            Content <br />
            Management <br />
            platform
          </h1>
          <small id="emailHelp" class="form-text text-muted">
            Login to manage a blog
          </small>
        </div>
        <div class="col">
          <img
            style={{ height: "30vh", width: "40vh" }}
            src="https://thumbs.dreamstime.com/b/blog-information-website-concept-workplace-background-text-view-above-127465079.jpg"
            alt="cms"
          />
        </div>
      </div>
      <div class="container" style={{ marginTop: "10vh" }}>
        <div class="row">
          <div class="col"></div>
        </div>
      </div>
      <div class="container" style={{ marginTop: "10vh" }}>
        <div class="row">
          <h1 style={{ fontSize: "5em" }}>We’ll help you get started</h1>

          <h1 style={{ textAlign: "justify", marginTop: "10vh" }}>
            What is a <br />
            Content Management <br />
            System (CMS)?
          </h1>
          <p style={{ textAlign: "justify", marginTop: "2vh" }}>
            A content management system, often abbreviated as CMS, is software
            that helps users create, manage, <br />
            and modify content on a website without the need for specialized
            technical knowledge. In simpler language,
            <br /> a content management system is a tool that helps you build a
            website without needing to write all the code
            <br /> from scratch (or even know how to code at all).
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h1 style={{ fontSize: "7vh", marginTop: "10vh" }}>
            Free until <br />
            you’re ready <br />
            to launch
          </h1>
          <Button variant="outlined" size="large" style={{ marginTop: "2vh" }}>
            <Link to="/blog">Lets Manage a Blog </Link>
          </Button>
        </div>
        <div class="col">
          <img
            style={{ height: "30vh", width: "45vh", marginTop: "10vh" }}
            src="https://mailrelay.com/wp-content/uploads/2018/03/que-es-un-blog-1.png"
            alt="cms"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
