import Image from "next/image";
export default function Review() {
  return (
    <div className=" mr-8 pr-28 mb-4">
      <div className="bg-royal rounded-xl ">
        <a class="col-span-3  rounded-xl h-52 md:h-80">
          <Image
            src="/PC.JPG"
            class="rounded-t-xl max-h-44"
            width={330}
            height={200}
          />

          <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3">
            ft. James Gregory
          </p>

          <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
            Diary of an SEO
            <br />
            Podcast S2 EP1
          </p>
        </a>
      </div>
    </div>
  );
}
