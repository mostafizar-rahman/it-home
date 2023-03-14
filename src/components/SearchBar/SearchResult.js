import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const SearchResult = () => {
  const searchResult = useLoaderData();

  return (
    <div>
      {searchResult.map((data) => {
        const { id, images, title } = data;
        const { small } = images?.photos[0]?.src;
        let sortTitle;
        if(title.rendered.length > 60){
           sortTitle = title.rendered.slice(0, 60) + '...'
        }
        else{
          sortTitle = title.rendered
        }

        return (
          <div className="w-[335px] h-[79px] mx-auto mt-6 mb-4 flex">
            <div>
              <img
                src={small}
                oading="lazy"
                alt=""
                className="w-[96px] h-[79px] bg-[#C4C4C4]  rounded-2xl"
              />
            </div>
            <div className="ml-3 w-[239px]">
              <Link
                to={`/articleDetails/${id}`}
                className="text-base font-bold text-[#2C2C2C] "
                dangerouslySetInnerHTML={{ __html: sortTitle }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SearchResult;
