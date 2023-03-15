import React from "react";
import Article from "./Article";

const Articles = ({ aritcle }) => {

  return (
    <div>
      {aritcle?.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
};

export default Articles;
