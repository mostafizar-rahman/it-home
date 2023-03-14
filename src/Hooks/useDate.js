import React from "react";

const useDate = (date) => {
  const milliseconds = Date.parse(date);
  const dateObject = new Date(milliseconds);
  const month = dateObject.toLocaleString("en-US", { month: "long" });
  const newDate = dateObject.toLocaleString("en-US", { day: "numeric" });
  const year = dateObject.toLocaleString("en-US", { year: "numeric" });

  return `${month} ${newDate}, ${year}`;
};

export default useDate;
