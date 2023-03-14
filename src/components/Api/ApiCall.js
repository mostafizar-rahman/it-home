import axios from "axios";
import { useQuery } from "react-query";

// Categorie Api Call
const CategorieApiCall = () => {
  const {
    isLoading,
    error,
    data: categories,
    isFetching,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      axios
        .get("https://sajjadhsagor.com/wp-json/wp/v2/categories")
        .then((res) => res?.data),
  });

  return { isLoading, categories };
};

// Post data api call
const ArticleApiCall = ({per_page_show}) => {
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
          `https://sajjadhsagor.com/wp-json/wp/v2/posts?per_page=${per_page_show}`
        )
        .then((res) => res?.data),
  });
  return { isLoading, articles };
};
export { CategorieApiCall, ArticleApiCall };
