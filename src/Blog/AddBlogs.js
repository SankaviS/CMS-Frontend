import React, { useState } from "react";
import { Box, Button, InputLabel } from "@mui/material";
import Navbar2 from "../components/styled/navbar2";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddBlogs = () => {
  const navigate = useNavigate();

  //Managing state

  const [input, setInput] = useState({
    name: "",
    description: "",
    image: "",
  });

  //onChange function for input fields

  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //posting data

  const sendRequest = async () => {
    const res = await axios
      .post("https://webkit-cms.herokuapp.com/blog/add", {
        title: input.title,
        description: input.description,
        image: input.image,
        user: localStorage.getItem("userId"),
      })
      .catch((err) => {
        console.log(err);
      });
    const data = await res.data;
    return data;
  };

  // Form submit function

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => console.log(data))
      .then(() => navigate("/blog"));
  };

  return (
    <div>
      <Navbar2 />
      <h1 style={{ textAlign: "justify", margin: "5vh" }}>Post Your Blog</h1>
      <form onSubmit={handleSubmit}>
        <Box
          border={3}
          borderRadius={10}
          padding="3vh"
          marginLeft="2rem"
          display="flex"
          flexDirection={"column"}
          width="70%"
          marginTop="5vh"
        >
          <InputLabel
            style={{
              color: "white",
              fontFamily: "Arvo, serif",
              textAlign: "justify",
              margin: "2vh",
            }}
          >
            Title :
          </InputLabel>
          <input name="title" onChange={handleChange} value={input.title} />
          <InputLabel
            style={{
              color: "white",
              fontFamily: "Arvo, serif",
              textAlign: "justify",
              margin: "2vh",
            }}
          >
            ImageURL :
          </InputLabel>
          <input name="image" onChange={handleChange} value={input.image} />
          <InputLabel
            style={{
              color: "white",
              fontFamily: "Arvo, serif",
              textAlign: "justify",
              margin: "2vh",
            }}
          >
            Description :
          </InputLabel>
          <input
            name="description"
            onChange={handleChange}
            value={input.description}
          />

          <Button
            type="submit"
            style={{ fontFamily: "Arvo, serif", fontSize: "25px" }}
          >
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default AddBlogs;
