import { gql } from "@apollo/client";
import client from "../../lib/apollo";
import Joblayout from "../../src/componants/Layout/Joblayout";
import Modal from "../../src/componants/Modal/Modal";
import { myContext } from "../../Context/Context";
// import Form from "../../src/componants/Modal/Form";
import { useRouter } from "next/router";
import { myContextform } from "../../Context/Contextform";
export default function PostPage({ job }) {
  const { showModal, setShowModal } = myContext();
  const { form, setForm } = myContextform();
  console.log(form);
  const joblist = job;
  const Router = useRouter();
  if (Router.isFallback) {
    return <h1>Loading Jobs</h1>;
  }

  return (
    <Joblayout
      Herotitle={joblist.jobListing.positionTitle}
      joblocation={joblist.jobListing.location}
      jobsalary={joblist.jobListing.salary}
      type={joblist.jobListing.type}
    >
      <div className="rounded-xl bg-white p-8 text-black ">
        <div className="">
          <button
            className="learn-more rounded-full bg-gray-200 bg-opacity-50"
            onClick={() => {
              setShowModal(true, setForm("Form"));
            }}
          >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Apply</span>
          </button>
        </div>
      </div>

      <div className="rounded-xl bg-white p-8 text-black w- ">
        <div className="max-w-9xl  bg-white w-full rounded-lg shadow-xl ">
          <div className="p-4 border-b ">
            <h2 className="text-2xl ">Job description</h2>
            <p className="text-sm text-gray-500">
              position desceiption and information.
            </p>
          </div>
          <div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Application for</p>
              <div className="flex">
                <div className=" flex  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {joblist.jobListing.positionTitle}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Location</p>

              <div className="flex">
                <div className=" flex  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {joblist.jobListing.location}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Salary</p>
              <div className="flex">
                <div className=" flex  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {joblist.jobListing.salary}
                </div>
              </div>
            </div>

            <div className=" hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600 font-bold">About</p>
              <div
                dangerouslySetInnerHTML={{
                  __html: joblist.jobListing.responsibilities,
                }}
                className="py-2"
              ></div>
            </div>
          </div>
          <div className=" hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600 font-bold">Requirements</p>
            <div
              dangerouslySetInnerHTML={{
                __html: joblist.jobListing.candidateRequirements,
              }}
              className="py-2"
            ></div>
          </div>
          <div className=" hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600 font-bold">Benefits</p>
            <div
              dangerouslySetInnerHTML={{
                __html: joblist.jobListing.benefits,
              }}
              className="py-2"
            />
          </div>
          <div />
        </div>

        <div className="p-4">
          <button
            className="learn-more rounded-full bg-gray-200 bg-opacity-50"
            onClick={() => {
              setShowModal(true, setForm("Form1"));
            }}
          >
            <span className="circle" aria-hidden="true">
              <span className="icon arrow"></span>
            </span>
            <span className="button-text">Apply</span>
          </button>
        </div>
      </div>
      <div>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          {joblist.jobListing.positionTitle}
          {joblist.jobListing.type}
          {joblist.jobListing.location}
          {joblist.jobListing.salary}
        </Modal>
      </div>
    </Joblayout>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
      query JobsBySlug {
        jobs(first: 5) {
          nodes {
            slug
          }
        }
      }
    `,
  });

  return {
    paths: result.data.jobs.nodes.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: true,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetJobsBySlug($slug: String!) {
        jobBy(slug: $slug) {
          jobListing {
            benefits
            candidateRequirements
            fieldGroupName
            location
            positionTitle
            responsibilities
            salary
            type
            intro
          }
        }
      }
    `,

    variables: { slug },
  });

  return {
    props: {
      job: result.data.jobBy,
    },
    revalidate: 10,
  };
}

// <div>
//   <Modal open={showModal} onClose={() => setShowModal(false)}></Modal>
// </div>;

//  <div className="py-2">
//    <button className="learn-more rounded-full bg-blue-800 bg-opacity-60">
//      <span className="circle" aria-hidden="true">
//        <span className="icon arrow"></span>
//      </span>
//      <span className="button-text">Share </span>
//    </button>
//  </div>;
