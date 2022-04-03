// import Bcomp1 from "../src/componants/Blog/Blogcomp1";
// import { BLOG_COMP } from "../lib/wordpress/api";

import Joblisting from "../src/componants/Hero/jobslist";
import Verticlemarquee from "../src/componants/Hero/VerticleMarquee";
import client from "../lib/apollo";

import { gql } from "@apollo/client";

export default function Home({ jobs }) {
  return (
    <>
      <section className="   relative ">
        <div className="flex flex-wrap w-full bg-gradient-to-br from-[#1A0976] via-[#100750] to-black ">
          <div className="w-full xl:w-1/2  ">
            <div className=" w-full   flex flex-col items-center px-8 pt-12 pb-24 mx-auto sm:rounded-lg  sm:pt-20 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64 sm:px-0">
              <div className="w-full mb-5 sm:w-11/12 lg:w-2/3 lg:mb-10">
                <h1 className="pt-5 text-2xl font-bold text-left text-white md:pt-8 sm:text-center lg:pt-20 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Your go to choice for help with{" "}
                  <br className="hidden sm:block" /> SEO recruitment
                </h1>
              </div>
              <div className="flex flex-col items-center justify-center w-full mb-10 sm:flex-row sm:mb-20">
                <a
                  href="#_"
                  className="w-full font-bold px-8 py-3 text-lg text-center text-royal transition duration-150 ease-in-out bg-white rounded-md sm:w-auto focus:outline-none"
                >
                  Get Started
                </a>
                <a
                  href="#_"
                  className="w-full px-8 py-3 mt-5 ml-3 font-bold text-lg text-center text-white transition duration-150 ease-in-out bg-transparent border border-white rounded-md sm:ml-6 sm:w-auto sm:mt-0 focus:outline-none hover:bg-white hover:text-royal"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          <div className="w-full    xl:w-1/2 ">
            <div className="circlecclip  text-white h-full">
              <div className="w-full ">
                <Verticlemarquee />
              </div>
              <div className="p-4 opacity-60">
                <Verticlemarquee />
              </div>
              <div className="opacity-40">
                <Verticlemarquee />
              </div>
            </div>
          </div>
        </div>

        <div className="container rounded-xl flex justify-center mx-auto -mt-20 md:-mt-56 sm:-mt-40">
          <div className=" w-11/12  rounded-xl sm:w-2/3">
            <div className=" border rounded-xl border-gray-300 rounded-b-none rounded-xl">
              <div className=" box-content rounded-xl w-full h-auto bg-white">
                {jobs.map((job) => (
                  <Joblisting
                    key={job.slug}
                    slug={job.slug}
                    title={job.jobListing.positionTitle}
                    salary={job.jobListing.salary}
                    location={job.jobListing.location}
                    type={job.jobListing.type}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        <div className="relative  w-full">
          <svg
            className="fill-royal text-gray-100"
            viewBox="0 0 900 45"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m0 4 50 3c50 3 150 9 250 13.7 100 4.6 200 8 300 4.3S800 10.7 850 5.3L900 0v45H0V4Z"
              fillRule="#fff"
            ></path>
          </svg>
        </div>
        <div className="w-full bg-royal">
          <div className="relative h-auto  pb-16 mx-auto max-w-6xl flex flex-col items-center">
            <div className="flex items-center text-gray-400 transform lg:-mt-4 mb-4 font-medium uppercase py-5 font-medium text-xs sm:px-0 px-5 text-center sm:text-sm rounded-xl leading-tight">
              <span>Our process</span>
            </div>
            <div className="grid lg:max-w-3xl w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-y-12 lg:gap-y-5 gap-x-12 sm:gap-x-5 lg:grid-cols-7 lg:ml-10 text-gray-400">
              <div className="relative w-auto text-center flex justify-center">
                <svg
                  className="h-10 w-auto fill-red-400"
                  viewBox="0 0 344 409"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M287.611 216.134c-.183-33.512 14.988-58.805 45.696-77.432-17.182-24.563-43.137-38.077-77.409-40.725-32.444-2.557-67.904 18.901-80.882 18.901-13.709 0-45.148-17.988-69.824-17.988C54.196 99.712 0 139.524 0 220.517c0 23.923 4.387 48.638 13.16 74.144 11.699 33.512 53.922 115.692 97.973 114.322 23.03-.548 39.298-16.345 69.275-16.345 29.063 0 44.142 16.345 69.824 16.345 44.416-.64 82.618-75.332 93.768-108.934-59.588-28.033-56.389-82.18-56.389-83.915ZM235.883 66.2C260.833 36.616 258.548 9.679 257.817 0c-22.025 1.278-47.524 14.975-62.055 31.868-15.994 18.08-25.407 40.45-23.396 65.652 23.853 1.827 45.604-10.41 63.517-31.32Z"
                    fillRule="nonzero"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="w-full py-12 bg-white sm:py-20"
        x-data="{ page: 1, total_pages: 3 }"
      >
        <div className="flex flex-col items-center justify-center mx-auto xl:flex-row max-w-7xl">
          <div className="relative flex flex-col items-start justify-center w-full h-full max-w-2xl px-6 mx-auto xl:max-w-none xl:w-2/5">
            <h2 className="text-3xl font-normal leading-none text-gray-900 sm:w-4/5 sm:text-6xl text-3">
              New stories from the team.
            </h2>
            <div className="w-20 h-1 mt-3 ml-1 bg-indigo-600 rounded-full"></div>
            <div className="relative flex mt-6 space-x-2">
              <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  ></path>
                </svg>
              </div>
              <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-600">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
          <div className="box-content relative flex items-center w-full h-auto max-w-2xl py-5 mx-auto overflow-hidden xl:w-3/5 rounded-xl bg-gradient-to-r from-transparent via-transparent to-gray-100">
            <div className="flex px-6 space-x-6 transition duration-500 ease-out transform xl:pl-6 h-94">
              <div className="flex flex-col flex-shrink-0 w-1/2 overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <a href="#_">
                    <img
                      className="object-cover w-full h-32 sm:h-48"
                      src="https://cdn.devdojo.com/images/march2021/slide-1.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="inline-block py-1 pl-10 pr-4 mb-2 -ml-10 text-xs font-medium leading-5 text-white transform -translate-y-2 bg-indigo-600 rounded">
                      <a href="#_" className="hover:underline" rel="category">
                        Design
                      </a>
                    </p>
                    <a href="#_" className="block">
                      <span className="mt-2 text-base font-semibold leading-tight leading-7 text-gray-900 sm:text-xl">
                        How to build the perfect landing page.
                      </span>
                      <span className="block mt-3 text-xs leading-6 text-gray-500 sm:text-sm">
                        If you want to learn the tips and tricks to building the
                        perfect landing page you have got to follow these
                        proven...
                      </span>
                    </a>
                  </div>
                  <div className="items-center hidden mt-6 sm:flex">
                    <div className="relative">
                      <p className="text-xs font-medium leading-5 text-gray-500">
                        <a href="#_" className="hover:underline">
                          John Doe
                        </a>
                        <span className="mx-1">·</span>
                        <time className="ml-1">January 21, 2022</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col flex-shrink-0 w-1/2 overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <a href="#_">
                    <img
                      className="object-cover w-full h-32 sm:h-48"
                      src="https://cdn.devdojo.com/images/march2021/slide-2.jpg"
                      alt=""
                    />
                  </a>
                </div>
                <div className="flex flex-col justify-between flex-1 p-6 bg-white">
                  <div className="flex-1">
                    <p className="inline-block py-1 pl-10 pr-4 mb-2 -ml-10 text-xs font-medium leading-5 text-white transform -translate-y-2 bg-indigo-600 rounded">
                      <a href="#_" className="hover:underline" rel="category">
                        Design
                      </a>
                    </p>
                    <a href="#_" className="block">
                      <span className="mt-2 text-base font-semibold leading-tight leading-7 text-gray-900 sm:text-xl">
                        How to build the perfect landing page.
                      </span>
                      <span className="block mt-3 text-xs leading-6 text-gray-500 sm:text-sm">
                        If you want to learn the tips and tricks to building the
                        perfect landing page you have got to follow these
                        proven...
                      </span>
                    </a>
                  </div>
                  <div className="items-center hidden mt-6 sm:flex">
                    <div className="relative">
                      <p className="text-xs font-medium leading-5 text-gray-500">
                        <a href="#_" className="hover:underline">
                          John Doe
                        </a>
                        <span className="mx-1">·</span>
                        <time className="ml-1">January 21, 2022</time>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className=" pointer-cursor relative  max-w-7xl mx-auto   ">
        <Container>
          <Bcomp1 posts={post} />
        </Container>
      </div> */}
    </>
  );
}

//  <Modal open={isOpen} onClose={() => setIsOpen(false)}>
//    Fancy Mo dal
//  </Modal>;

// export async function getStaticProps() {
//   const { data: post } = await client.query({
//     query: BLOG_COMP,
//   });

//   return {
//     props: {
//       posts: post.posts.nodes,
//     },
//   };
// }

export async function getStaticProps() {
  const { data: job } = await client.query({
    query: gql`
      query AllJobs {
        jobs(first: 4, where: { orderby: { field: DATE, order: DESC } }) {
          nodes {
            slug
            jobListing {
              type
              salary
              responsibilities
              positionTitle
              fieldGroupName
              candidateRequirements
              benefits
              location
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      jobs: job.jobs.nodes,
    },
  };
}
