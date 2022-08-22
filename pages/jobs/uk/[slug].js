import Head from "next/head";

import Avgsalary from "../../../src/componants/Programatic/landing/avgsalary";
// import Joblisting from "../src/componants/Hero/jobslist";

import Container from "../../../src/componants/container";
import Apply from "../../../src/componants/Programatic/landing/apply";
// import Chart from "../src/componants/Programatic/chart";
import Authorcard from "../../../src/componants/Blog/authorcard";
import Chart from "../../../src/componants/Programatic/landing/chart";

import Social from "../../../src/componants/Programatic/landing/social";
function DataToPage({ data, salary }) {
  console.log(data);
  console.log(salary);
  return (
    <>
      <Head>
        <title className="text-white  text-4xl ">
          Seo jobs in {data.title}
        </title>
        <meta name="description" content={data.description} />
      </Head>

      <section className=" bg-gray-50">
        <Avgsalary location={data.title} Averagesalary={"£60,000"} />
        <div className="text-black -mt-40 ">
          <Container>
            <div className="lg:flex p-8">
              <div className=" lg:w-2/3 text-black lg:px-4 py-8">
                {" "}
                <Chart location={data.title} />
                <div className="sm:block hidden py-4 ">
                  The average <span className="font-bold">SEO</span> salary in
                  the United Kingdom is{" "}
                  <span className="font-bold">£32,500 </span>
                  per year or <span className="font-bold">£16.67 </span> per
                  hour. Entry level positions start at{" "}
                  <span className="font-bold">£27,000 </span> per year while
                  most experienced workers make up to{" "}
                  <span className="font-bold">£45,000 </span> per year.
                </div>
                <span
                  className="text-black "
                  dangerouslySetInnerHTML={{
                    __html: data.html,
                  }}
                />
              </div>
              <div className="sm:block hidden absolute h-screen">
                <div className=" relative ">
                  {" "}
                  <Social />
                </div>
              </div>
              <div className="lg:w-1/3 text-white lg:p-8 -mt-5 ">
                {" "}
                <div className=" lg:p-8 rounded-xl">
                  <Container>
                    <Apply
                      key="test"
                      slug="test"
                      title="SEO Manager"
                      salary="£60k"
                      location={data.title}
                      term="test"
                    />
                    <Apply
                      key="test"
                      slug="test"
                      title="SEO Consultant"
                      salary="£50k"
                      location={data.title}
                      term="test"
                    />
                    <Authorcard />
                  </Container>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>
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
