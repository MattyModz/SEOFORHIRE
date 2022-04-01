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
      <div className="rounded-xl p-8 text-black ">
        <h2 className="">Candidate Requirements</h2>
        <br />
        <p>{joblist.jobListing.candidateRequirements}</p>
        <h2>Responsibilities</h2>
        <br />
        <p>{joblist.jobListing.responsibilities}</p>
        <h2>Benefits</h2>
        <br />
        <p>{joblist.jobListing.benefits}</p>
      </div>
      <div>
        <button class="learn-more">
          <span class="circle" aria-hidden="true">
            <span class="icon arrow"></span>
          </span>
          <span class="button-text">Learn More</span>
        </button>
      </div>
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
