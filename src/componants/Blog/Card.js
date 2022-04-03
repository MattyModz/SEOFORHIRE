import Link from "next/link";
import Image from "next/image";
import PostAuthor from "./PostAuthor";
import Date from "../Date";

export default function Singlecard({
  title,
  imageUrl,
  slug,
  description,
  Authorimg,
  Authorname,
  date,
}) {
  return (
    <div
      id="btn-gradient-2"
      className="blogcard pointer-cursor flex flex-col border-solid border-red rounded-lg shadow-lg overflow-hidden "
    >
      <div className="flex-shrink-0">
        <Image
          width={1000}
          height={480}
          className="h-48 w-full object-cover "
          src={imageUrl}
          alt=""
        />
      </div>

      <div className="flex-1  p-6 flex flex-col justify-between">
        <div className="flex-1">
          <Link href={`/post/${slug}`} className="block mt-2">
            <div>
              <p className="text-xl font-semibold text-white">{title}</p>

              <div
                className="mt-3 text-base text-white"
                dangerouslySetInnerHTML={{ __html: description }}
              />
            </div>
          </Link>
        </div>

        <PostAuthor
          Authorimg={Authorimg}
          Authorname={Authorname}
          date={date}
          slug={slug}
        />
      </div>
    </div>
  );
}

//  <p className="text-sm font-medium text-pink-400">
//   <Link href={`/post/${slug}`} passHref className="hover:underline">
//    <div>{title}</div>
//  </Link>
// </p>;

// <section
//   className="w-full py-12 bg-white sm:py-20"
//   x-data="{ page: 1, total_pages: 3 }"
// >
//   <div className="flex flex-col items-center justify-center mx-auto xl:flex-row max-w-7xl">
//     <div className="relative flex flex-col items-start justify-center w-full h-full max-w-2xl px-6 mx-auto xl:max-w-none xl:w-2/5">
//       <h2 className="text-3xl font-normal leading-none text-gray-900 sm:w-4/5 sm:text-6xl text-3">
//         New stories from the team.
//       </h2>
//       <div className="w-20 h-1 mt-3 ml-1 bg-indigo-600 rounded-full"></div>
//       <div className="relative flex mt-6 space-x-2">
//         <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-600">
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M15 19l-7-7 7-7"
//             ></path>
//           </svg>
//         </div>
//         <div className="flex items-center justify-center w-10 h-10 text-white bg-indigo-600 rounded cursor-pointer hover:bg-indigo-600">
//           <svg
//             className="w-5 h-5"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d="M9 5l7 7-7 7"
//             ></path>
//           </svg>
//         </div>
//       </div>
//     </div>
//     <div className="box-content relative flex items-center w-full h-auto max-w-2xl py-5 mx-auto overflow-hidden xl:w-3/5 rounded-xl bg-gradient-to-r from-transparent via-transparent to-gray-100">
//       <div className="flex px-6 space-x-6 transition duration-500 ease-out transform xl:pl-6 h-94">
//         <div className="flex flex-col flex-shrink-0 w-1/2 overflow-hidden rounded-lg shadow-lg">
//           <div className="flex-shrink-0">
//             <a href="#_">
//               <img
//                 className="object-cover w-full h-32 sm:h-48"
//                 src="https://cdn.devdojo.com/images/march2021/slide-1.jpg"
//                 alt=""
//               />
//             </a>
//           </div>
//           <div className="flex flex-col justify-between flex-1 p-6 bg-white">
//             <div className="flex-1">
//               <p className="inline-block py-1 pl-10 pr-4 mb-2 -ml-10 text-xs font-medium leading-5 text-white transform -translate-y-2 bg-indigo-600 rounded">
//                 <a href="#_" className="hover:underline" rel="category">
//                   Design
//                 </a>
//               </p>
//               <a href="#_" className="block">
//                 <span className="mt-2 text-base font-semibold leading-tight leading-7 text-gray-900 sm:text-xl">
//                   How to build the perfect landing page.
//                 </span>
//                 <span className="block mt-3 text-xs leading-6 text-gray-500 sm:text-sm">
//                   If you want to learn the tips and tricks to building the
//                   perfect landing page you have got to follow these proven...
//                 </span>
//               </a>
//             </div>
//             <div className="items-center hidden mt-6 sm:flex">
//               <div className="relative">
//                 <p className="text-xs font-medium leading-5 text-gray-500">
//                   <a href="#_" className="hover:underline">
//                     John Doe
//                   </a>
//                   <span className="mx-1">·</span>
//                   <time className="ml-1">January 21, 2022</time>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="flex flex-col flex-shrink-0 w-1/2 overflow-hidden rounded-lg shadow-lg">
//           <div className="flex-shrink-0">
//             <a href="#_">
//               <img
//                 className="object-cover w-full h-32 sm:h-48"
//                 src="https://cdn.devdojo.com/images/march2021/slide-2.jpg"
//                 alt=""
//               />
//             </a>
//           </div>
//           <div className="flex flex-col justify-between flex-1 p-6 bg-white">
//             <div className="flex-1">
//               <p className="inline-block py-1 pl-10 pr-4 mb-2 -ml-10 text-xs font-medium leading-5 text-white transform -translate-y-2 bg-indigo-600 rounded">
//                 <a href="#_" className="hover:underline" rel="category">
//                   Design
//                 </a>
//               </p>
//               <a href="#_" className="block">
//                 <span className="mt-2 text-base font-semibold leading-tight leading-7 text-gray-900 sm:text-xl">
//                   How to build the perfect landing page.
//                 </span>
//                 <span className="block mt-3 text-xs leading-6 text-gray-500 sm:text-sm">
//                   If you want to learn the tips and tricks to building the
//                   perfect landing page you have got to follow these proven...
//                 </span>
//               </a>
//             </div>
//             <div className="items-center hidden mt-6 sm:flex">
//               <div className="relative">
//                 <p className="text-xs font-medium leading-5 text-gray-500">
//                   <a href="#_" className="hover:underline">
//                     John Doe
//                   </a>
//                   <span className="mx-1">·</span>
//                   <time className="ml-1">January 21, 2022</time>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>;
