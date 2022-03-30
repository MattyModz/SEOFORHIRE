import Bcomp1 from "../src/componants/Blog/Blogcomp1";
import { BLOG_COMP } from "../lib/wordpress/api";
import client from "../lib/apollo";
// import fetcher from "../lib/wordpress/fetcher";

import Container from "../src/componants/container";

// import Pof from "../src/componants/sections/pof";
// import { gql } from "@apollo/client";
// import Productcard from "../src/componants/Prodcard";

export default function Home({ posts }) {
  const post = posts;

  return (
    <div className=" ">
      <section id="home" className=""></section>

      <div className=" pointer-cursor relative max-w-7xl mx-auto   ">
        <Container>
          <Bcomp1 posts={post} />
        </Container>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const { data: post } = await client.query({
    query: BLOG_COMP,
  });

  return {
    props: {
      posts: post.posts.nodes,
    },
  };
}

//  <Container className="">
//    <Charting />
//  </Container>;
