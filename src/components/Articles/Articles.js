import axios from 'axios';
import React from 'react'
import { useQuery } from 'react-query';
import Article from './Article';

const Articles = ({per_page_show, categorieId}) => {
  const { isLoading, error, data: articles, isFetching } = useQuery({
    queryKey: ["posts", "per_page", per_page_show],
    queryFn: () =>
      axios
        .get(`https://sajjadhsagor.com/wp-json/wp/v2/posts?per_page=${per_page_show}`)
        .then((res) => res?.data),
  });
  if(isLoading){
    return <h1>Logind</h1>
  }
   const filteredArticle = articles?.filter((articleCategorieId)=> articleCategorieId.categories[0] === categorieId)
  // if(filteredArticle.length <= 0){
  //     return <h1>NO P</h1>
  // }
  
  // console.log('this',filteredArticle)
  return (
    <div>
      {
        articles?.map((article)=> <Article key={article.id} article={article}/>)
      }
    </div>
  )
}

export default Articles