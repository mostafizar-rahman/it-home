import axios from "axios";
import { useQuery } from "react-query";


// Categorie Api Call
const CategorieApiCall = () => {
  const {
    isLoading,
    data: categories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: async () =>
      await axios
        .get(`${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/categories`)
        .then((res) => res?.data),
  });

  return { isLoading, categories };
};


export { CategorieApiCall };
