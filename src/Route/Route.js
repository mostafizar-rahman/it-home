import { createBrowserRouter } from "react-router-dom";
import ArticleDetails from "../components/ArticleDetails/ArticleDetails";
import Home from "../components/Home/Home";
import SearchResult from "../components/SearchBar/SearchResult";
import Root from "../Layout/Root";

export const route = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/articleDetails/:id",
        element: <ArticleDetails />,
        loader: async ({ params }) =>
          fetch(
            `${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/posts/${params.id}`
          ),
      },
      {
        path: "/searchResult/:search",
        element: <SearchResult />,
        loader: async ({ params }) =>
          fetch(
            `${process.env.REACT_APP_MAIN_URL}/wp-json/wp/v2/posts?search=${params.search}`
          ),
      }
    ],
  },
 
]);
