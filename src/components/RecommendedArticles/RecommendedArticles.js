import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import RecommendedArticle from "./RecommendedArticle";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./RecommendedArticles.css"
const RecommendedArticles = ({per_page_show}) => {
  const {
    isLoading,
    error,
    data: recaArticles,
    isFetching,
  } = useQuery({
    queryKey: ["posts", "per_page", per_page_show],
    queryFn: () =>
      axios
        .get(`https://sajjadhsagor.com/wp-json/wp/v2/posts?per_page=${per_page_show}`)
        .then((res) => res?.data),
  });
  if (isLoading) {
    return <h1>Loding</h1>;
  }
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div className="mt-6 ml-5 recommended-articles-area">
      <h1 className="font-bold text-[24px] text-[#2C2C2C]">Recommended</h1>
      <Carousel responsive={responsive} itemClass="item" arrows={false}>
        {recaArticles.map((recaArticle) => (
          <RecommendedArticle key={recaArticle.id} recaArticle={recaArticle} />
        ))}
      </Carousel>
      <hr />
    </div>
  );
};

export default RecommendedArticles;
