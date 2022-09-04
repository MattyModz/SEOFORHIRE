import Image from "next/image";
// import { YoutubeVideoPlayer } from "../../src/componants/Podcast/youtubePlayer";

import CountdownTimer from "../../src/componants/Programatic/application/CountdownTimer";
import Modal from "../../src/componants/Modal/Modal";
import { myContextform } from "../../Context/Contextform";
import { myContext } from "../../Context/Context";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CurrencyPoundIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
import Letter from "../../src/componants/Programatic/application/letter";
import { getClient, sanityClient, usePreviewSubscription } from "../../sanity";
import React from "react";
import PortableText from "react-portable-text";

function filterDataToSingleItem(data, preview) {
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }
  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

function Jobs({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.application,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  const application = filterDataToSingleItem(previewData, preview);
  console.log(application);

  const { showModal, setShowModal } = myContext();
  const { setForm } = myContextform();

  // declare today

  const today = new Date().getDate();
  const deadline = today + 3;
  console.log(deadline);
  // handle countdown

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  // // handle month format

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthint = new Date().getMonth();
  const month = monthNames[monthint];

  // handles suffix to date

  const nth = function (deadline) {
    if (deadline > 3 && deadline < 21) return "th";
    switch (deadline % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  console.log(nth(deadline));

  // final output
  const Deadlineformat = month + " " + deadline + nth(deadline);

  return (
    <>
      <div className="w-full   bg-royal">
        <div className=" flex justify-center px-3">
          {/* <h1 className="text-xl font-bold text-white ">
            Ready to change your job for a career? Apply for the Seo Manager
            position in Manchesters and we will take care of the Rest!
          </h1> */}
          <div className="py-4">
            <Image
              className=" p"
              src={"/headline.png"}
              width={800}
              height={180}
            />
          </div>
        </div>

        <section className=" sm:pb-16 lg:pb-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative  overflow-hidden bg-royal rounded-xl py-4 ">
              <div className="absolute inset-0">
                <img
                  className="object-contain object-right w-full h-full transform scale-125"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg"
                  alt=""
                />
              </div>

              <div className="relative  lg:px-8">
                <div className="relative">
                  <div className="absolute"></div>

                  <div className="  relative grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-16 xl:gap-x-20">
                    <motion.div
                      className=" flex flex-col justify-between lg:col-span-3"
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.35 },
                      }}
                      viewport={{ once: true }}
                    >
                      <div className=" -mt-8 lg:-mt-0">
                        <div className="relative">
                          <iframe
                            src={application.videourl}
                            frameBorder="0"
                            allow="autoplay; fullscreen; picture-in-picture"
                            allowFullScreen
                            className=" w-full h-full"
                            title="Front page Banner vid"
                          ></iframe>
                        </div>
                        <script
                          src="https://player.vimeo.com/api/player.js"
                          async
                        ></script>
                      </div>
                      <p className="py-4 text-white text-center  lg:text-4xl text-2xl">
                        The <span className="underline">Life</span>You Want, The{" "}
                        <span className="underline">Marriage</span>You Want...{" "}
                        <span className="underline">The Family </span>
                        That You Want, Is Going To Be{" "}
                        <span className="font-bold">
                          Fueled By A Career That You Thrive In...
                        </span>
                      </p>
                      <div className="mt-8 lg:mt-auto">
                        <div className="relative bg-royal">
                          <div className="relative mx-auto"></div>
                        </div>
                      </div>
                    </motion.div>

                    <motion.div
                      className="lg:col-span-2 bg-gray-50/10  rounded-xl p-6 -mt-20 lg:-mt-0 "
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.55 },
                      }}
                      viewport={{ once: true }}
                    >
                      <div className="flex justify-center">
                        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
                      </div>
                      <div className="mt-6 text-base font-normal leading-7 text-white text-opacity-80 ">
                        <div className="  justify-center lg:flex md:flex flex ">
                          <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                            <div className="py-1.5">
                              <BriefcaseIcon
                                className=" mr-1 h-4 w-4 text-white"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="font-semibold">
                              {application.term}
                            </div>
                          </div>

                          <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                            <div className="py-1.5">
                              <LocationMarkerIcon
                                className=" mr-1 h-4 w-4 text-white"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="font-semibold">
                              {application.location}
                            </div>
                          </div>

                          <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10 text-gray-100 mb-4">
                            <div className="py-1.5">
                              <CurrencyPoundIcon
                                className=" mr-1 h-4 w-4 text-white"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="font-semibold">
                              {application.salary}
                            </div>
                          </div>
                        </div>
                        {/* <p className="lg:hidden block text-white">
                            This is a breif description of the job being
                            advertised users can apply for the job hear
                          </p> */}
                      </div>

                      <p className="text-white text-xl font-bold text-center ">
                        Application Deadline Ends
                        <span className="text-red-400"> {Deadlineformat}</span>
                      </p>
                      {/* <form action="" method="POST" className="mt-4 space-y-4"> */}
                      <div className="mt-4 space-y-4">
                        <div className="mt-4 space-y-4">
                          <label htmlFor="" className="sr-only">
                            {" "}
                            Full name{" "}
                          </label>
                          <div className="">
                            <input
                              type="text"
                              name=""
                              id=""
                              className="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                              placeholder="First Name"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="" className="sr-only">
                            {" "}
                            Email address{" "}
                          </label>
                          <div className="">
                            <input
                              type="email"
                              name=""
                              id=""
                              className="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                              placeholder="Email address"
                            />
                          </div>
                        </div>

                        <div className="relative group">
                          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                          <button
                            // type="submit"
                            onClick={() => {
                              setShowModal(true, setForm("Form"));
                            }}
                            className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base sm:py-3.5 font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent"
                          >
                            Apply for {application.title}
                          </button>
                        </div>
                      </div>
                      {/* <p className="text-lg font-bold text-white py-4">
                        Application deadline
                      </p> */}
                      {/* </form> */}
                      <div className="mt-8 sm:mt-12">
                        <p className="text-xs font-bold tracking-widest text-white uppercase text-opacity-70">
                          Trusted by
                        </p>
                        <div className="inline-grid grid-cols-2 gap-8 mt-8 lg:gap-x-12">
                          <img
                            className="object-contain w-auto h-6"
                            src="/Sage.svg"
                            alt=""
                          />

                          <img
                            className="object-contain w-auto h-6"
                            src="/Boyd-Digital-logo.svg"
                            alt=""
                          />
                          <img
                            className="object-contain w-auto h-6"
                            src="/GM.svg"
                            alt=""
                          />
                          <img
                            className="object-contain w-auto h-6"
                            src="/seopartnersw.png"
                            alt=""
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="lg:text-6xl text-4xl py-8 text-center    font-bold text-royal  border-t border-b ">
        Just one application
        <br />{" "}
        <span className="lg:text-5xl text-3xl text-blue-800 font-bold">
          {" "}
          can change your life
        </span>
      </div>
      <Letter
        from={application.employer_name}
        location={application.employer_company}
        body={application.letter}
        img={application.image}
      />

      <div className="w-full bg-gray-50 ">
        <section className="pb-12 py-12  sm:pb-16 lg:pb-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative py-12 overflow-hidden bg-royal/90  rounded-xl sm:py-16 lg:py-20">
              <div className="absolute inset-0">
                <img
                  className="object-contain object-right w-full h-full transform scale-125"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg"
                  alt=""
                />
              </div>
              <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="relative">
                  <div className="relative grid grid-cols-1 lg:grid-cols-1 gap-y-12 gap-x-16 xl:gap-x-20">
                    <div className="flex flex-col justify-between lg:col-span-3">
                      <div>
                        <h1 className="lg:text-5xl font-bold text-white  text-center">
                          Please Check All Of The Questions
                          <br />
                          Where Your Answer Is YES!
                        </h1>

                        <div className="py-12 lg:text-3xl text-2xl text-white ">
                          <div className="flex py-4">
                            <div>
                              <input type="checkbox" />
                            </div>
                            <div>
                              <p className="ml-2   ">{application.checkbox1}</p>
                            </div>
                          </div>
                          <div className="flex py-4">
                            <div>
                              <input type="checkbox" />
                            </div>
                            <div>
                              <p className="ml-2 ">{application.checkbox2}</p>
                            </div>
                          </div>
                          <div className="flex py-4">
                            <div>
                              <input type="checkbox" />
                            </div>
                            <div>
                              <p className="ml-2 ">{application.checkbox3}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <br />
                      <br />
                      <br />
                      <br />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <PortableText
              content={application.body}
              dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
              projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
              serializers={{
                h1: (props) => (
                  <h1 className="text-6xl font-bold my-5" {...props} />
                ),
                h2: (props) => (
                  <h2 className="text-4xl font-bold my-5" {...props} />
                ),
                h3: (props) => (
                  <h2 className="text-2xl font-bold my-5" {...props} />
                ),
                li: ({ children }) => (
                  <li className="ml-4 list-disc text-white"> {children} </li>
                ),
                link: ({ href, children }) => (
                  <a href={href} className="text-white hover:underline">
                    {children}
                  </a>
                ),
              }}
            />
          </div>

          <Modal open={showModal} onClose={() => setShowModal(false)}>
            {application.title}
            {application.term}
            {application.location}
            {application.salary}
          </Modal>
        </section>
      </div>
    </>
  );
}

export default Jobs;

export const getStaticPaths = async () => {
  const query = `*[_type == "funel"]{
    _id,
    slug {
        current
    }
}`;

  const applications = await sanityClient.fetch(query);

  const paths = applications.map((application) => ({
    params: {
      slug: application.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const query = `*[_type == "funel" && slug.current == $slug]{
 id,
 title,
 location,
 term,
 salary,
 employer_name,
 employer_company,
 image,
 letter,
 body,
 slug,
 videourl,
  checkbox1,
   checkbox2,
    checkbox3,
 

}`;

  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const application = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { application, query, queryParams },
    },
    revalidate: 60,
  };
};
