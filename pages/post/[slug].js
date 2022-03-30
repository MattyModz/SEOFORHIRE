import fetcher from "../../lib/wordpress/fetcher";
import { useRouter } from "next/router";
import { GET_ALL_POSTS_WITH_SLUG, POST_BY_SLUG } from "../../lib/wordpress/api";
import PostHeader from "../../src/componants/Blog/Post-Head";
import Container from "../../src/componants/container";
import PostBody from "../../src/componants/Blog/Post-body";
const Post = ({ postData }) => {
  const blogPost = postData.data.post;
  const router = useRouter();
  console.log(blogPost);

  if (!router.isFallback && !blogPost?.slug) {
    return <div statusCode={404} />;
  }

  return (
    <div className="bg-body-dark">
      <Container>
        {router.isFallback ? (
          <div>Loading…</div>
        ) : (
          <PostHeader
            title={blogPost.title}
            coverImage={blogPost.featuredImage?.node.sourceUrl}
            date={blogPost.date}
            author={blogPost.author.node.name}
            authorimg={blogPost.author.node.avatar.url}
          />
        )}
        <PostBody content={blogPost.content} />
      </Container>
    </div>
  );
};

export default Post;

// Builds all slugs on build time

export async function getStaticPaths() {
  const response = await fetcher(GET_ALL_POSTS_WITH_SLUG);
  const allposts = await response.data.posts.nodes;

  return {
    paths: allposts.map((post) => `/post/${post.slug}`) || [],
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const variables = {
    id: params.slug,
    idType: "SLUG",
  };

  const data = await fetcher(POST_BY_SLUG, { variables });
  return {
    props: {
      postData: data,
    },
  };
}
