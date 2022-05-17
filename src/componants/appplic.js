import Candhero from "./Candidates/candidatehero";

export default function Applic() {
  return (
    <section className="">
      <div className="relative  w-full">
        <svg
          className="fill-royal text-gray-100"
          viewBox="0 0 900 45"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m0 4 50 3c50 3 150 9 250 13.7 100 4.6 200 8 300 4.3S800 10.7 850 5.3L900 0v45H0V4Z"
            fillRule="#fff"
          ></path>
        </svg>
      </div>
      <div className="w-full bg-royal">
        <section class=" w-full pt-20 bg-gradient-to-b from-royal via-blue-900 to-royal">
          <div class="  max-w-3xl px-12 mx-auto space-y-5 text-center lg:px-0">
            <h1 class="text-6xl font-black text-white lg:text-7xl">
              Candidate Showcase.
            </h1>
            <p class="text-lg font-medium text-gray-200">
              Show casing our brightest talent across all things SEO, digital
              marketing and web development.
            </p>
            <div className="py-4">
              <a
                href="/contact"
                className="w-full font-bold px-8 py-3 text-lg text-center text-royal transition duration-150 ease-in-out bg-white rounded-md sm:w-auto focus:outline-none"
              >
                Help me hire
              </a>
            </div>
          </div>

          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </section>
      </div>
    </section>
  );
}
