import { useLazyQuery } from "@apollo/client";
import { useEffect, useState } from "react";

import { gql } from "@apollo/client";

const GET_POSTS = gql`
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
/**
 * First set the posts data and pageInfo received from server side,
 * as initial postsData and pageInfo, so that
 * it sever side posts can be fetched, and the new endcursor( contained in pageInfo )
 * can be sent to get the next set of posts.
 */

const LoadMorePosts = ({ posts }) => {
  const [postsData, setPostsData] = useState(posts?.nodes ?? []);
  const [pageInfo, setPageInfo] = useState(posts?.pageInfo);

  const [error, setError] = useState(null);
  console.log(postsData);
  return <></>;
};
//   /**
//    * If value of 'posts' passed to this component changes, set new post data and page info.
//    */

//    useEffect(() => {
//       setPostsData(posts?.edges);
//       setPageInfo(posts?.pageInfo);
//     }, [posts?.edges]);

//     const setPosts = (posts) => {
//      if (!posts || !posts?.edges || !posts?.pageInfo) {
//          return;
//      }

//     /**
//      * Concat the newly received post from client request to the existing posts, using setPostsData()
//      * and also set the new pageInfo that contains the new endcursor, so that
//      * when user clicks on loadmore again, next set of posts can be fetched again.
//      * Same process if repeated to it gets concatenated everytime to the existing posts array.
//      */

//  const newPosts = postsData.concat(posts?.edges);
// setPostsData(newPosts);
//setPageInfo({ ...posts?.pageInfo });
//};

//const [fetchPosts, { loading }] = useLazyQuery(LOAD_MORE, {
// notifyOnNetworkStatusChange: true,
//onCompleted: (data) => {
/**
        * Call setPosts to concat the new set of posts to existing one and update pageInfo
//        * that contains the cursor and the information about whether we have the next page.
//        */

//       setPosts(data?.posts ?? []);
//     },
//     onError: (error) => {
//       setError(error?.graphQLErrors ?? "");
//     },
//   });

//   /**
//    * Calls fetchPosts
//    *
//    * fetchPosts() makes a client side request with the new endcursor info,
//    * to get next set of posts.
//    *
//    * @param {String} endCursor Endcursor used to fetch the next set of posts.
//    */

//   const loadMoreItems = (endCursor = null) => {
//     let queryVariables = {
//       first: PER_PAGE_FIRST,
//       after: endCursor,
//     };

//     fetchPosts({
//       variables: queryVariables,
//     });
//   };

//   const { endCursor, hasNextPage } = pageInfo || {};

//   return (
//     <div posts={postsData}>
//       {hasNextPage ? (
//         <div className="w-full flex justify-center lg:my-10">
//           {loading ? (
//             <div className="flex justify-center w-full border border-white px-3 py-2 my-8">
//               Loading...
//             </div>
//           ) : (
//             <button
//               className="flex items-center cursor-pointer	bg-gray-100 hover:bg-gray-600 hover:text-white transition-colors duration-500 border border-gray-500 px-4 py-3"
//               onClick={() => loadMoreItems(endCursor)}
//             >
//               Load more
//             </button>
//           )}
//         </div>
//       ) : null}
//       {error && (
//         <div className="w-full flex justify-center my-10">
//           No articles available
//         </div>
//       )}
//     </div>
//   );
// };

export default LoadMorePosts;

//export default function LoadMorePosts() {
// const { data, loading, error, fetchMore } = useQuery(LOAD_MORE, {
//  variables: { first: BATCH_SIZE, after: null },
// notifyOnNetworkStatusChange: true,
//});

//if (error) {
// return <p>Sorry, an error has occured, please reload page.</p>;
// }

//if (!data && loading) {
// return <p>Loading...</p>;
// }

//if (!data?.posts.edges.length) {
// return <p>No posts have been published</p>;
//}

//const posts = data.posts.edges.map((edge) => edge.node);
//const havePosts = Boolean(posts.length);
//const haveMorePosts = Boolean(data?.posts?.pageInfo?.hasNextPage);

//return <p>Load more list</p>;/
//}
