import { getClient, sanityClient, usePreviewSubscription } from "../../sanity";
import Candidatelayout from "../../src/componants/Layout/candidatelayout";
import Modal from "../../src/componants/Modal/Modal";
import { myContext } from "../../Context/Context";
import { myContextform } from "../../Context/Contextform";
import { useRouter } from "next/router";
import PortableText from "react-portable-text";
// import Formone from "../../src/componants/Modal/Form1";

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

function CandidatePage({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.candidate,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });
  const { showModal, setShowModal } = myContext();
  const { setForm } = myContextform();

  const Router = useRouter();
  if (Router.isFallback) {
    return <h1>Loading Jobs</h1>;
  }

  const candidate = filterDataToSingleItem(previewData, preview);

  return (
    <Candidatelayout
      Herotitle={candidate.candidaterole}
      joblocation={candidate.location}
      specialism={candidate.specialism}
      experience={candidate.experience}
      salary={candidate.salary}
    >
      <div className="rounded-xl bg-white p-8 text-black w- ">
        <div className="max-w-9xl  bg-white w-full rounded-lg shadow-xl ">
          <div className="p-4 border-b py-8">
            <h2 className="text-2xl ">Applicant Information</h2>
            <p className="text-sm text-gray-500">
              Personal details and application.
            </p>
          </div>
          <div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Job ID</p>
              <div className="flex">
                {" "}
                <div className="  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {candidate.jobid}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Application for</p>
              <div className="flex">
                <div className="  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {candidate.candidaterole}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Location</p>

              <div className="flex">
                {" "}
                <div className="  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {candidate.location}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Years of experience</p>
              <div className="flex">
                {" "}
                <div className="  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {candidate.experience}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Salary</p>
              <div className="flex">
                {" "}
                <div className="  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {candidate.salary}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">specialism</p>
              <div className="flex">
                {" "}
                <div className="  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {candidate.specialism}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">About</p>
              {candidate.about && (
                <PortableText
                  content={candidate.about}
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
                      <h2 className="text-3xl font-bold my-5" {...props} />
                    ),
                    li: ({ children }) => (
                      <li className="ml-4 list-disc text-white">
                        {" "}
                        {children}{" "}
                      </li>
                    ),
                    link: ({ href, children }) => (
                      <a href={href} className="text-white hover:underline">
                        {children}
                      </a>
                    ),
                  }}
                />
              )}
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
                <span className="button-text">Hire Me</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>
        <Modal open={showModal} onClose={() => setShowModal(false)}>
          {candidate.candidaterole}
          {candidate.experience}
          {candidate.location}
          {candidate.salary}
        </Modal>
      </div>
    </Candidatelayout>
  );
}

export default CandidatePage;

export const getStaticPaths = async () => {
  const query = `*[_type == "candidate"]{
    _id,
    slug {
        current
    }
}`;

  const candidates = await sanityClient.fetch(query);

  const paths = candidates.map((candidate) => ({
    params: {
      slug: candidate.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const query = `*[_type == "candidate" && slug.current == $slug]{
    _id,
    candidaterole,
    jobid,

location,
experience,
salary,
specialism,
about,
 slug,
 
}`;

  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const candidate = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { candidate, query, queryParams },
    },
    revalidate: 60,
  };
};

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

// <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4">
//             <p className="text-gray-600">Attachments</p>
//             <div className="space-y-2">
//               <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
//                 <div className="space-x-2 truncate">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="fill-current inline text-gray-500"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
//                   </svg>
//                   <span>resume_for_manager.pdf</span>
//                 </div>
//                 <a href="#" className="text-purple-700 hover:underline">
//                   Download
//                 </a>
//               </div>

//               <div className="border-2 flex items-center p-2 rounded justify-between space-x-2">
//                 <div className="space-x-2 truncate">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="fill-current inline text-gray-500"
//                     width="24"
//                     height="24"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M17 5v12c0 2.757-2.243 5-5 5s-5-2.243-5-5v-12c0-1.654 1.346-3 3-3s3 1.346 3 3v9c0 .551-.449 1-1 1s-1-.449-1-1v-8h-2v8c0 1.657 1.343 3 3 3s3-1.343 3-3v-9c0-2.761-2.239-5-5-5s-5 2.239-5 5v12c0 3.866 3.134 7 7 7s7-3.134 7-7v-12h-2z" />
//                   </svg>
//                   <span>resume_for_manager.pdf</span>
//                 </div>
//                 <a href="#" className="text-purple-700 hover:underline">
//                   Download
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
