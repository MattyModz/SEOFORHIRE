//  import fetcher from "../lib/wordpress/fetcher";
import Image from "next/image";
import { GET_POSTS } from "../lib/wordpress/api";
import Link from "next/link";
// import Avatar from "../src/componants/Blog/Avatar";
// import LoadMorePosts from "../src/componants/Blog/loadmoreposts";
import client from "../lib/apollo";
// import Blogindex from "../src/componants/Blog/Indexsingle";
import Layout from "../src/componants/Layout/Layout";
import Container from "../src/componants/container";
const PER_PAGE_FIRST = 5;

//  const blog = ({ allposts }) => {
// const posts = allposts;

export default function blog({ allposts }) {
  const posts = allposts;

  //  Deal with return null in image object.
  return (
    <section className="w-full bg-body-dark">
      <div className="max-w-3xl pb-8 mx-auto ">
        <Layout />
        <a href="#_" className="block" />

        {posts.map((post) => {
          return (
            <div key={post.node.slug}>
              <Container>
                <Image
                  width={800}
                  height={300}
                  src={post.node.featuredImage.node.sourceUrl}
                  className="object-cover object-center w-full md:rounded-xl h-72"
                  alt="post image"
                />

                <div className="w-full px-6 md:px-0">
                  <h2 className="mt-4 mb-5">
                    <a
                      href="#_"
                      className="text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl dark:text-gray-100 prata"
                    >
                      <Link href={`/post/${post.node.slug}`} passHref>
                        <h3>
                          <a className=" text-white  font-Roboto">
                            {post.node.title}
                          </a>
                        </h3>
                      </Link>
                    </a>
                  </h2>
                </div>

                <p className="text-base text-white pb-5  lg:text-lg my-5">
                  <span
                    dangerouslySetInnerHTML={{ __html: post.node.excerpt }}
                  />
                </p>
              </Container>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export async function getStaticProps(context) {
  const { data } = await client.query({
    query: GET_POSTS,
    variables: {
      first: PER_PAGE_FIRST,
      after: null,
    },
  });

  return {
    props: {
      allposts: data.posts.edges,
    },
  };
}

//  export async function getStaticProps() {
// const response = await fetcher(ALL_POSTS);
//  const allposts = response.data.posts.nodes;

// return {
//  props: { allposts },
// revalidate: 1,
//  };
//  }

//  return {
// props: {
//  allposts: data?.posts?.nodes,
//  },
//  };
//  }

//  <Blogindex
//    key={posts.node.slug}
//    blogImgsrc={posts.node.featuredImage.node.sourceUrl}
//    blogauthor={posts.node.author.node.name}
//    blogauthorimg={posts.node.author.node.avatar.url}
//    blogtitle={posts.node.title}
//    blogexcerpt={posts.node.excerpt}
//    blogurl={posts.node.url}
//  />;

//  <LoadMorePosts posts={allposts} />
