import { gql } from "@apollo/client";
import client from "../../lib/apollo";
import Layout from "../../src/componants/Layout/Layout";
import Joblisting from "../../src/componants/Hero/jobslist";

export default function PostPage({ job }) {
  const joblist = job;
  return (
    <Layout Herotitle={joblist.jobListing.positionTitle}>
      <div>
        <Joblisting
          title={joblist.jobListing.positionTitle}
          salary={joblist.jobListing.salary}
          location={joblist.jobListing.location}
          type={joblist.jobListing.type}
          date={joblist.jobListing.date}
        />
      </div>
      <div className="text-black ">
        <p>{joblist.jobListing.candidateRequirements}</p>
        <p>{joblist.jobListing.responsibilities}</p>
        <p>{joblist.jobListing.benefits}</p>
      </div>
    </Layout>
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
