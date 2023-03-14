import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Articles from "../components/Articles/Articles";
import Categories from "../components/Categories/Categories";
import RecommendedArticles from "../components/RecommendedArticles/RecommendedArticles";
import SearchBar from "../components/SearchBar/SearchBar";

const Root = () => {
  return (
    <div>
      <SearchBar />

      <Outlet />
    </div>
  );
};

export default Root;
