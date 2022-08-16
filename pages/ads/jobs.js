import Proglayout from "../../src/componants/Layout/Proglayout";
export default function Jobs() {
  return (
    <>
      <section className="sticky top-0 z-99">
        <div className="w-full bg-royal flex justify-center">
          <div className="w-full  justify-center   bg-blue-900 text-white  font-inter text-2xl">
            Number of Applicants:
          </div>
        </div>
      </section>
      <Proglayout
        Herotitle={"Seo Manager Manchester"}
        joblocation={"Remote"}
        jobsalary={"60,000"}
        term={"Full time"}
      />

      <div className="w-full bg-royal">
        <section className="pb-12 py-12 bg- sm:pb-16 lg:pb-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative py-12 overflow-hidden bg-royal rounded-xl sm:py-16 lg:py-20">
              <div className="absolute inset-0">
                <img
                  className="object-contain object-right w-full h-full transform scale-125"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg"
                  alt=""
                />
              </div>

              <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="relative">
                  <div className="absolute"></div>

                  <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-16 xl:gap-x-20">
                    <div className="flex flex-col justify-between lg:col-span-3">
                      <div>
                        <h1 className="text-4xl font-bold text-white sm:text-5xl">
                          Get
                          <span className="relative inline">
                            <img
                              className="absolute top-0 w-auto h-8 -right-8"
                              src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/design-element.svg"
                              alt=""
                            />
                            marketing{" "}
                          </span>
                          <br />
                          inspirations weekly
                        </h1>
                        <p className="mt-6 text-base font-normal leading-7 text-white text-opacity-80">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vehicula massa in enim luctus. Rutrum arcu.
                        </p>
                      </div>

                      <div className="mt-8 lg:mt-auto">
                        <div className="flex -space-x-2">
                          <img
                            className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-1.png"
                            alt=""
                          />
                          <img
                            className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-2.png"
                            alt=""
                          />
                          <img
                            className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-3.png"
                            alt=""
                          />
                          <img
                            className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-4.png"
                            alt=""
                          />
                          <img
                            className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-5.png"
                            alt=""
                          />
                          <img
                            className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-6.png"
                            alt=""
                          />
                          <img
                            className="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-7.png"
                            alt=""
                          />
                        </div>
                        <p className="mt-4 text-base font-medium text-white">
                          Join other 3200+ Marketers now
                        </p>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <p className="text-lg font-bold text-white">
                        Join our email list
                      </p>
                      <form action="#" method="POST" className="mt-4 space-y-4">
                        <div>
                          <label htmlFor="" className="sr-only">
                            {" "}
                            Full name{" "}
                          </label>
                          <div className="">
                            <input
                              type="text"
                              name=""
                              id=""
                              className="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                              placeholder="ex: James Darek"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="" className="sr-only">
                            {" "}
                            Email address{" "}
                          </label>
                          <div className="">
                            <input
                              type="email"
                              name=""
                              id=""
                              className="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                              placeholder="Email address"
                            />
                          </div>
                        </div>

                        <div className="relative group">
                          <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                          <button
                            type="submit"
                            className="relative inline-flex items-center justify-center w-full px-8 py-3 text-base sm:py-3.5 font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent"
                          >
                            Join LandingFolio Newsletter For Free
                          </button>
                        </div>
                      </form>

                      <div className="mt-8 sm:mt-12">
                        <p className="text-xs font-bold tracking-widest text-white uppercase text-opacity-70">
                          Featured on
                        </p>
                        <div className="inline-grid grid-cols-2 gap-8 mt-8 lg:gap-x-12">
                          <img
                            className="object-contain w-auto h-6"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-1.svg"
                            alt=""
                          />
                          <img
                            className="object-contain w-auto h-6"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-2.svg"
                            alt=""
                          />
                          <img
                            className="object-contain w-auto h-6"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-3.svg"
                            alt=""
                          />
                          <img
                            className="object-contain w-auto h-6"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-4.svg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className="w-full bg-royal">
        <section className="pb-12 py-12 bg- sm:pb-16 lg:pb-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative py-12 overflow-hidden bg-gray-50/20  rounded-xl sm:py-16 lg:py-20">
              <div className="absolute inset-0">
                <img
                  className="object-contain object-right w-full h-full transform scale-125"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg"
                  alt=""
                />
              </div>

              <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="relative">
                  <div className="absolute"></div>

                  <div className="relative grid grid-cols-1 lg:grid-cols-1 gap-y-12 gap-x-16 xl:gap-x-20">
                    <div className="flex flex-col justify-between lg:col-span-3">
                      <div>
                        <h1 className="text-2xl font-bold text-white sm:text-5xl">
                          Please check all of your questions
                          <br />
                          Where you answered yes
                        </h1>
                        <div className="py-12 text-xl text-white ">
                          <div className="flex">
                            {" "}
                            <input type="checkbox" />
                            <p className="ml-2">This is a statment</p>
                          </div>{" "}
                          <div className="flex">
                            {" "}
                            <input type="checkbox" />
                            <p className="ml-2">This is a statment</p>
                          </div>{" "}
                        </div>
                      </div>

                      <br />
                      <br />
                      <br />
                      <br />

                      <div className="lg:col-span-2">
                        <p className="text-lg font-bold text-white">
                          Join our email list
                        </p>
                        <form
                          action="#"
                          method="POST"
                          className="mt-4 space-y-4"
                        />
                        <div>
                          <label for="" className="sr-only">
                            {" "}
                            Full name{" "}
                          </label>
                          <div className="">
                            <input
                              type="text"
                              name=""
                              id=""
                              className="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                              placeholder="ex: James Darek"
                            />
                          </div>
                        </div>

                        <div>
                          <label for="" className="sr-only">
                            {" "}
                            Email address{" "}
                          </label>
                          <div className="">
                            <input
                              type="email"
                              name=""
                              id=""
                              className="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                              placeholder="Email address"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
