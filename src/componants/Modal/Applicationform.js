import Container from "../container";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyPoundIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from "@heroicons/react/solid";
export default function Application({ children, type, location, salary }) {
  return (
    <>
      <Container>
        <motion.div
          class="py-8 md:py-16bg-black bg-opacity-10 rounded-xl w-full"
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
          <div class="px-10 mx-auto max-w-7xl md:px-16   ">
            <div class="max-w-3xl  ">
              <Image src={"/logo.png"} width={50} height={50} alt="Logo" />
              <p class="text-xs font-bold text-blue-500 uppercase"></p>
              <h2 class="mt-1 text-2xl font-bold text-left text-white lg:text-3xl md:mt-2">
                Apply for - {children}
              </h2>

              <div className="py-8 md:flex sm:block  ">
                <div className="flex">
                  <div class="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                    <BriefcaseIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                    <div>{type}</div>
                  </div>
                </div>

                <div className="flex">
                  <div class="flex rounded-full px-3 py-1.5   bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                    <LocationMarkerIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                      aria-hidden="true"
                    />

                    <h6 class=""> {location}</h6>
                  </div>
                </div>

                <div className="flex">
                  <div class="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10 text-gray-100 mb-4">
                    <CurrencyPoundIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-100"
                      aria-hidden="true"
                    />
                    {salary}
                  </div>
                </div>
              </div>

              {/* <p class="max-w-screen-md mx-auto mt-2 text-left text-white md:text-lg md:mt-2">
                We Value your privacy, please read our Privacy policy
                <a href="#_" class="font-medium text-blue-500 underline">
                  developer help center
                </a>
                .
              </p> */}
            </div>

            <form class="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  class="inline-block mb-2 text-sm font-medium text-white0 sm:text-base"
                >
                  First name
                </label>
                <input
                  name="first-name"
                  class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>
              <div>
                <label
                  for="first-name"
                  class="inline-block mb-2 text-sm font-medium text-white sm:text-base"
                >
                  Last name
                </label>
                <input
                  name="first-name"
                  class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>
              <div>
                <label
                  for="first-name"
                  class="inline-block mb-2 text-sm font-medium text-white sm:text-base"
                >
                  Email
                </label>
                <input
                  name="first-name"
                  class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>
              <div>
                <label
                  for="first-name"
                  class="inline-block mb-2 text-sm font-medium text-white sm:text-base"
                >
                  Tel
                </label>
                <input
                  name="first-name"
                  class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>
              <div>
                <label
                  for="first-name"
                  class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                ></label>
              </div>

              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="inline-block mb-2 text-sm font-medium text-white sm:text-base"
                >
                  Cover Note
                </label>
                <textarea
                  name="Cover Note"
                  class="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                ></textarea>
              </div>
            </form>
          </div>
        </motion.div>
      </Container>
    </>
  );
}

// <form class="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
//           <div>
//             <label
//               for="first-name"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               First name
//             </label>
//             <input
//               name="first-name"
//               class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             />
//           </div>

//           <div>
//             <label
//               for="last-name"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               Last name
//             </label>
//             <input
//               name="last-name"
//               class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             />
//           </div>

//           <div class="sm:col-span-2">
//             <label
//               for="Email"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               Email
//             </label>
//             <input
//               name="Email"
//               class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             />
//           </div>

//           <div class="sm:col-span-2">
//             <label
//               for="tel"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               Tel
//             </label>
//             <input
//               name="Tel"
//               class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             />
//           </div>

//           <div class="sm:col-span-2">
//             <label
//               for="message"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               Message
//             </label>
//             <textarea
//               name="message"
//               class="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             ></textarea>
//           </div>
