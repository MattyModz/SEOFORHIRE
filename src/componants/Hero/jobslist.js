import Link from "next/link";
import Applymodal from "../ApplyModal";
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyPoundIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from "@heroicons/react/solid";

export default function Joblisting({ slug, salary, location, type, title }) {
  return (
    <Link href={`/job/${slug}`}>
      <div className="lg:flex border- mb-2 p-2 lg:items-center bg-white lg:justify-between">
        <div className="flex-1 py-8 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-600 sm:text-3xl sm:truncate">
            {title}
          </h2>
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
        <div className="mt-5 mr-2 flex lg:mt-0 lg:ml-4">
          <span className="">
            <button class="learn-more">
              <span class="circle" aria-hidden="true">
                <span class="icon arrow"></span>
              </span>
              <span class="button-text">Apply</span>
            </button>
          </span>

          <></>
        </div>
      </div>
    </Link>
  );
}
