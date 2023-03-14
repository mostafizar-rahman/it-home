import React, { useState } from "react";
import Articles from "../Articles/Articles";
import Categories from "../Categories/Categories";
import RecommendedArticles from "../RecommendedArticles/RecommendedArticles";

const Home = () => {
    const [categorieId, setCategorieId] = useState('')

  return (
    <div>
      <RecommendedArticles per_page_show={10} />
      <Categories setCategorieId={setCategorieId} />
      <Articles per_page_show={2} categorieId={categorieId} />
    </div>
  );
};

export default Home;
