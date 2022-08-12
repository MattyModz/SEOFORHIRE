import React from "react";
import Image from "next/image";
function Authorcard() {
  return (
    <div>
      {" "}
      <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-royal dark:bg-gray-900 dark:text-gray-400">
        <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
          <div className="relative flex-shrink-0 w-24 h-24   ">
            <Image
              src={"/josh.jpg"}
              width={100}
              height={100}
              className="rounded-full"
            />
            <div className="flex py-2">
              <a
                href="https://uk.linkedin.com/in/josh-peacock-589438220"
                class="flex-1 block p-1 text-center text-gray-300 transition duration-200 ease-out  hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                </svg>
              </a>

              <a
                href="https://twitter.com/JPeaco"
                class="flex-1 block p-1 text-center text-gray-300 transition duration-200 ease-out   hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-auto fill-current"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div>
            <div className="mb-3">
              <h4 className="text-lg font-medium text-white">Josh Peacock</h4>
            </div>
            <div className="text-white">
              My vision for SEO For Hire is simple - to be the most
              knowledgeable, ethical and transparent player in the game.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorcard;

//     <div> <div className="px-8 py-8 mt-3 text-gray-500 rounded-2xl bg-gray-50 dark:bg-gray-900 dark:text-gray-400">
//   <div className="flex flex-wrap items-start sm:space-x-6 sm:flex-nowrap">
//     <div className="relative flex-shrink-0 w-24 h-24 mt-1 ">
//       {imageProps && (
//         <Image
//           src={imageProps.src}
//           loader={imageProps.loader}
//           blurDataURL={imageProps.blurDataURL}
//           objectFit="cover"
//           alt={author.name}
//           placeholder="blur"
//           layout="fill"
//           className="rounded-full"
//         />
//       )}
//     </div>
//     <div>
//       <div className="mb-3">
//         <h4 className="text-lg font-medium text-gray-800 dark:text-gray-300">
//           About {author.name}
//         </h4>
//       </div>
//       <div>
//         {author.bio && <PortableText value={author.bio} />}
//       </div>
//     </div>
//   </div>
// </div></div>
