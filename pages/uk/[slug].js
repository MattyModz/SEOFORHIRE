//import client from "../lib/apollo";
import Head from "next/head";
function DataToPage({ data }) {
  console.log(data);
  return (
    <>
      <Head>
        <title className="text-white text-4xl">{data.title}</title>
        <meta name="description" content={data.description} />
      </Head>
      <div>{data.title}</div>
      <div>{data.description}</div>
      <span
        dangerouslySetInnerHTML={{
          __html: data.html,
        }}
      />
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
