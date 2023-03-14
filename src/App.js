import React, { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { route } from "./Route/Route";

const App = () => {

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-[#E6F1FB]">
      <div className="w-[375px] h-[812px] rounded-[25px] border-spacing-3 bg-white main-shadow relative">
        <RouterProvider router={route}/>
      </div>
    </div>
  );
};

export default App;
