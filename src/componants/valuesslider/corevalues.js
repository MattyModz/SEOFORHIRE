import { useState } from "react";
import Slideshow from "./slideshow";

export default function Core() {
  return (
    <>
      <section className="w-full">
        <div className="relative  w-full">
          <svg
            className="fill-royal text-gray-100"
            viewBox="0 0 900 45"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 4 50 3c50 3 150 9 250 13.7 100 4.6 200 8 300 4.3S800 10.7 850 5.3L900 0v45H0V4Z"
              fillRule="#fff"
            ></path>
          </svg>
        </div>

        <div className="w-full bg-royal">
          <section class="relative block py-20 overflow-hidden leading-6 text-left bg-royal">
            <div class="w-full max-w-5xl px-8 mx-auto leading-6 text-left xl:px-12">
              <div class="relative w-full px-4 leading-6 text-center xl:flex-grow-0 xl:flex-shrink-0 lg:flex-grow-0 lg:flex-shrink-0">
                <div className="">
                  <h3 className="flex justify-center text-3xl text-white font-bold">
                    Values
                  </h3>
                  <Slideshow />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      ;
    </>
  );
}
