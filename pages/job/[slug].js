import { gql } from "@apollo/client";
import client from "../../lib/apollo";
import Joblayout from "../../src/componants/Layout/Joblayout";

export default function PostPage({ job }) {
  const joblist = job;
  return (
    <Joblayout
      Herotitle={joblist.jobListing.positionTitle}
      joblocation={joblist.jobListing.location}
      jobsalary={joblist.jobListing.salary}
      type={joblist.jobListing.type}
    >
      <div className="rounded-xl bg-white p-8 text-black ">
        <p className="text-3xl">Candidate Requirements</p>
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html: joblist.jobListing.candidateRequirements,
          }}
        />
        <br />
        <p className="text-3xl">Responsibilities</p>
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html: joblist.jobListing.responsibilities,
          }}
        />
        <br />
        <p className="text-3xl">Benefits</p>
        <br />
        <div
          dangerouslySetInnerHTML={{
            __html: joblist.jobListing.benefits,
          }}
        />
      </div>

      <div>
        <button className="learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">Learn More</span>
        </button>
      </div>
      <button className="learn-more">
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">Apply </span>
      </button>
    </Joblayout>
  );
}

export async function getStaticPaths() {
  const result = await client.query({
    query: gql`
      query JobsBySlug {
        jobs(first: 3) {
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
    fallback: false,
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
  };
}
