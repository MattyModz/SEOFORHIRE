import { getClient, sanityClient, usePreviewSubscription } from "../../sanity";
import Joblayout from "../../src/componants/Layout/Joblayout";
import Modal from "../../src/componants/Modal/Modal";
import { myContext } from "../../Context/Context";
// import Form from "../../src/componants/Modal/Form";
import { useRouter } from "next/router";
import { myContextform } from "../../Context/Contextform";
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

function PostPage({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.job,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  const { showModal, setShowModal } = myContext();
  const { setForm } = myContextform();
  console.log(data);
  const Router = useRouter();
  if (Router.isFallback) {
    return <h1>Loading Jobs</h1>;
  }

  const job = filterDataToSingleItem(previewData, preview);

  return (
    <Joblayout
      Herotitle={job.title}
      joblocation={job.location}
      jobsalary={job.salary}
      term={job.term}
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
                <div className="  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {job.title}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Location</p>

              <div className="flex">
                <div className="   items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {job.location}
                </div>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600">Salary</p>
              <div className="flex">
                <div className="  items-center text-sm  -ml-2 bg-royal bg-opacity-90 flex rounded-full px-3 py-1.5   text-white font-bold ">
                  {job.salary}
                </div>
              </div>
            </div>

            <div className=" hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
              <p className="text-gray-600 font-bold">About</p>
              {job.about && (
                <PortableText
                  content={job.about}
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
          </div>
          <div className=" hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600 font-bold">Requirements</p>
            {job.requirments && (
              <PortableText
                content={job.requirments}
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
                    <li className="ml-4 list-disc text-white"> {children} </li>
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
          <div className=" hover:bg-gray-50 md:space-y-0 space-y-1 p-4 border-b">
            <p className="text-gray-600 font-bold">Benefits</p>
            {job.benefits && (
              <PortableText
                content={job.benefits}
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
                    <li className="ml-4 list-disc text-white"> {children} </li>
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
          {job.title}
          {job.term}
          {job.location}
          {job.salary}
        </Modal>
      </div>
    </Joblayout>
  );
}

export default PostPage;

export const getStaticPaths = async () => {
  const query = `*[_type == "job"]{
    _id,
    slug {
        current
    }
}`;

  const jobs = await sanityClient.fetch(query);

  const paths = jobs.map((job) => ({
    params: {
      slug: job.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const query = `*[_type == "job" && slug.current == $slug]{
 _id,
 location,
 title,
 salary,
 slug,
 term,
 about,
requirments,
 benefits,
}`;

  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const job = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { job, query, queryParams },
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
