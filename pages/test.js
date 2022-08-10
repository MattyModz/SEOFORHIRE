import Avgsalary from "../src/componants/Programatic/avgsalary";
import Joblisting from "../src/componants/Hero/jobslist";
import Container from "../src/componants/container";
import Apply from "../src/componants/Programatic/apply";
export default function test({ salary }) {
  console.log(salary.month);

  return (
    <section className=" ">
      <Avgsalary location={"manchester"} Averagesalary={"£60,000"} />
      <div className="text-black ">
        <h1 className="text-center font-bold">Seo jobs in manchester</h1>
        <Container>
          <div className="lg:flex p-8">
            <div className=" lg:w-2/3 text-black px-4">
              {" "}
              Are you looking for a new and exciting SEO job in Manchester? If
              you have a passion for all things digital and a desire to help
              businesses grow online, then a career in SEO could be perfect for
              you. SEO is a fast-paced and ever-changing industry, which means
              that there are always new opportunities and challenges to keep you
              on your toes. Manchester is a hotbed of digital activity, with a
              growing number of businesses investing in SEO to help them compete
              in an increasingly competitive online marketplace. As an SEO
              professional, you could find yourself working in a variety of
              industries, from ecommerce and retail to travel an
            </div>
            <div className="lg:w-1/3 text-white py-8 ">
              {" "}
              <div className="bg-royal p-8 rounded-xl">
                <h3 className="font-interr font-bold text-center mb-4">
                  Seo jobs in Manchester
                </h3>
                <Container>
                  <Apply
                    key="test"
                    slug="test"
                    title="SEO Manager"
                    salary="£60k"
                    location="Manchester"
                    term="test"
                  />
                  <Apply
                    key="test"
                    slug="test"
                    title="SEO Consultant"
                    salary="£50k"
                    location="Manchester"
                    term="test"
                  />
                </Container>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* <section class="w-full  pt-48 pb-32 bg-royal">
        <div class="relative px-12 mx-auto max-w-7xl">
          <div class="relative grid items-center grid-cols-1 gap-10 p-12 overflow-hidden shadow-2xl md:p-16 lg:p-20 xl:p-24 bg-gradient-to-r from-green-400 to-green-500 rounded-2xl md:grid-cols-5 lg:gap-0">
            <div class="absolute top-0 right-0">
              <svg
                viewBox="0 0 487 487"
                class="object-cover w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                  fill="#FFF"
                  fill-rule="nonzero"
                  fill-opacity=".1"
                ></path>
              </svg>
            </div>

            <div class="absolute bottom-0 left-0 h-full">
              <svg
                viewBox="0 0 487 487"
                class="w-auto h-full opacity-75 object-stretch"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                  fill="#FFF"
                  fill-rule="nonzero"
                  fill-opacity=".1"
                ></path>
              </svg>
            </div>

            <div class="relative z-30 col-span-1 md:col-span-3">
              <h2 class="mb-1 text-3xl font-bold leading-tight text-white md:mb-3 md:text-3xl lg:text-4xl xl:text-5xl">
                Looking for premum blog content?{" "}
                <span class="block lg:mt-3"></span>
              </h2>
              <p class="max-w-sm my-6 text-base font-normal text-green-200 xl:max-w-lg lg:pr-0 pr-7 lg:text-xl">
                Are you ready to build the page of your dreams? You can use our
                expertly-crafted designs to you tell your story.
              </p>
              <a
                href="#"
                class="flex items-center justify-center w-full px-4 py-2 text-base font-medium leading-6 text-green-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm md:w-auto md:inline-flex hover:bg-transparent hover:text-white hover:border-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
              >
                Get Started
              </a>
            </div>
            <div class="flex items-center h-full col-span-1 md:col-span-2">
              <img
                src="https://cdn.devdojo.com/images/march2021/dashboard.jpg"
                class="relative top-0 right-0 object-cover w-full -mr-1 rounded md:max-w-sm md:w-auto max-w-none lg:absolute lg:max-w-md xl:max-w-lg lg:mt-9"
                alt="Dashboard"
              />
            </div>
          </div>
        </div>
      </section> */}
    </section>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "http://api.adzuna.com/v1/api/jobs/gb/history?app_id=31f67d84&app_key=b35a8a7a633ffc64a20d55e7c75443d5&location0=UK&location1=London&category=it-jobs&content-type=application/json"
  );
  const salary = await res.json();
  if (!salary) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      salary,
    },
  };
}
