export default function Applic() {
  return (
    <div>
      <div class="w-full h-full mt-2">
        <div class="mx-auto max-w-7xl lg:px-10">
          <div class="flex flex-col items-start justify-center py-12 bg-gray-100 lg:rounded-xl px-14 md:py-20 xl:px-20 xl:py-20 md:flex-row">
            <div class="flex flex-col items-start justify-center w-full space-y-10 text-left md:w-1/2 sm:text-center md:text-left sm:items-center md:items-start">
              <div class="relative">
                <h1 class="font-serif text-4xl leading-tight text-gray-900 xl:text-5xl">
                  Explore New Design
                  <br />
                  Concepts with Tails
                </h1>
              </div>
              <p class="max-w-lg text-gray-600 md:max-w-none">
                Choose from hundreds of templates you can combine together to
                create a unique experience for your users.
              </p>
              <a
                href="#_"
                class="w-full px-12 py-5 text-sm font-medium text-center text-white uppercase bg-gray-900 rounded-full sm:w-auto"
              >
                Join for Free
              </a>
            </div>
            <div class="relative flex justify-end md:w-1/2">
              <img
                src="https://cdn.devdojo.com/images/october2021/ghost-design.png"
                class="top-0 w-1/2 mx-auto mt-16 transform -translate-x-8 md:absolute md:mt-0 md:translate-x-0 md:w-5/6"
              />
            </div>
          </div>

          <div class="flex flex-col w-full lg:flex-row lg:space-x-10 lg:mt-10 sm:pb-10">
            <div class="flex flex-col items-center justify-between w-full p-0 overflow-hidden bg-yellow-100 lg:rounded-2xl sm:flex-row lg:justify-start sm:p-10">
              <div class="relative flex items-center p-8 sm:p-0">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1089/1089430.png"
                  class="w-20 mr-5"
                />
                <div class="relative pr-5">
                  <h2 class="font-medium text-yellow-800">Get Started Today</h2>
                  <p class="mt-1 text-sm text-yellow-600">
                    Start crafting the page of your dreams
                  </p>
                </div>
              </div>
              <a
                href="#_"
                class="inline-flex justify-center flex-shrink-0 w-full px-5 py-3 mt-2 text-xs font-medium text-center text-white uppercase bg-yellow-400 sm:rounded-full sm:w-auto"
              >
                Join for Free
              </a>
            </div>
            <div class="flex flex-col items-center justify-between w-full p-0 overflow-hidden bg-purple-100 lg:rounded-2xl sm:flex-row lg:justify-start sm:p-10">
              <div class="relative flex items-center p-8 sm:p-0">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/1089/1089434.png"
                  class="w-20 mr-5"
                />
                <div class="relative pr-5">
                  <h2 class="font-medium text-purple-800">
                    Everyone Loves Candy
                  </h2>
                  <p class="mt-1 text-sm text-purple-600">
                    It's eye-candy to delight your users
                  </p>
                </div>
              </div>
              <a
                href="#_"
                class="inline-flex justify-center flex-shrink-0 w-full px-5 py-3 mt-2 text-xs font-medium text-center text-white uppercase bg-purple-400 sm:rounded-full sm:w-auto"
              >
                Join for Free
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
