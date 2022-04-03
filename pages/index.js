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

          <div className="absolute w-full   relative  xl:w-1/2  ">
            <div className="circlecclip  text-white h-full">
              <div className="w-full ">
                <Verticlemarquee />
              </div>
              <div className="opacity-60">
                <Verticlemarquee />
              </div>
              <div className="opacity-40">
                <Verticlemarquee />
              </div>
              <h1 className="text-2xl relative z10 relative text-white -mt-20 md:-mt-40 sm:-mt-40">
                hello
              </h1>
            </div>
          </div>
        </div>

        <div className="container rounded-xl flex justify-center mx-auto -mt-20 md:-mt-56 sm:-mt-40   ">
          <div className=" w-11/12  rounded-xl sm:w-2/3">
            <div className=" border rounded-xl  rounded-xl">
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
