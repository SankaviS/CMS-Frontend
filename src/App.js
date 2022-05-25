import "./App.css";
import Navbar1 from "./components/styled/navbar";
import Home from "./components/pages/home";
import Footer from "./components/styled/footer";
import Resources from "./components/pages/resources";
import Blogs from "./Blog/Blogs";
import Contact from "./components/pages/contact";
import BlogDetails from "./Blog/BlogDetails";
import AddBlogs from "./Blog/AddBlogs";
import Login from "./Blog/Login";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { authActions } from "./Store/Index";

function App() {
  //Assigning inbuild functions to variables

  const dispath = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  console.log(isLoggedIn);
  useEffect(() => {
    if (localStorage.getItem("userId")) {
      dispath(authActions.login());
    }
  }, [dispath]);

  return (
    //Defining Routes for all the components and pages

    <div className="App">
      <header>
        <Navbar1 />
      </header>
      <main>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog/add" element={<AddBlogs />} />
          <Route path="/myBlogs/:id" element={<BlogDetails />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
