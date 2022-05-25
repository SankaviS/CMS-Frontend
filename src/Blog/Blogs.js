import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import Navbar2 from "../components/styled/navbar2";

const Blogs = () => {
  const [blogs, setBlogs] = useState();

  //Processing GET request to display all the blogs

  const sendRequest = async () => {
    const res = await axios
      .get("https://webkit-cms.herokuapp.com/blog")
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  //Setting up the empty variable with fetched data

  useEffect(() => {
    sendRequest().then((data) => setBlogs(data.blog));
  }, []);
  console.log(blogs);

  return (
    <div>
      <Navbar2 />
      <h1 style={{ marginBottom: "10vh" }}>All Blogs</h1>
      {blogs &&
        blogs.map((blogs, index) => (
          <BlogCard
            id={blogs._id}
            isUser={localStorage.getItem("userId") === blogs.user._id}
            title={blogs.title}
            description={blogs.description}
            imageURL={blogs.image}
            username={blogs.user.name}
          />
        ))}
    </div>
  );
};

export default Blogs;
