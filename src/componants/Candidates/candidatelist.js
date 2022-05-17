import Link from "next/link";
import Modal from "../Modal/Modal";
import Image from "next/image";
import Form1 from "../Modal/Form1";
import { myContextform } from "../../../Context/Contextform";
import { useState, useEffect } from "react";
import {
  BriefcaseIcon,
  CurrencyPoundIcon,
  LocationMarkerIcon,
  CollectionIcon,
} from "@heroicons/react/solid";
export default function Candlisting({
  jobTitle,
  availability,
  locaiton,
  specialism,
  yearsOfExperience,
  salary,
  portfolio,
  additionalInfo,
  slug,
}) {
  const [showModal, setShowModal] = useState(false);
  const { form, setForm } = myContextform();

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <div className=" w-full">
      <div className=" bg-royal cursor-pointer border p-4 mb-2 p-2 lg:items-center rounded-xl lg:justify-between">
        <div className="flex-1 rounded-xl  py-4 min-w-0">
          <div className="flex justify-start pb-2">
            <Image src={"/logo.png"} width={50} height={50} alt="Logo" />
          </div>
          <div className="mt-1 flex  sm:flex sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-2 space-x-2">
            <div className="flex">
              <div className="mt-2 flex  items-center text-sm  bg-white  flex rounded-full px-3 py-1.5   text-black font-bold mb-4">
                <CollectionIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-black"
                  aria-hidden="true"
                />
                {yearsOfExperience} years experience
              </div>
            </div>
            <div className="flex">
              <div className="mt-2 flex  items-center text-sm  bg-white  flex rounded-full px-3 py-1.5   text-black font-bold mb-4">
                <LocationMarkerIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-black"
                  aria-hidden="true"
                />
                {locaiton}
              </div>
            </div>

            <div className="flex sm:block hidden">
              <div className="mt-2 flex  items-center text-sm  bg-white  flex rounded-full px-3 py-1.5   text-black font-bold mb-4">
                <CurrencyPoundIcon
                  className="flex-shrink-0 mr-1.5 h-5 w-5 text-black"
                  aria-hidden="true"
                />
                {salary}
              </div>
            </div>
          </div>
          <Link href={`/candidate/${slug}`}>
            <h2 className="text-2xl px-3 font-bold leading-7  sm:text-3xl text-white sm:truncate">
              {jobTitle}
            </h2>
          </Link>
          <div className="text-white">
            {" "}
            {specialism} {portfolio}
            {additionalInfo}
          </div>

          <div class="flex py-4">
            <span className="">
              <button
                class="learn-more bg-gray-100 rounded-full"
                onClick={() => {
                  setShowModal(true, setForm(<Form1 />));
                }}
              >
                <span class="circle" aria-hidden="true">
                  <span class="icon arrow"></span>
                </span>
                <span class="button-text">Hire</span>
              </button>
            </span>

            <div class="flex py-4">
              <span className="">
                <Link href={`/candidate/${slug}`}>
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
            {jobTitle}
            {yearsOfExperience}
            {locaiton}
            {salary}
          </Modal>
        </div>
      </div>
    </div>
  );
}
// <div class="flex rounded-full inline-block px-3 py-1.5 bg-royal bg-opacity-80  text-gray-100 mb-4"></div>
//   <div className="text-black">{intro}</div>

// <div className="text-white">
//   {specialism} {YearsOfExperience} {portfolio}
//   {additionalInfo}
// </div>;

//  <span className="">
//    <button
//      class="learn-more bg-gray-100 rounded-full"
//      onClick={() => setShowModal(true)}
//    >
//      <span class="circle" aria-hidden="true">
//        <span class="icon arrow"></span>
//      </span>
//      <span class="button-text">Apply</span>
//    </button>
//  </span>;
