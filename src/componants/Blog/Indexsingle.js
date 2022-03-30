import Image from "next/image";
import Link from "next/link";
//import Avatar from "./Avatar";

export default function Blogindex({
  key,

  blogtitle,
}) {
  return (
    <h3 key={key}>
      <a className=" text-white lg:text-m font-Roboto">{blogtitle}</a>
    </h3>
  );
}

// <div className="p-1 flex items-center text-white">
//  <Avatar className="pl-5" author={blogauthor} authorimg={blogauthorimg} />
//</div>;

//  return (
//     <div>
//       <Image
//         width={800}
//         height={300}
//         src={blogImgsrc}
//         className="object-cover object-center w-full rounded-lg h-72"
//         alt="post image"
//       />
//       <div className="w-full px-6 md:px-0">
//         <h2 className="mt-4 mb-5">
//           <a
//             href="#_"
//             className="text-xl font-bold leading-tight tracking-tight md:text-2xl lg:text-3xl dark:text-gray-100 prata"
//           ></a>
//           <Link href={`/post/${blogurl}`} passHref>
//             <h3>
//               <a className=" text-white lg:text-m font-Roboto">{blogtitle}</a>
//             </h3>
//           </Link>
//         </h2>
//       </div>

//       <p className=" text-white pb-8  lg:text-m my-2">
//         <span dangerouslySetInnerHTML={{ __html: blogexcerpt }} />
//       </p>
//     </div>
//   );
// }
