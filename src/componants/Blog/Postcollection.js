/* This example requires Tailwind CSS v2.0+ */
import Blogindex from "../Blog/Indexsingle";
import Container from "../container";
export default function Postcollection({}) {
  return (
    <>
      <Container>
        <div className="flex mt-12 max-w-lg mx-auto grid lg:grid-cols-3 lg:max-w-none pointer-cursor">
          <Blogindex />
          <Blogindex />
          <Blogindex />
        </div>
      </Container>
    </>
  );
}

// <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-blue-400 pb-2 to-blue-500">
//       Keep upto date

// <Blogindex
//           key={post.title}
//           title={post.title}
//           description={post.excerpt}
//           imageUrl={post.featuredImage.node.sourceUrl}
//           slug={post.slug}
//           Authorimg={post.author.node.avatar.url}
//           Authorname={post.author.node.name}
//           date={post.date}
//         />
//       ))}
