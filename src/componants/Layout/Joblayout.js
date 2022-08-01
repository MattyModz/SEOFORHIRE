import { motion } from "framer-motion";
import Container from "../container";
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyPoundIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from "@heroicons/react/solid";
export default function Joblayout({
  children,
  Herotitle,

  joblocation,
  jobsalary,

  term,
}) {
  return (
    <section class="w-full ">
      <div class=" w-full   flex flex-col items-center px-8 pt-12 pb-24 mx-auto  bg-gradient-to-br from-[#190873] via-[#100750] to-black sm:pt-20 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64 sm:px-0">
        <div class="w-full mb-5    sm:w-11/12 lg:w-2/3 lg:mb-10">
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
              <h1 className="pb-5 z-1 sm:text-7xl sm:text-6xl md:text-7xl sm:text-center md:text-center ">
                {Herotitle}
              </h1>
            </div>
          </motion.div>
        </div>
        <div className="  justify-center lg:flex md:flex  ">
          <div class="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
            <BriefcaseIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
              aria-hidden="true"
            />
            {term}
          </div>

          <div class="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
            <LocationMarkerIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
              aria-hidden="true"
            />

            <h6 class="font-normal text-xs uppercase"> {joblocation}</h6>
          </div>

          <div class="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10 text-gray-100 mb-4">
            <CurrencyPoundIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-100"
              aria-hidden="true"
            />
            {jobsalary}
          </div>
        </div>
      </div>

      <div class="container   flex justify-center mx-auto -mt-20 md:-mt-56 sm:-mt-40">
        <div class="relative  w-11/12 rounded-xl  sm:w-2/3">
          <div class="overflow-hidden rounded-b-none rounded-xl">
            <div class=" bg-white box-content w-full h-auto ">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
