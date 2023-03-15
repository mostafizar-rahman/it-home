import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import useCategorieTag from "../../Hooks/useCategorieTag";
import useDate from "../../Hooks/useDate";
import { CategorieApiCall } from "../Api/ApiCall";
import favrite1 from "../../images/favrite1.png"
const RecommendedArticle = ({ recaArticle }) => {
  const {
    images,
    date,
    views,
    title,
    author,
    id,
    categories: articleCateId,
  } = recaArticle;
  const { small } = images?.photos[0]?.src;
  console.log(articleCateId);
  const { categories } = CategorieApiCall();
  const findedCategorieTag = useCategorieTag(categories, articleCateId);
  console.log(findedCategorieTag);
  const publishDate = useDate(date);

  const {
    isLoading,
    data: authorInfo,
  } = useQuery({
    queryKey: ["users", author],
    queryFn: async () =>
      await axios
        .get(`${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/users/${author}`)
        .then((res) => res?.data),
  });

  if(isLoading){
    return
  }
  let sortTitle;
  if (title.rendered.length > 40) {
    sortTitle = title.rendered.slice(0, 40) + "...";
  } else {
    sortTitle = title.rendered;
  }

  return (
    <article>
      <div className="w-[289px] h-[176px] relative">
        <img
          alt="Lava"
          src={small}
          oading="lazy"
          className="w-[289px] h-[176px] rounded-2xl object-cover shadow-xl"
        />
        <div className="absolute top-0 flex w-full justify-between p-4 ">
          {findedCategorieTag?.map((categorie) => (
            <span
            style={{background: "rgba(255, 255, 255, 0.4)"}}
              key={categorie.id}
              className="h-full p-[8px] rounded text-[8px] text-white"
            >
              {categorie.name}
            </span>
          ))}
          <img src={favrite1} alt=""  style={{background: "rgba(255, 255, 255, 0.4)"}} className="bg-white opacity-80 p-1 rounded-md " />
        </div>
      </div>

      <div className="mt-3 w-[288px] ">
        <Link
          to={`/articleDetails/${id}`}
          className="text-lg font-bold text-[#2C2C2C]"
          dangerouslySetInnerHTML={{ __html: sortTitle }}
        />

        <div className="flex items-center justify-between mt-3">
          <Link
            href={authorInfo?.url}
            target="_blank"
            className="flex items-center"
          >
            <img
              src={authorInfo?.avatar_urls[24]}
              alt=""
              className="w-5 h-5 rounded"
            />
            <span className=" text-[10px] text-[#333333] ml-1 mt-1">
              By: {authorInfo?.name}
            </span>
          </Link>
          <div className="space-x-[10px]">
            <span className="font-light text-[10px] text-[#828282]">
              {publishDate}
            </span>
            <span className="font-light text-[10px] text-[#828282]">
              {views} views
            </span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default RecommendedArticle;
