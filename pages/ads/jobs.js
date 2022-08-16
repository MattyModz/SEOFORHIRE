import Proglayout from "../../src/componants/Layout/Proglayout";
import { YoutubeVideoPlayer } from "../../src/componants/Podcast/youtubePlayer";
import Counter from "../../src/componants/Programatic/application/counter";
import {
  BriefcaseIcon,
  CurrencyPoundIcon,
  LocationMarkerIcon,
} from "@heroicons/react/solid";
export default function Jobs() {
  return (
    <>
      <div className="w-full bg-royal">
        <section className="pb-12  bg- sm:pb-16 lg:pb-20">
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
                        <h1 className="text-4xl font-bold text-white text-center sm:text-5xl">
                          Seo Manager Manchester
                        </h1>

                        <div className="mt-6 text-base font-normal leading-7 text-white text-opacity-80">
                          <div className="  justify-center lg:flex md:flex flex ">
                            <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                              <BriefcaseIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                              Remote
                            </div>

                            <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                              <LocationMarkerIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                                aria-hidden="true"
                              />
                              <div>Manchester</div>
                            </div>

                            <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10 text-gray-100 mb-4">
                              <CurrencyPoundIcon
                                className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-100"
                                aria-hidden="true"
                              />
                              £60,000
                            </div>
                          </div>
                          <p className="lg:hidden block">
                            This is a breif description of the job being
                            advertised users can apply for the job hear
                          </p>
                        </div>
                      </div>

                      <div className="mt-8 lg:mt-auto">
                        <div class="relative bg-royal">
                          <div class="relative mx-auto">
                            <div class="lg:max-w-6xl lg:mx-auto">
                              <YoutubeVideoPlayer
                                id={
                                  "https://www.youtube.com/watch?v=gowNOEwZ2LI"
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-2">
                      <div className="text-white">THS IS A COUNTDOWN</div>
                      <p className="text-lg font-bold text-white">
                        Apply for role
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
                              placeholder="Name"
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
                            Apply for SEO Manager
                          </button>
                        </div>
                      </form>

                      <div className="mt-8 sm:mt-12">
                        <p className="text-xs font-bold tracking-widest text-white uppercase text-opacity-70">
                          Trusted by
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

      <div className="w-full bg-royal -mt-24">
        <section className="pb-12 py-12 bg- sm:pb-16 lg:pb-20">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="relative py-12 overflow-hidden bg-gray-50/10  rounded-xl sm:py-16 lg:py-20">
              <div className="absolute inset-0">
                <img
                  className="object-contain object-right w-full h-full transform scale-125"
                  src="https://landingfoliocom.imgix.net/store/collection/clarity-blog/images/hero/3/background-pattern.svg"
                  alt=""
                />
              </div>

              <div className="relative max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="relative">
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
                            <p className="ml-2">
                              Do you want to grow your business online, but you
                              have NO IDEA where to start?
                            </p>
                          </div>{" "}
                          <div className="flex">
                            {" "}
                            <input type="checkbox" />
                            <p className="ml-2">
                              Do you have a company that's been successful, but
                              for some reason you're feeling stuck?
                            </p>
                          </div>{" "}
                          <div className="flex">
                            {" "}
                            <input type="checkbox" />
                            <p className="ml-2">
                              Do you want direct live access to experts who can
                              help you with your funnels, strategy offer,
                              marketing, sales, and ANY question you have?
                            </p>
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
                            Apply for SEO Manager
                          </button>
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
