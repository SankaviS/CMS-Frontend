import React from "react";
import { Link } from "react-router-dom";

//common navigation bar component for all the blog pages

const Navbar2 = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark ">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" to="/blog">
                  All Blogs
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/blog/add">
                  Add Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar2;
