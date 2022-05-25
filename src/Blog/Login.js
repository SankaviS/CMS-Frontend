import React from "react";
import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions } from "./../Store/Index";

const Login = () => {
  //Assigning inbuild functions to variables

  const navigate = useNavigate();
  const dispath = useDispatch();
  const [signup, setSignup] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  //OnChange function for input fields

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //Sending POST request

  const sendRequest = async (type = "login") => {
    const res = await axios
      .post(`https://mycmsblogg.herokuapp.com/user/${type}`, {
        name: input.name,
        email: input.email,
        password: input.password,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  //Form submit function

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
    if (signup) {
      sendRequest("signup")
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => navigate("/blog"))
        .then(() => dispath(authActions.login()))
        .then(() => alert("Logged in, Please wait"))
        .then((data) => console.log(data));
      return;
    } else {
      sendRequest()
        .then((data) => localStorage.setItem("userId", data.user._id))
        .then(() => navigate("/blog"))
        .then(() => dispath(authActions.login()))
        .then(() => alert("Logged in, Please wait"))
        .then((data) => console.log(data));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex align-items-center justify-content-center h-100">
            <div class="col-md-8 col-lg-7 col-xl-6">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                class="img-fluid"
                alt="Phone "
              />
            </div>

            <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h1 style={{ marginBottom: "2rem" }}>
                {signup ? "Signup" : "Login"}
              </h1>

              {signup && (
                <div class="form-outline mb-4">
                  <input
                    type="text"
                    id="form1Example23"
                    class="form-control form-control-lg"
                    placeholder="Name"
                    value={input.name}
                    onChange={handleChange}
                    name="name"
                  />
                </div>
              )}

              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form1Example13"
                  class="form-control form-control-lg"
                  placeholder=" Email address"
                  value={input.email}
                  onChange={handleChange}
                  name="email"
                />
              </div>
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="form1Example23"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  value={input.password}
                  onChange={handleChange}
                  name="password"
                />
              </div>

              <button type="submit" class="btn btn-primary btn-lg btn-block">
                submit
              </button>
              <br />
              <br />
              <p
                onClick={() => setSignup(!signup)}
                class="btn btn-primary btn-lg btn-block "
                style={{ marginLeft: "1vh" }}
              >
                change to {signup ? "login" : "signup"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </form>
  );
};

export default Login;
