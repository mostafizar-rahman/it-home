import React from "react";
import useDate from "../../Hooks/useDate";
import { CategorieApiCall } from "../Api/ApiCall";

const Article = ({ article }) => {
  const { images, date, views, title, categories: articleCateId } = article;
  const { small } = images.photos[0].src;
  const publishDate = useDate(date);
  const { categories } = CategorieApiCall();
  
  const findedCategorie = categories.filter((orignalCateId)=> orignalCateId.id === articleCateId[0])

  return (
    <div>
      <div className="w-[335px] h-[79px] mx-auto mt-6 mb-4 flex">
        <div>
          <img
            src={small}
            alt=""
            className="min-w-24  h-full bg-[#C4C4C4]  rounded-2xl"
          />
        </div>
        <div className="ml-3">
          <div className="flex justify-between items-center">
            {findedCategorie.map((categorie)=> <span key={categorie.id} className="p-1 bg-[#F2F2F2] rounded text-[8px] text-[#2C2C2C]">{categorie.name}</span>)}
            <div className="space-x-[10px]">
              <span className="font-light text-[10px] text-[#828282]">
                {publishDate}
              </span>
              <span className="font-light text-[10px] text-[#828282]">
                {views} views
              </span>
            </div>
          </div>
          <a href="" className="text-base font-bold text-[#2C2C2C]">
            {title.rendered}
          </a>
        </div>
      </div>
      {/* <div dangerouslySetInnerHTML={{ __html: content.rendered }} /> */}
    </div>
  );
};

export default Article;
