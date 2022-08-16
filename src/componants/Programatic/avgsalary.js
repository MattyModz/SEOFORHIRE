import Link from "next/link";

export default function Avgsalary({ Averagesalary, location }) {
  return (
    <div class="px-8 py-16  flex flex-wrap w-full bg-[#100750]">
      <div class="w-full max-w-6xl mx-auto py-8">
        <h1 class="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 text-white sm:text-center text-left">
          Seo jobs in Manchester
        </h1>
        <p class="w-full text-left sm:text-center mb-8 md:text-lg text-gray-50">
          Average yearly salary for seo jobs in manchester data from ...
        </p>
        <div class="flex flex-col items-center justify-center w-full mb-10 sm:flex-row sm:mb-20">
          <a class="w-full font-bold px-8 py-3 text-lg text-center text-royal transition duration-150 ease-in-out bg-white rounded-md sm:w-auto focus:outline-none">
            Explore Jobs
          </a>

          <a
            href="#_"
            class="w-full px-8 py-3 mt-5  font-bold text-lg text-center text-white transition duration-150 ease-in-out bg-transparent border border-white rounded-md sm:ml-6 sm:w-auto sm:mt-0 focus:outline-none hover:bg-white hover:text-royal"
          >
            Looking to hire?
          </a>

          <a href=""></a>
        </div>
      </div>
    </div>
  );
}
