import { motion } from "framer-motion";
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
  Jobtitle,
  type,
}) {
  return (
    <section class="w-full  p-2">
      <div class=" w-full   flex flex-col items-center px-8 pt-12 pb-24 mx-auto sm:rounded-lg bg-gradient-to-br from-[#190873] via-[#100750] to-black sm:pt-20 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64 sm:px-0">
        <div class="w-full mb-5   sm:w-11/12 lg:w-2/3 lg:mb-10">
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
            <div className="  text-6xl font-extrabold text-center  sm:text-5xl sm:text-6xl md:text-7xl sm:text-center md:text-center p-2">
              <h1 className="pb-5 z-1 sm:text-7xl sm:text-6xl md:text-7xl sm:text-center md:text-center ">
                {Herotitle}
              </h1>
            </div>
          </motion.div>
        </div>
        <div className="text-white border-4 justify-center  content-center font-bold flex">
          <div className="mt-2 mr-8 flex items-center text-sm text-white">
            <CurrencyPoundIcon
              className="flex-shrink-0  h-5 w-5 text-white"
              aria-hidden="true"
            />
            {jobsalary}
          </div>
          <div className="mt-2 flex items-center text-sm text-white">
            <BriefcaseIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
              aria-hidden="true"
            />
            {type}
          </div>
          <div className="mt-2  flex items-center text-sm text-white">
            <LocationMarkerIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
              aria-hidden="true"
            />
            {joblocation}
          </div>
        </div>
        ;
      </div>

      <div class="container  flex justify-center mx-auto -mt-20 md:-mt-56 sm:-mt-40">
        <div class="relative bg-white w-11/12  sm:w-2/3">
          <div class="overflow-hidden border  rounded-b-none rounded-xl">
            <div class=" bg-white box-content w-full h-auto bg-gray-100">
              {children}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
