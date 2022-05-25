import React from "react";
import LanguageIcon from "@mui/icons-material/Language";
import ContactSupportSharpIcon from "@mui/icons-material/ContactSupportSharp";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { authActions } from "../../Store/Index";

//common navigation bar component for all the pages

const NavBar = () => {
  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  return (
    <nav class="navbar navbar-expand-lg navbar-dark ">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/home">
          WEBKIT
          <LanguageIcon />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" to="/home">
                Home
              </Link>
            </li>

            <li class="nav-item">
              {!isLoggedIn ? (
                <Link class="nav-link active" to="/login">
                  Blogs
                </Link>
              ) : (
                <Link class="nav-link active" to="/blog">
                  Blogs
                </Link>
              )}
            </li>
            <li class="nav-item">
              <Link class="nav-link active" to="/resources">
                Resources
              </Link>
            </li>
          </ul>
          <span class="navbar-text">
            <ul className="navbar-nav ml-auto">
              {!isLoggedIn && (
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">
                    Login
                  </Link>
                </li>
              )}

              {isLoggedIn && (
                <Link
                  OnClick={() => dispath(authActions.logout())}
                  className="nav-link active"
                  to="/login"
                >
                  Logout
                </Link>
              )}
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/contact"
                >
                  <ContactSupportSharpIcon />
                </Link>
              </li>
            </ul>
          </span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
