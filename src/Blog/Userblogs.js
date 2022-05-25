import React, { useEffect, useState } from "react";
import axios from "axios";
import BlogCard from "./BlogCard";
import Navbar2 from "../components/styled/navbar2";

const Userblogs = () => {
  //Assigning inbuild functions to variables
  const [user, setUser] = useState();
  const id = localStorage.getItem("userId");

  //Sending GET request

  const sendRequest = async () => {
    const res = await axios
      .get(`https://webkit-cms.herokuapp.com/blog/user/${id}`)
      .catch((err) => console.log(err));
    const data = await res.data;
    console.log(data);
    return data;
  };

  //Assigning fetched data to variables

  useEffect(() => {
    sendRequest().then((data) => setUser(data.user));
  }, []);
  console.log(user);

  return (
    <div>
      <Navbar2 />
      <h1>My Blogs</h1>
      {user &&
        user.blog &&
        user.blog.map((blog, index) => (
          <BlogCard
            id={user._id}
            key={index}
            isUser={true}
            title={user.title}
            description={user.description}
            imageURL={user.image}
            username={user.name}
          />
        ))}
    </div>
  );
};

export default Userblogs;
