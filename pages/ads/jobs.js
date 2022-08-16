import { Component } from "react";
import Link from "next/link";
import Testindex from "../../src/componants/Testamonials";
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

      <div class="w-full bg-royal">
        <section class="pb-12 py-12 bg- sm:pb-16 lg:pb-20">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="relative py-12 overflow-hidden bg-royal rounded-xl sm:py-16 lg:py-20">
              <div class="absolute inset-0">
                <img
                  class="object-contain object-right w-full h-full transform scale-125"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg"
                  alt=""
                />
              </div>

              <div class="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="relative">
                  <div class="absolute"></div>

                  <div class="relative grid grid-cols-1 lg:grid-cols-5 gap-y-12 gap-x-16 xl:gap-x-20">
                    <div class="flex flex-col justify-between lg:col-span-3">
                      <div>
                        <h1 class="text-4xl font-bold text-white sm:text-5xl">
                          Get
                          <span class="relative inline">
                            <img
                              class="absolute top-0 w-auto h-8 -right-8"
                              src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/design-element.svg"
                              alt=""
                            />
                            marketing{" "}
                          </span>
                          <br />
                          inspirations weekly
                        </h1>
                        <p class="mt-6 text-base font-normal leading-7 text-white text-opacity-80">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Vehicula massa in enim luctus. Rutrum arcu.
                        </p>
                      </div>

                      <div class="mt-8 lg:mt-auto">
                        <div class="flex -space-x-2">
                          <img
                            class="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-1.png"
                            alt=""
                          />
                          <img
                            class="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-2.png"
                            alt=""
                          />
                          <img
                            class="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-3.png"
                            alt=""
                          />
                          <img
                            class="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-4.png"
                            alt=""
                          />
                          <img
                            class="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-5.png"
                            alt=""
                          />
                          <img
                            class="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-6.png"
                            alt=""
                          />
                          <img
                            class="inline-block w-12 h-12 rounded-full sm:w-14 sm:h-14 ring-[3px] ring-white"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/avatar-7.png"
                            alt=""
                          />
                        </div>
                        <p class="mt-4 text-base font-medium text-white">
                          Join other 3200+ Marketers now
                        </p>
                      </div>
                    </div>

                    <div class="lg:col-span-2">
                      <p class="text-lg font-bold text-white">
                        Join our email list
                      </p>
                      <form action="#" method="POST" class="mt-4 space-y-4">
                        <div>
                          <label for="" class="sr-only">
                            {" "}
                            Full name{" "}
                          </label>
                          <div class="">
                            <input
                              type="text"
                              name=""
                              id=""
                              class="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                              placeholder="ex: James Darek"
                            />
                          </div>
                        </div>

                        <div>
                          <label for="" class="sr-only">
                            {" "}
                            Email address{" "}
                          </label>
                          <div class="">
                            <input
                              type="email"
                              name=""
                              id=""
                              class="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                              placeholder="Email address"
                            />
                          </div>
                        </div>

                        <div class="relative group">
                          <div class="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

                          <button
                            type="submit"
                            class="relative inline-flex items-center justify-center w-full px-8 py-3 text-base sm:py-3.5 font-bold text-white transition-all duration-200 bg-gray-900 rounded-lg sm:text-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 border border-transparent"
                          >
                            Join LandingFolio Newsletter For Free
                          </button>
                        </div>
                      </form>

                      <div class="mt-8 sm:mt-12">
                        <p class="text-xs font-bold tracking-widest text-white uppercase text-opacity-70">
                          Featured on
                        </p>
                        <div class="inline-grid grid-cols-2 gap-8 mt-8 lg:gap-x-12">
                          <img
                            class="object-contain w-auto h-6"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-1.svg"
                            alt=""
                          />
                          <img
                            class="object-contain w-auto h-6"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-2.svg"
                            alt=""
                          />
                          <img
                            class="object-contain w-auto h-6"
                            src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/logo-3.svg"
                            alt=""
                          />
                          <img
                            class="object-contain w-auto h-6"
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

      <div class="w-full bg-royal">
        <section class="pb-12 py-12 bg- sm:pb-16 lg:pb-20">
          <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="relative py-12 overflow-hidden bg-gray-50/20  rounded-xl sm:py-16 lg:py-20">
              <div class="absolute inset-0">
                <img
                  class="object-contain object-right w-full h-full transform scale-125"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg"
                  alt=""
                />
              </div>

              <div class="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div class="relative">
                  <div class="absolute"></div>

                  <div class="relative grid grid-cols-1 lg:grid-cols-1 gap-y-12 gap-x-16 xl:gap-x-20">
                    <div class="flex flex-col justify-between lg:col-span-3">
                      <div>
                        <h1 class="text-2xl font-bold text-white sm:text-5xl">
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

                      <div class="lg:col-span-2">
                        <p class="text-lg font-bold text-white">
                          Join our email list
                        </p>
                        <form action="#" method="POST" class="mt-4 space-y-4" />
                        <div>
                          <label for="" class="sr-only">
                            {" "}
                            Full name{" "}
                          </label>
                          <div class="">
                            <input
                              type="text"
                              name=""
                              id=""
                              class="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
                              placeholder="ex: James Darek"
                            />
                          </div>
                        </div>

                        <div>
                          <label for="" class="sr-only">
                            {" "}
                            Email address{" "}
                          </label>
                          <div class="">
                            <input
                              type="email"
                              name=""
                              id=""
                              class="block w-full px-4 py-3 text-base sm:py-3.5 sm:text-sm font-medium text-gray-900 placeholder-gray-500 border border-gray-300 rounded-lg focus:ring-gray-900 focus:border-gray-900"
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
