import Link from "next/link";
import Modal from "../Modal/Modal";
import { useState, useEffect } from "react";
import Form from "../Modal/Form";
import { myContextform } from "../../../Context/Contextform";
import {
  BriefcaseIcon,
  CurrencyPoundIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";

export default function Joblisting({
  slug,
  salary,
  location,
  type,
  title,

  intro,
}) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);
  const { form, setForm } = myContextform();
  console.log(form);
  return (
    <div className="lg:flex bg-white cursor-pointer border p-4 mb-2 p-2 lg:items-center rounded-xl lg:justify-between">
      <div className="flex-1 rounded-xl  py-4 min-w-0">
        <div className="mt-1 flex  sm:flex sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-2 space-x-2">
          <div className="flex">
            <div className="mt-2 flex  items-center text-sm  bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold mb-4">
              <BriefcaseIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                aria-hidden="true"
              />
              {type}
            </div>
          </div>
          <div className="flex">
            <div className="mt-2 flex  items-center text-sm  bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold mb-4">
              <LocationMarkerIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                aria-hidden="true"
              />
              {location}
            </div>
          </div>
          <div className="flex sm:block hidden">
            <div className="mt-2 flex  items-center text-sm  bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold mb-4">
              <CurrencyPoundIcon
                className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                aria-hidden="true"
              />
              {salary}
            </div>
          </div>
        </div>
        <Link href={`/job/${slug}`}>
          <h2 className="text-2xl px-3 font-bold leading-7 text-black sm:text-3xl sm:truncate">
            {title}
          </h2>
        </Link>
      </div>

      <div class="block md:flex flex-wrap ">
        <div class="w-1/2  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="mt-3 mr-2   lg:mt-0 lg:ml-4">
            <span className="">
              <button
                class="learn-more bg-gray-100 rounded-full"
                onClick={() => {
                  setShowModal(true, setForm(<Form />));
                }}
              >
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Apply</span>
              </button>
            </span>
          </div>
        </div>

        <div class="w-1/2  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
          <div className="mt-5 mr-2   lg:mt-0 lg:ml-4">
            <span className="">
              <Link href={`/job/${slug}`}>
                <button class="learn-more bg-blue-300 bg-opacity-30 rounded-full">
                  <span class="circle" aria-hidden="true">
                    <span class="icon arrow"></span>
                  </span>
                  <span class="button-text">View</span>
                </button>
              </Link>
            </span>
          </div>
        </div>
      </div>

      <div>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          {title}
          {type}
          {location}
          {salary}
        </Modal>
      </div>
    </div>
  );
}
// <div class="flex rounded-full inline-block px-3 py-1.5 bg-royal bg-opacity-80  text-gray-100 mb-4"></div>
//   <div className="text-black">{intro}</div>
