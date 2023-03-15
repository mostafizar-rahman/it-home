import React from "react";
import battery from "../../../images/Battery.png";
import WiFi from "../../../images/Wi-Fi.png";
import combined from "../../../images/Combined.png";

const PhoneTopIcon = () => {
  const houres = new Date().getHours()
  const minutes = new Date().getMinutes()
  const time = `${houres}:${minutes}`
  return (
    <div className="w-[335px] h-[44px] mx-auto">
      <div className="h-full flex justify-between items-center">
        <p className="text-[15px] font-bold text-black">{time}</p>
        <div className="flex items-center gap-x-2">
          <img src={combined} alt="" />
          <img src={WiFi} alt="" />
          <img src={battery} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PhoneTopIcon;
