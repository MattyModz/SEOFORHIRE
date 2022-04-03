import Link from "next/link";
import Modal from "../Modal/Modal";
import { useState } from "react";
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyPoundIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from "@heroicons/react/solid";

export default function Joblisting({ slug, salary, location, type, title }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className="lg:flex cursor-pointer  mb-2 p-2 lg:items-center rounded-xl lg:justify-between">
      <div className="flex-1 rounded-xl  py-8 min-w-0">
        <Link href={`/job/${slug}`}>
          <h2 className="text-2xl font-bold leading-7 text-gray-600 sm:text-3xl sm:truncate">
            {title}
          </h2>
        </Link>
        <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <BriefcaseIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {type}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <LocationMarkerIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {location}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CurrencyPoundIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            {salary}
          </div>
          <div className="mt-2 flex items-center text-sm text-gray-500">
            <CalendarIcon
              className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            Closing on
          </div>
        </div>
      </div>

      <div className="mt-5 mr-2 rounded-xl flex lg:mt-0 lg:ml-4">
        <span className="">
          <button class="learn-more" onClick={() => setShowModal(true)}>
            <span class="circle" aria-hidden="true">
              <span class="icon arrow"></span>
            </span>
            <span class="button-text">Apply</span>
          </button>
        </span>
      </div>
      <div>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          Hello
        </Modal>
      </div>
    </div>
  );
}
