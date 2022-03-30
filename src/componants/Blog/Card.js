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
