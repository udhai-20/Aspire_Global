import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Page/Home/Home";
import Blog from "../Page/Blog/Blog";
import BlogIndividual from "../Page/BlogIndividual/BlogIndividual";

function MainRouter(props) {
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/blog"} element={<Blog />} />
        <Route path={"/blog/:id"} element={<BlogIndividual />} />
      </Routes>
    </>
  );
}

export default MainRouter;
