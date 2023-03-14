import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import useDate from "../../Hooks/useDate";

const RecommendedArticle = ({ recaArticle }) => {
  const { content, images, date, views, title, author } = recaArticle;
  const { small } = images?.photos[0]?.src;

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
        .get(`https://sajjadhsagor.com/wp-json/wp/v2/users/${author}`)
        .then((res) => res?.data),
  });

  return (
    <div>
      <article className="group">
        <img
          alt="Lava"
          src={small}
          className="w-[289px] h-[176px] rounded-2xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="mt-3 w-[288px] ">
          <a href="#">
            <h3 className="text-lg font-bold text-[#2C2C2C]">{title.rendered}</h3>
          </a>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <img
                src={authorInfo?.avatar_urls[24]}
                alt=""
                className="w-5 h-5 rounded"
              />
              <span className=" text-[10px] text-[#333333] ml-1 mt-1">
                By: {authorInfo?.name}
              </span>
            </div>
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
    </div>
  );
};

export default RecommendedArticle;
