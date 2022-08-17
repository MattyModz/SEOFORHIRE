import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <div className="  text-xl  px-2 rounded-full text-center  ">
        <div className=" border-4  w-12 h-12 text-center py-1.5  border-white rounded-full">
          <p className=" font-bold">{value}</p>
        </div>
      </div>
      <div className="text-center font-bold text-gray-100/30">{type}</div>
    </div>
  );
};

export default DateTimeDisplay;
