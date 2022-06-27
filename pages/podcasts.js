import Layout from "../src/componants/Layout/Layout";

export default function Podcasts() {
  return (
    <Layout Herotitle={"Podcasts"}>
      <section className=" place-items-center py-8 bg-white rounded-xl ">
        <div className="max-w-lg lg:max-w-none mx-auto lg:mx-0">
          <div className="px-10 mx-auto max-w-7xl md:px-16">
            <div className="max-w-3xl mx-auto mb-10 md:mb-16"></div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

// export async function getStaticProps() {
//   // const MY_PLAYLIST = process.env.YOUTUBE_PLAYLIST_ID;
//   // const API_KEY = process.env.YOUTUBE_API_KEY;
//   // const REQUEST_URL = ``;

//   return {
//     props: { results: "test" },
//     revalidate: 10,
//   };
// }
