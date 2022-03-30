import Image from "next/image";
import Link from "next/link";
import Date from "../Date";
export default function PostAuthor({
  Authorimg,
  Authorname,
  date,

  slug,
}) {
  return (
    <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <Link href={`/Author/${slug}`} passHref className="hover:underline">
          <span className="sr-only">{Authorname}</span>
        </Link>
        <Image
          className="h-10 w-10 rounded-full"
          src={Authorimg}
          height={50}
          width={50}
          alt=""
        />
      </div>
      <div className="ml-3">
        <p className="text-sm font-medium text-white">
          <Link href={`/Author/${slug}`} className="hover:underline">
            <div>{Authorname}</div>
          </Link>
        </p>
        <div className="flex space-x-1 text-sm text-gray-500">
          <Date dateString={date} />
          <span aria-hidden="true">&middot;</span>
          <span>4min read</span>
        </div>
      </div>
    </div>
  );
}
