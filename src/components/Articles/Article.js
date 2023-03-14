import React from "react";
import { Link } from "react-router-dom";
import useCategorieTag from "../../Hooks/useCategorieTag";
import useDate from "../../Hooks/useDate";
import { CategorieApiCall } from "../Api/ApiCall";

const Article = ({ article }) => {
  const { id, images, date, views, title, categories: articleCateId } = article;
  const { small } = images.photos[0].src;
  const publishDate = useDate(date);
  const { categories } = CategorieApiCall();
  const findedCategorieTag = useCategorieTag(categories, articleCateId);
  let sortTitle;
  if (title.rendered.length > 40) {
    sortTitle = title.rendered.slice(0, 40) + "...";
  } else {
    sortTitle = title.rendered;
  }
  return (
    <div>
      <div className="w-[335px] h-[79px] mx-auto mt-6 mb-4 flex">
        <div>
          <img
            src={small}
            oading="lazy"
            alt=""
            className="w-[96px] h-[79px] bg-[#C4C4C4]  rounded-2xl"
          />
        </div>
        <div className="ml-3 w-[239px]">
          <div className="flex justify-between items-center">
            {findedCategorieTag?.map((categorie) => (
              <span
                key={categorie.id}
                className="p-1 bg-[#F2F2F2] rounded text-[8px] text-[#2C2C2C]"
              >
                {categorie.name}
              </span>
            ))}
            <div className="space-x-[10px] mb-1">
              <span className="font-light text-[10px] text-[#828282]">
                {publishDate}
              </span>
              <span className="font-light text-[10px] text-[#828282]">
                {views} views
              </span>
            </div>
          </div>
          <Link
            to={`/articleDetails/${id}`}
            className="text-base font-bold text-[#2C2C2C]"
            dangerouslySetInnerHTML={{ __html: sortTitle }}
          />
        </div>
      </div>
    </div>
  );
};

export default Article;
