// import Layout from "../src/componants/Layout/Layout";
import client from "../lib/apollo";

import { gql } from "@apollo/client";
export default function Candidate({ applicant }) {
  const app = applicant;
  console.log(app);
  return (
    <>
      {applicant.map((app) => {
        return (
          <div key={app.id}>
            <section className=" place-items-center py-8  rounded-xl ">
              <div className="max-w-lg lg:max-w-none mx-auto lg:mx-0">
                <div className="px-10 mx-auto max-w-7xl md:px-16 text-2xl">
                  <div className="max-w-3xl mx-auto bg-royal rounded-xl  text-white  b-10 md:mb-16">
                    {app.candidate.jobTitle}
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </>
  );
}

export async function getStaticProps() {
  const { data: app } = await client.query({
    query: gql`
      query Getcandidates {
        candiates(first: 10) {
          nodes {
            id

            candidate {
              additionalInfo
              availability
              jobTitle
              locaiton
              name
              yearsOfExperience
              specialism
              salary
              portfolio
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      applicant: app.candiates.nodes,
    },
  };
}
