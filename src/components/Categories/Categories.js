import React from "react";
import "./Categories.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CategorieApiCall } from "../Api/ApiCall";

const Categories = ({ handleCategorieAll, handleCategorieId }) => {
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
    <div className="categories-area mt-6">
      <Carousel responsive={responsive} itemClass="item" arrows={false}>
        <button
          onClick={handleCategorieAll}
          className="btn rounded-md px-2 py-[6px] border border-[#BDBDBD] text-[#828282]"
        >
          All
        </button>
        {categories.map((categorie) => (
          <button
            key={categorie.id}
            onClick={() => handleCategorieId(categorie.id)}
            className="btn rounded-md px-2 py-[6px] border border-[#BDBDBD] text-[#828282]"
          >
            {categorie.name}
          </button>
        ))}
      </Carousel>
    </div>
  );
};

export default Categories;
