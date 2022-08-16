import React from "react";

export default function Counter() {
  const index = {
    zindex: 99,
    border: 4,
  };

  return (
    <div
      style={index}
      className="w-full  justify-center   bg-blue-900/40 rounded-xl text-white  font-inter text-2xl"
    >
      Number of Applicants:
    </div>
  );
}
