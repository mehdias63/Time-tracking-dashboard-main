import React from "react";

export default function Card({ color, icon, title, text, time }) {
  return (
    <div className="relative last:mb-20">
      <div
        style={{ backgroundColor: color }}
        className="w-[20rem] h-[6rem] rounded-xl"
      >
        <img src={icon} className="ml-auto mr-4" />
      </div>
      <div className="text-[#FFF] bg-dark-blue w-[20rem] h-[8rem] rounded-xl p-4 flex flex-col justify-center gap-6 absolute top-10">
        <div className="flex justify-between items-center">
          <p className="text-xl">{title}</p>
          <img src="images/icon-ellipsis.svg" />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-[2rem]">{time}</h2>
          <p className="text-blue-sky text-[0.9375rem]">{text}</p>
        </div>
      </div>
    </div>
  );
}
