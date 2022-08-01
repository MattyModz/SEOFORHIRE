import Link from "next/link";
export default function Four0Four() {
  return (
    <section className=" grid grid-cols-1 content-center bg-royal  h-screen">
      <div className="">
        <div className="align-middle flex justify-center text-8xl font-inter font-bold text-white">
          404
        </div>
        <div className=" flex justify-center text-white text-3xl">
          Whoops no content here!
        </div>
        <div className="flex justify-center py-4">
          <Link href={"/"} passHref>
            <button className="font-interr btnPrimary rounded-xl text-l text-white py-2 p-2">
              Return Home
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
