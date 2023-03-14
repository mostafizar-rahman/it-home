import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Article from "./Article";

const Articles = ({ per_page_show, categorieId }) => {
  const {
    isLoading,
    error,
    data: articles,
    isFetching,
  } = useQuery({
    queryKey: ["posts", "per_page", per_page_show],
    queryFn: () =>
      axios
        .get(
          `${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/posts?per_page=${per_page_show}`
        )
        .then((res) => res?.data),
  });
  if (isLoading) {
    return <h1>Logind</h1>;
  }

  articles?.filter(
    (articleCategorieId) => articleCategorieId.categories[0] === categorieId
  );
  // console.log(x)
  // setArticles(x)

  return (
    <div>
      {articles?.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
