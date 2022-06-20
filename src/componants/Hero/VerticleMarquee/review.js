import Image from "next/image";

export default function Review() {
  return (
    <div className=" mr-8 pr-28 mb-4">
      <div className="bg-royal rounded-xl ">
        <a
          class="col-span-3 rounded-xl h-52 md:h-80"
          href="https://www.youtube.com/watch?v=kUf9qk39UnM&list=PLfB1NYSwR98S0z51PF7-p52gZFqaJnv4m&index=2&t=195s"
        >
          <Image src={"/PC.png"} width={375} height={211} alt="podcastimg" />

          <p class="text-xl md:text-3xl text-gray-50 pt-5 pl-3">
            {" "}
            Ft. James Gregory{" "}
          </p>

          <p class="text-xs md:text-lg font-light text-gray-50 pt-3 pl-3 pb-10">
            {" "}
            The Diary of an SEO <br />
            S2 EP1
          </p>
        </a>
      </div>
    </div>
  );
}
