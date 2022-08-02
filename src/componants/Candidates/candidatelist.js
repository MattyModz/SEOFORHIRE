import Link from "next/link";
import Modal from "../Modal/Modal";
import Image from "next/image";
import Form1 from "../Modal/Form1";
import { myContextform } from "../../../Context/Contextform";
import { useState, useEffect } from "react";
import Container from "../container";
import {
  BriefcaseIcon,
  CurrencyPoundIcon,
  LocationMarkerIcon,
  CollectionIcon,
} from "@heroicons/react/solid";
export default function Candlisting({
  jobTitle,
  availability,
  location,
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
    <Container>
      <div className="grid w-full">
        <div className=" bg-royal cursor-pointer border p-4 mb-2 p-2 lg:items-center rounded-xl lg:justify-between">
          <div className="flex-1 rounded-xl  py-6 min-w-0">
            <div className="flex justify-start pb-2">
              <Image src={"/logo.png"} width={50} height={50} alt="Logo" />
            </div>
            <div className="mt-1 ml-3 flex  sm:flex sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-2 space-x-2">
              <div className="flex">
                <div className="mt-2 flex  items-center text-sm  bg-white  flex rounded-full px-3 py-1.5   text-black font-bold mb-4">
                  <CollectionIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                  {yearsOfExperience} experience
                </div>
              </div>
              <div className="flex">
                <div className="mt-2 flex  items-center text-sm  bg-white  flex rounded-full px-3 py-1.5   text-black font-bold mb-4">
                  <LocationMarkerIcon
                    className="flex-shrink-0 mr-1.5 h-5 w-5 text-black"
                    aria-hidden="true"
                  />
                  {location}
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
              <h2 className="text-2xl ml-4 font-bold leading-7  sm:text-3xl text-white sm:truncate">
                {jobTitle}
              </h2>
            </Link>
            <div className="text-white">
              {" "}
              {specialism} {portfolio}
              {additionalInfo}
            </div>

            <div className="flex py-4">
              <div className="mt-3 mr-2   lg:mt-0 lg:ml-4">
                <span className="">
                  <button
                    className="learn-more bg-gray-100 rounded-full"
                    onClick={() => {
                      setShowModal(true, setForm("Form1"));
                    }}
                  >
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Hire</span>
                  </button>
                </span>
              </div>

              <div className="w-1/2  sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2">
                <div className="mt-3 mr-2   lg:mt-0 lg:ml-4">
                  <span className="">
                    <Link href={`/candidate/${slug}`}>
                      <button className="learn-more rounded-full bg-white bg-opacity-50 ">
                        <span
                          className="circle border-2 border-opacity-50"
                          aria-hidden="true"
                        >
                          <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">View</span>
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Modal open={showModal} onClose={() => setShowModal(false)}>
              {jobTitle}
              {yearsOfExperience}
              {location}
              {salary}
            </Modal>
          </div>
        </div>
      </div>
    </Container>
  );
}
// <div className="flex rounded-full inline-block px-3 py-1.5 bg-royal bg-opacity-80  text-gray-100 mb-4"></div>
//   <div className="text-black">{intro}</div>

// <div className="text-white">
//   {specialism} {YearsOfExperience} {portfolio}
//   {additionalInfo}
// </div>;

//  <span className="">
//    <button
//      className="learn-more bg-gray-100 rounded-full"
//      onClick={() => setShowModal(true)}
//    >
//      <span className="circle" aria-hidden="true">
//        <span className="icon arrow"></span>
//      </span>
//      <span className="button-text">Apply</span>
//    </button>
//  </span>;
