import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Articles from "../components/Articles/Articles";
import Categories from "../components/Categories/Categories";
import RecommendedArticles from "../components/RecommendedArticles/RecommendedArticles";
import SearchBar from "../components/SearchBar/SearchBar";

const Root = () => {
    const [categorieId, setCategorieId] = useState('')

  return (
    <div>
      <div>
        <SearchBar />
        <RecommendedArticles per_page_show={10} />
        <Categories setCategorieId={setCategorieId} />
        <Articles per_page_show={2} categorieId={categorieId} />
      </div>
      <Outlet />
    </div>
  );
};

export default Root;
