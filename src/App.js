import React, { useEffect, useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import Loading from "./components/Loading/Loading";
import { route } from "./Route/Route";

const App = () => {
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setTimeout(function () {
      console.log("Delayed for 5 second.");
      setIsFetching(false);
    }, 2000);
  }, []);

  if (isFetching) {
    return <Loading/>
  }

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#E6F1FB]">
      <div className="w-[375px] h-[812px] rounded-[25px] border-spacing-3 bg-white main-shadow relative">
        <RouterProvider router={route} />
      </div>
    </div>
  );
};

export default App;
