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

function Policys({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.policy,
    // The passed-down preview context determines whether this function does anything
    enabled: preview,
  });

  const policy = filterDataToSingleItem(previewData, preview);

  return (
    <main className=" mx-auto bg-royal text-white h-screen">
      {/* {preview && <Link href="/api/exit-preview">Preview Mode Activated!</Link>} */}
      <article className="container flex justify-center font-inter text-2xl lg:text-6xl py-8">
        {policy?.title && <h1>{policy.title}</h1>}
      </article>
      <PortableText
        className="p-24 container"
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        content={policy?.body}
        serializers={{
          h1: (props) => <h1 className="text-6xl font-bold my-5" {...props} />,
          h2: (props) => <h2 className="text-4xl font-bold my-5" {...props} />,
          h3: (props) => <h2 className="text-3xl font-bold my-5" {...props} />,
          li: ({ children }) => (
            <li className="ml-4 list-disc"> {children} </li>
          ),
          link: ({ href, children }) => (
            <a href={href} className="text-blue-400 hover:underline">
              {children}
            </a>
          ),
        }}
      />
    </main>
  );
}

export default Policys;

export const getStaticPaths = async () => {
  const query = `*[_type == "policy"]{
    _id,
    slug {
        current
    }
}`;

  const policys = await sanityClient.fetch(query);

  const paths = policys.map((policy) => ({
    params: {
      slug: policy.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const query = `*[_type == "policy" && slug.current == $slug]{
 _id,

 title,
 body,
 slug,

}`;

  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const policy = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { policy, query, queryParams },
    },
    revalidate: 60,
  };
};
