import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearchResult] = useState("");

  const handleSearchInput = (e) => {
    setSearchResult(e.target.value);
  };

  // Enter button Hendlaer for search
  const handleSearchInputEnter = (e) => {
    if (e.key === "Enter") {
      navigate(`/searchResult/${search}`);
      setSearchResult("");
    }
  };

  return (
    <div className="flex justify-center mt-3">
      <input
        onChange={handleSearchInput}
        onKeyUp={handleSearchInputEnter}
        value={search}
        type="text"
        placeholder="Search..."
        className="w-[335px] h-10 rounded-2xl bg-[#F4F4F4] px-3 outline-none"
      />
    </div>
  );
};

export default SearchBar;
