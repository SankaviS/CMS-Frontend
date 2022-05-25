import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Box, Button, InputLabel, Typography } from "@mui/material";
import Navbar2 from "../components/styled/navbar2";

//Edit Blog Function

const BlogDetails = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState();
  const handleChange = (e) => {
    setInput((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  //managing state and defining a variable for id

  const [blog, setBlog] = useState();
  const id = useParams().id;
  console.log(id);

  // Processing "GET" HTTP request

  const fetchDetails = async () => {
    const res = await axios
      .get(`https://webkit-cms.herokuapp.com/blog/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  // Setting the variable with previous data before updating

  useEffect(() => {
    fetchDetails().then((data) => {
      setBlog(data.blog1);
      setInput({
        title: data.blog1.title,
        description: data.blog1.description,
      });
    });
  }, [id]);

  //Updating blog by sending PUT request

  const sendRequest = async () => {
    const res = await axios
      .put(`https://webkit-cms.herokuapp.com/blog/update/${id}`, {
        title: input.title,
        description: input.description,
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };

  //Form submit function

  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest()
      .then((data) => {
        console.log(data);
      })
      .then(() => navigate("/blog"));
  };
  console.log(blog);

  return (
    <div>
      <Navbar2 />
      {input && (
        <form onSubmit={handleSubmit}>
          <Box
            border={3}
            borderRadius={10}
            padding="3vh"
            margin="5vh"
            display="flex"
            flexDirection={"column"}
            width="80%"
          >
            <Typography>Post your blog</Typography>
            <InputLabel style={{ color: "white" }}>Title</InputLabel>
            <input name="title" onChange={handleChange} value={input.title} />
            <InputLabel style={{ color: "white" }}>Description</InputLabel>
            <input
              name="description"
              onChange={handleChange}
              value={input.description}
            />

            <Button type="submit">Submit</Button>
          </Box>
        </form>
      )}
    </div>
  );
};

export default BlogDetails;
