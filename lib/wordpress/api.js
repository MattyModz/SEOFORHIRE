//  grab first 20 posts.
import { gql } from "@apollo/client";

export const ALL_POSTS = gql`
  query Allposts {
    posts(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        id
        slug
        date
        title
        excerpt
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

//  get all the slugs for static paths / static generation

export const GET_ALL_POSTS_WITH_SLUG = `
{
  posts(first: 10000){
    nodes{
      slug
    }
  }
}`;

// query NewQuery {
//   jobs(first: 10) {
//     nodes {
//       slug
//     }
//   }
// }

//   post by a slug, so we can display to user

export const POST_BY_SLUG = `query PostBySlug ($id: ID!, $idType:PostIdType!){
  post(id: $id, idType: $idType) {
    title
    slug
    date
    content
      author {
        node {
          name
          avatar {
            url
          }
        }
      }
    featuredImage {
      node {
        sourceUrl
      }
    }
  }
}
`;

export const BLOG_COMP = gql`
  query Blog {
    posts(first: 3, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        slug
        title
        excerpt
        date
        id
        author {
          node {
            name
            avatar {
              url
            }
          }
        }

        featuredImage {
          node {
            sourceUrl
          }
        }
      }
    }
  }
`;

export const GET_POSTS = gql`
  query GET_LOAD_MORE_NEWS($first: Int, $after: String) {
    posts: posts(first: $first, after: $after) {
      edges {
        node {
          id
          date
          title
          excerpt
          slug
          author {
            node {
              name
              avatar {
                url
              }
            }
          }
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
        cursor
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export const ALL_JOBS = gql`
  query AllJobs {
    jobs(first: 10, where: { orderby: { field: DATE, order: DESC } }) {
      nodes {
        jobListing {
          type
          salary
          responsibilities
          positionTitle
          fieldGroupName
          candidateRequirements
          benefits
          location
        }
      }
    }
  }
`;
