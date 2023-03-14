import React from "react";
import "./Categories.css";
import Categorie from "./Categorie";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CategorieApiCall } from "../Api/ApiCall";

const Categories = ({ setCategorieId }) => {
  const { isLoading, categories } = CategorieApiCall();
  if (isLoading) {
    return <h1>Loding</h1>;
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 5,
      slidesToSlide: 1,
    },
  };
  return (
    <div className="categories-area">
      <Carousel responsive={responsive} itemClass="item" arrows={false}>
        <button className="btn rounded-md px-2 py-[6px] border border-[#BDBDBD] text-[#828282]">
          All
        </button>
        {categories.map((categorie) => (
          <Categorie
            key={categorie.id}
            categorie={categorie}
            setCategorieId={setCategorieId}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;
