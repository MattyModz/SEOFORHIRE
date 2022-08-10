import Container from "../container";
import Link from "next/link";
function Avgsalary({ Averagesalary, location }) {
  return (
    <section className="px-8 py-16 flex flex-wrap w-full bg-gradient-to-br from-[#1A0976] via-[#100750] to-black ">
      <div class="w-full max-w-6xl mx-auto">
        <h2 class="text-3xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 text-white sm:text-center text-left">
          Seo jobs in Manchester
        </h2>
        <p class="w-full text-left sm:text-center mb-8 md:text-lg text-gray-50">
          Average yearly salary for seo jobs in manchester data from ...
        </p>
        <div className="flex flex-col items-center justify-center w-full mb-10 sm:flex-row sm:mb-20">
          <Link href="#candidate">
            <a className="w-full font-bold px-8 py-3 text-lg text-center text-royal transition duration-150 ease-in-out bg-white rounded-md sm:w-auto focus:outline-none">
              Explore Jobs
            </a>
          </Link>
          <Link href="#job">
            <a
              href="#_"
              className="w-full px-8 py-3 mt-5  font-bold text-lg text-center text-white transition duration-150 ease-in-out bg-transparent border border-white rounded-md sm:ml-6 sm:w-auto sm:mt-0 focus:outline-none hover:bg-white hover:text-royal"
            >
              Looking to hire?
            </a>
          </Link>
        </div>

        <div class="w-full relative md:pr-48">
          <img
            class="rounded-t-2xl md:rounded-2xl aspect-video object-cover"
            src="https://thumbs.dreamstime.com/z/modern-modern-infographic-vector-template-statistics-graphs-finance-charts-diagram-template-chart-graph-graphic-120729478.jpg"
            alt="adventure destination"
          />
          <div class="md:absolute relative lg:w-96 w-full md:max-w-md right-0 top-0 md:py-8 lg:py-12 h-full">
            <div class="w-full h-full flex flex-col items-start justify-between rounded-b-2xl md:rounded-2xl p-8 bg-white shadow-xl">
              <div class="bg-gray-50 mb-3 lg:flex flex md:hidden border border-gray-100 text-cyan-500 px-3.5 space-x-1 items-center py-1.5 text-xs rounded-full inline-block font-bold">
                <svg
                  class="w-3.5 -ml-1 h-3.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <span class="">SEO jobs</span>
              </div>
              <div class="relative">
                <h3 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-800">
                  {location}
                </h3>
                <p class="text-gray-500 text-sm py-5 lg:py-3 lg:text-base">
                  Enjoy the beautiful sunsets and luxurious resorts of the
                  worlds finest destination. Panama is among the most sought
                  after destination locations. {Averagesalary}
                </p>
              </div>
              <a
                href="#_"
                class="bg-cyan-500 px-6 py-3 text-sm font-semibold rounded-full text-white"
              >
                Explore jobs in Manchester
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Avgsalary;
