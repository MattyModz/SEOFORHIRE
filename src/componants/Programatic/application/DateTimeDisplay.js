import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? "countdown danger" : "countdown"}>
      <div className="  text-xl  rounded-full text-center ">
        <div className="p-4 border-4 border-white rounded-full">
          <p className=" ">{value}</p>
        </div>
        {type}
      </div>
    </div>
  );
};

export default DateTimeDisplay;
