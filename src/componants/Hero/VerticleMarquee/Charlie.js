import Image from "next/image";

export default function ReviewCharlie() {
  return (
    <div className=" mr-8 pr-28 mb-4">
      <div className="bg-royal rounded-xl ">
        <a
          class="col-span-3 rounded-xl h-52 md:h-80"
          href="https://www.youtube.com/watch?v=OAAx8ttpfbM&t=2s"
        >
          <Image
            src={"/Charlieclarke.jpg"}
            width={330}
            height={200}
            alt="podcastimg"
          />

          <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3">
            {" "}
            Ft. Charlie clarke{" "}
          </p>

          <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
            {" "}
            The Diary of an SEO <br />
            S2 EP4
          </p>
        </a>
      </div>
    </div>
  );
}
