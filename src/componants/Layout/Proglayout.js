import { motion } from "framer-motion";

import {
  BriefcaseIcon,
  CurrencyPoundIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
export default function Proglayout({
  children,
  Herotitle,

  joblocation,
  jobsalary,

  term,
}) {
  return (
    <section className="w-full ">
      <div className=" w-full   flex flex-col items-center px-8  pb-24 mx-auto  bg-royal   md:pb-48 lg:pb-56 xl:pb-64 sm:px-0">
        <div className="w-full     sm:w-11/12 lg:w-2/3 lg:mb-10">
          <motion.div
            initial="pageInitial"
            exit={{ opacity: 0 }}
            animate="pageAnimate"
            className="py-11 flex justify-center text-white"
            variants={{
              pageInitial: {
                opacity: 0,
              },
              pageAnimate: {
                opacity: 1,
              },
            }}
          >
            <div className=" text-6xl font-extrabold text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center p-2">
              <h1 className=" z-1 sm:text-7xl sm:text-6xl md:text-7xl sm:text-center md:text-center ">
                {Herotitle}
              </h1>
            </div>
          </motion.div>
        </div>
        <div className="  justify-center lg:flex md:flex flex ">
          <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
            <BriefcaseIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
              aria-hidden="true"
            />
            {term}
          </div>

          <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
            <LocationMarkerIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
              aria-hidden="true"
            />
            {joblocation}
          </div>

          <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10 text-gray-100 mb-4">
            <CurrencyPoundIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-100"
              aria-hidden="true"
            />
            {jobsalary}
          </div>
        </div>
      </div>

      <div className="container   flex justify-center mx-auto -mt-20 md:-mt-56 sm:-mt-40">
        <div className="relative  w-11/12 rounded-xl  sm:w-2/3">
          <div className="overflow-hidden rounded-b-none rounded-xl">
            <div className=" bg-white box-content w-full h-auto ">
              {children}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <button className="flex justify-center px-3 rounded-xl bg-blue-300 font-interr">
          Apply Now
        </button>
      </div>
      <div className="relative bg-royal">
        <div className="relative mx-auto">
          <div className="lg:max-w-6xl lg:mx-auto">
            <img
              className="transform scale-110"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/2/illustration.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}
