import axios from "axios";
import React, { useEffect, useState } from "react";
import Articles from "../Articles/Articles";
import Categories from "../Categories/Categories";
import RecommendedArticles from "../RecommendedArticles/RecommendedArticles";

const Home = () => {
  const [aritcle, setAritcle] = useState([]);
  const [mainAriticle, setMainAriticle] = useState([]);

  // this for Aritcle api
  const getAritcle = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/posts?per_page=${2}`
      )
      .then((res) => {
        return setAritcle(res?.data), setMainAriticle(res?.data);
      });
  };

  //  First time load All Aritcle
  useEffect(() => {
    getAritcle();
  }, []);

  // Find Aritcle by categorie
  const handleCategorieId = (cateId) => {
    const aritcleWhitCategorie = mainAriticle?.filter(
      (articleCategorieId) => articleCategorieId.categories[0] === cateId
    );
    setAritcle(aritcleWhitCategorie);
  };

  // Find All Aritcle
  const handleCategorieAll = () => {
    getAritcle();
  };

  return (
    <div>
      <RecommendedArticles per_page_show={10} />
      <Categories
        handleCategorieId={handleCategorieId}
        handleCategorieAll={handleCategorieAll}
      />
      <Articles aritcle={aritcle} />
    </div>
  );
};

export default Home;
