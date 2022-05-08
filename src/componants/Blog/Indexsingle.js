import Image from "next/image";
import Link from "next/link";
//import Avatar from "./Avatar";

export default function Blogindex({}) {
  return (
    <div class="max-w-lg mx-auto">
      <div class="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
        <a href="#">
          <img
            class="rounded-t-lg"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5 class="text-gray-900 font-bold text-2xl tracking-tight mb-2">
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="font-normal text-gray-700 mb-3">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            class="text-white bg-royal hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center"
            href="#"
          >
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}

{
  /* // <div className="p-1 flex items-center text-white">
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
// } */
}
