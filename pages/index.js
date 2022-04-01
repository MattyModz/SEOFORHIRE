// import Bcomp1 from "../src/componants/Blog/Blogcomp1";
// import { BLOG_COMP } from "../lib/wordpress/api";
import Link from "next/link";
import Modal from "react-modal";
import Joblisting from "../src/componants/Hero/jobslist";

import client from "../lib/apollo";
// import Pof from "../src/componants/sections/pof";
import { gql } from "@apollo/client";
// import Productcard from "../src/componants/Prodcard";

export default function Home({ jobs }) {
  return (
    <>
      <section className="w-full p-2">
        <div className=" w-full  border-4 flex flex-col items-center px-8 pt-12 pb-24 mx-auto sm:rounded-lg bg-gradient-to-br from-[#1A0976] via-[#100750] to-black sm:pt-20 sm:pb-32 md:pb-48 lg:pb-56 xl:pb-64 sm:px-0">
          <div className="w-full mb-5 sm:w-11/12 lg:w-2/3 lg:mb-10">
            <h1 className="pt-5 text-2xl font-bold text-left text-white md:pt-8 sm:text-center lg:pt-20 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              Your go to choice for help with <br className="hidden sm:block" />{" "}
              SEO recruitment
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
        <div className="container   flex justify-center mx-auto -mt-20 md:-mt-56 sm:-mt-40">
          <div className="relative w-11/12  sm:w-2/3">
            <div className="overflow-hidden border  border-gray-300 rounded-b-none rounded-xl">
              <div className=" box-content  w-full h-auto bg-gray-100">
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
      <div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

      {/* <div className=" pointer-cursor relative  max-w-7xl mx-auto   ">
        <Container>
          <Bcomp1 posts={post} />
        </Container>
      </div> */}
    </>
  );
}

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

//  <Container className="">
//    <Charting />
//  </Container>;

export async function getStaticProps() {
  const { data: job } = await client.query({
    query: gql`
      query AllJobs {
        jobs(first: 2, where: { orderby: { field: DATE, order: DESC } }) {
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
