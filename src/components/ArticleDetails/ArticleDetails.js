import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useLoaderData } from "react-router-dom";
import useCategorieTag from "../../Hooks/useCategorieTag";
import useDate from "../../Hooks/useDate";
import { CategorieApiCall } from "../Api/ApiCall";

const ArticleDetails = () => {
  const articleDetails = useLoaderData();
  console.log(articleDetails);
  const {
    images,
    title,
    date,
    views,
    categories: articleCateId,
    author,
    content

  } = articleDetails;
  const { small } = images.photos[0].src;
  const { categories } = CategorieApiCall();
  const findedCategorieTag = useCategorieTag(categories, articleCateId);
  const publishDate = useDate(date);

  const {
    isLoading,
    error,
    data: authorInfo,
    isFetching,
  } = useQuery({
    queryKey: ["users", author],
    queryFn: () =>
      axios
        .get(`${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/users/${author}`)
        .then((res) => res?.data),
  });

  return (
    <article className="w-[335px] mx-auto h-[700px] mt-6 overflow-y-scroll ">
      <div>
        <img src={small} alt="" className="w-[335px] h-[204px] rounded-2xl" />
      </div>
      <div className="my-[15px]">
        <div className="flex justify-between items-center">
          {findedCategorieTag?.map((categorie) => (
            <span
              key={categorie.id}
              className="p-1 bg-[#F2F2F2] rounded text-[8px] text-[#2C2C2C]"
            >
              {categorie.name}
            </span>
          ))}
          <div className="space-x-[10px]">
            <span className="font-light text-[10px] text-[#828282]">
              {publishDate}
            </span>
            <span className="font-light text-[10px] text-[#828282]">
              {views} views
            </span>
          </div>
        </div>
        <h2 className="font-bold text-[#2C2C2C] text-[24px] my-3">
          {title.rendered}
        </h2>
        <a href={authorInfo?.url} target="_blank" className="flex items-center">
          <img
            src={authorInfo?.avatar_urls[24]}
            alt=""
            className="w-5 h-5 rounded"
          />
          <span className=" text-[10px] text-[#333333] ml-1 mt-1">
            By: {authorInfo?.name}
          </span>
        </a>
      </div>
      <div className="" dangerouslySetInnerHTML={{ __html: content.rendered }} />
    </article>
  );
};

export default ArticleDetails;
