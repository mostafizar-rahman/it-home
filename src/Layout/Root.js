import React from "react";
import { Outlet } from "react-router-dom";
import SearchBar from "../components/SearchBar/SearchBar";
import PhoneBottomIcon from "../components/Shared/PhoneBottomIcon/PhoneBottomIcon";
import PhoneTopIcon from "../components/Shared/PhoneTopIcon/PhoneTopIcon";

const Root = () => {
  return (
    <div>
      <div>
        <PhoneTopIcon />
        <SearchBar />
      </div>
      <Outlet />
      <PhoneBottomIcon/>
    </div>
  );
};

export default Root;
