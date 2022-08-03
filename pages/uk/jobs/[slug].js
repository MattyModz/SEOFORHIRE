import Head from "next/head";
import Joblisting from "../../../src/componants/Hero/jobslist";
function DataToPage({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title className="text-white  text-4xl ">{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <section className="text-center bg-royal text-white font-inter ">
        <div className="text-white font-inter">
          <span
            className="text-white "
            dangerouslySetInnerHTML={{
              __html: data.html,
            }}
          />
        </div>
      </section>

      <div
        id="job"
        className="container rounded-xl py-8 flex justify-center mx-auto   overflow-hidden "
      >
        <div className=" w-11/12  rounded-xl sm:w-2/3">
          <Joblisting
            key={data.title}
            slug={data.title}
            title={data.title}
            salary={data.title}
            location={data.title}
            term={data.title}
          />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://datatopage.com/api/v1/pages/render_html", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer " + process.env.NEXT_PUBLIC_DATA_TO_PAGE_SECRET_KEY,
    },
    body: JSON.stringify({
      page: {
        path: context.resolvedUrl,
      },
    }),
  });

  if (res.status !== 200) {
    return {
      notFound: true,
    };
  }

  const data = await res.json();

  return { props: { data, status: res.status } };
}

export default DataToPage;
