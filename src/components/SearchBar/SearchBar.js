import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearchResult] = useState("");
  const handleSearchInput = (e) => {
    // axios
    //   .get(
    //     `https://sajjadhsagor.com/wp-json/wp/v2/posts?search=${e.target.value}`
    //   )
    //   .then((res) => );
    setSearchResult(e.target.value);
  };
  const handleSearchInputEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/searchResult/${search}`);
    }
  };
  console.log(search);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <input
          onChange={handleSearchInput}
          onKeyUp={handleSearchInputEnter}
          type="text"
          placeholder="Search..."
          className="w-[335px] h-10 rounded-2xl bg-[#F4F4F4] px-3 outline-none"
        />
      </div>
    </div>
  );
};

export default SearchBar;
