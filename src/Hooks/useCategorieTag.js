import React from "react";

const useCategorieTag = (categories, articleCateId) => {
  const findedCategorieTag = categories?.filter(
    (orignalCateId) => orignalCateId.id === articleCateId[0]
  );
  return findedCategorieTag;
};

export default useCategorieTag;
