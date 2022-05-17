import { gql } from "@apollo/client";
import client from "../../lib/apollo";
import Candidatelayout from "../../src/componants/Layout/candidatelayout";
import Modal from "../../src/componants/Modal/Modal";
import { myContext } from "../../Context/Context";
import { myContextform } from "../../Context/Contextform";

import Formone from "../../src/componants/Modal/Form1";
export default function CandidatePage({ app }) {
  const { showModal, setShowModal } = myContext();
  const { form, setForm } = myContextform();
  console.log(app);
  const application = app;

  return (
    <Candidatelayout
      Herotitle={application.candidate.jobTitle}
      joblocation={application.candidate.locaiton}
      specialism={application.candidate.specialism}
      experience={application.candidate.yearsOfExperience}
      salary={application.candidate.salary}
    >
      <div className="rounded-xl bg-white p-8 text-black ">
        <div class="max-w-4xl  bg-white w-full rounded-lg shadow-xl ">
          <div class="p-4 border-b py-8">
            <h2 class="text-2xl ">Applicant Information</h2>
            <p class="text-sm text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p class="text-gray-600">Job ID</p>
              <div className="flex">
                <div
                  className=" flex  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold "
                  dangerouslySetInnerHTML={{
                    __html: application.candidate.id,
                  }}
                />
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p class="text-gray-600">Application for</p>
              <div className="flex">
                <div
                  className=" flex  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold "
                  dangerouslySetInnerHTML={{
                    __html: application.candidate.jobTitle,
                  }}
                />
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p class="text-gray-600">Location</p>

              <div className="flex">
                <div
                  className=" flex  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold "
                  dangerouslySetInnerHTML={{
                    __html: application.candidate.locaiton,
                  }}
                />
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p class="text-gray-600">Years of experience</p>
              <div className="flex">
                <div
                  className=" flex  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-5 py-1.5   text-white font-bold "
                  dangerouslySetInnerHTML={{
                    __html: application.candidate.yearsOfExperience,
                  }}
                />
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p class="text-gray-600">Salary</p>
              <div className="flex">
                <div
                  className=" flex  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold "
                  dangerouslySetInnerHTML={{
                    __html: application.candidate.salary,
                  }}
                />
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p class="text-gray-600">specialism</p>
              <div className="flex">
                <div
                  className=" flex  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold "
                  dangerouslySetInnerHTML={{
                    __html: application.candidate.specialism,
                  }}
                />
              </div>
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p class="text-gray-600">About</p>
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: application.candidate.additionalInfo,
                }}
              />
            </div>
            <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p class="text-gray-600">Portfolio</p>
              <div
                className=""
                dangerouslySetInnerHTML={{
                  __html: application.candidate.portfolio,
                }}
              />
            </div>
            <div className="p-4">
              <button
                className="learn-more rounded-full bg-gray-200 bg-opacity-50"
                onClick={() => {
                  setShowModal(true, setForm(<Formone />));
                }}
              >
                <span className="circle" aria-hidden="true">
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Hire Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          {application.candidate.jobTitle}
          {application.candidate.yearsOfExperience}
          {application.candidate.locaiton}
          {application.candidate.salary}
        </Modal>
      </div>
    </Candidatelayout>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
      query getslugs {
        candiates(first: 10) {
          nodes {
            slug
          }
        }
      }
    `,
  });
  console.log(result);
  return {
    paths: result.data.candiates.nodes.map(({ slug }) => {
      return {
        params: { slug },
      };
    }),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  console.log(params);
  const { slug } = params;
  const result = await client.query({
    query: gql`
      query GetCandBySlug($slug: String!) {
        candidateBy(slug: $slug) {
          candidate {
            jobTitle
            additionalInfo
            availability
            jobTitle
            locaiton
            name
            yearsOfExperience
            specialism
            salary
            portfolio
            id
          }
        }
      }
    `,

    variables: { slug },
  });

  return {
    props: {
      app: result.data.candidateBy,
    },
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

// <div class="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
//             <p class="text-gray-600">Attachments</p>
//             <div class="space-y-2">
//               <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
//                 <div class="space-x-2 truncate">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     class="fill-current inline text-gray-500"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
//                   </svg>
//                   <span>resume_for_manager.pdf</span>
//                 </div>
//                 <a href="#" class="text-purple-700 hover:underline">
//                   Download
//                 </a>
//               </div>

//               <div class="border-2 flex items-center p-2 rounded justify-between space-x-2">
//                 <div class="space-x-2 truncate">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     class="fill-current inline text-gray-500"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
//                   </svg>
//                   <span>resume_for_manager.pdf</span>
//                 </div>
//                 <a href="#" class="text-purple-700 hover:underline">
//                   Download
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
