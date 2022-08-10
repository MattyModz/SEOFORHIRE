import Image from "next/image";

import {
  getClient,
  sanityClient,
  urlFor,
  usePreviewSubscription,
} from "../../sanity";
import Container from "../../src/componants/container";
import { motion } from "framer-motion";
import PortableText from "react-portable-text";
import { parseISO, format } from "date-fns";
import Link from "next/link";

function filterDataToSingleItem(data, preview) {
  console.log(data);
  if (!Array.isArray(data)) {
    return data;
  }

  if (data.length === 1) {
    return data[0];
  }

  if (preview) {
    return data.find((item) => item._id.startsWith(`drafts.`)) || data[0];
  }

  return data[0];
}

function Post({ data, preview }) {
  const { data: previewData } = usePreviewSubscription(data?.query, {
    params: data?.queryParams ?? {},
    // The hook will return this on first render
    // This is why it's important to fetch *draft* content server-side!
    initialData: data?.post,
    // The passed-down preview context determines whether this function doething
    enabled: preview,
  });

  const post = filterDataToSingleItem(previewData, preview);

  return (
    <main className="p-5 mx-auto bg-body-dark text-white bg-royal">
      <main className="p-5 mx-auto bg-body-dark text-white">
        <motion.div
          className="!pt-0 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0, transition: { duration: 0.35 } }}
          viewport={{ once: true }}
        >
          {" "}
          <Container>
            <div className="max-w-screen-md mx-auto ">
              <div className="text-center text-gray-200 ">SEOForhire</div>

              <h1 className="mt-2 mb-3 text-4xl font-semibold tracking-tight text-center lg:leading-snug text-brand-primary lg:text-6xl text-white">
                {post.title}
              </h1>
            </div>
            <div className="flex justify-center mb-3 space-x-3 text-white ">
              <div className="flex items-center gap-3">
                <div className="relative flex-shrink-0 w-10 h-10">
                  {post?.author.image && (
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={urlFor(post.author.image).url()}
                      alt={post?.author?.name}
                      width={50}
                      height={50}
                    />
                  )}
                </div>
              </div>

              <div className="flex items-center space-x-2 text-sm">
                <time
                  className="text-gray-200 dark:text-gray-400"
                  dateTime={post?.publishedAt || post._createdAt}
                >
                  {format(
                    parseISO(post?.publishedAt || post._createdAt),
                    "MMMM dd, yyyy"
                  )}
                </time>
                <span>· {post.estReadingTime || "5"} min read</span>
              </div>
            </div>
          </Container>
        </motion.div>

        {/* {post?.mainImage && <MainImage image={post.mainImage} />} */}
        <Container>
          <article className="max-w-screen-md mx-auto py-12">
            <motion.div
              className="mx-auto my-3 text-white prose prose-base dark:prose-invert prose-a:text-blue-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0, transition: { duration: 0.55 } }}
              viewport={{ once: true }}
            >
              <div className="relative mb-3  z-0 max-w-screen-lg mx-auto overflow-hidden lg:rounded-lg aspect-video">
                {post.mainImage && (
                  <Image
                    src={urlFor(post.mainImage).url()}
                    alt=""
                    width={1200}
                    height={700}
                    className="rounded-xl"
                  />
                )}
              </div>
              {post.body && (
                <PortableText
                  content={post.body}
                  dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                  serializers={{
                    h1: (props) => (
                      <h1 className="text-6xl font-bold my-5" {...props} />
                    ),
                    h2: (props) => (
                      <h2 className="text-4xl font-bold my-5" {...props} />
                    ),
                    h3: (props) => (
                      <h2 className="text-2xl font-bold my-5" {...props} />
                    ),
                    li: ({ children }) => (
                      <li className="ml-4 list-disc text-white">
                        {" "}
                        {children}{" "}
                      </li>
                    ),
                    link: ({ href, children }) => (
                      <a href={href} className="text-white hover:underline">
                        {children}
                      </a>
                    ),
                  }}
                />
              )}
            </motion.div>
            <div className="flex justify-center mt-7 mb-7">
              <Link href="/blog">
                <a className="px-5 py-2 text-sm text-white rounded-full dark:text-blue-500 bg-brand-secondary/20 ">
                  ← View all posts
                </a>
              </Link>
            </div>
            {/* {post.author && <AuthorCard author={post.author} />} */}
          </article>
        </Container>
      </main>
    </main>
  );
}

export default Post;

export const getStaticPaths = async () => {
  const query = `*[_type == "post"]{
    _id,
    slug {
        current
    }
}`;

  const posts = await sanityClient.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params, preview = false }) => {
  const query = `*[_type == "post" && slug.current == $slug]{
    _id,
    _createdAt,
    title,
    author-> {
        name,
        image,
    },
 description,
 mainImage,
 slug,
 body
}`;

  const queryParams = { slug: params.slug };

  const data = await getClient(preview).fetch(query, queryParams);

  if (!data) {
    return {
      notFound: true,
    };
  }

  const post = filterDataToSingleItem(data, preview);

  return {
    props: {
      preview,
      data: { post, query, queryParams },
    },
    revalidate: 60,
  };
};

//  urlFor;
