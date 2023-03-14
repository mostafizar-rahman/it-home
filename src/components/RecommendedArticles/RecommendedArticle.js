import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import useDate from "../../Hooks/useDate";

const RecommendedArticle = ({ recaArticle }) => {
  const { images, date, views, title, author, id } = recaArticle;
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
        .get(`${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/users/${author}`)
        .then((res) => res?.data),
  });

  return (
    <div>
      <article className="group">
        <img
          alt="Lava"
          src={small}
          oading="lazy"
          className="w-[289px] h-[176px] rounded-2xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
        />

        <div className="mt-3 w-[288px] ">
          <Link
            to={`/articleDetails/${id}`}
            className="text-lg font-bold text-[#2C2C2C]"
          >
            {title.rendered}
          </Link>

          <div className="flex items-center justify-between mt-3">
            <a
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
            </a>
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
