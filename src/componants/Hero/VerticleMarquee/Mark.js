import Image from "next/image";

export default function ReviewMark() {
  return (
    <div className=" mr-8 pr-28 mb-4">
      <div className="bg-royal rounded-xl ">
        <a
          class="col-span-3 rounded-xl h-52 md:h-80"
          href="https://www.youtube.com/watch?v=qCCF2VY2sEY&t=4s"
        >
          <Image
            src={"/MarkRofe.jpg"}
            width={330}
            height={200}
            alt="podcastimg"
          />

          <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3">
            {" "}
            Ft. Mark Rofe{" "}
          </p>

          <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
            {" "}
            The Diary of an SEO <br />
            S2 EP2
          </p>
        </a>
      </div>
    </div>
  );
}
