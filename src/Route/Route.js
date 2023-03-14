import { createBrowserRouter } from "react-router-dom";
import SearchResult from "../components/SearchBar/SearchResult";
import Root from "../Layout/Root";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/searchResult/:search",
    element: <SearchResult />,
    loader: async ({ params }) => {
      return fetch(
        `https://sajjadhsagor.com/wp-json/wp/v2/posts?search=${params.search}`
      );
    },
    // loader: async(({ params }) => fetch()),
  },
]);
