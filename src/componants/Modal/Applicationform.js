import Container from "../container";

export default function Application() {
  return (
    <>
      <Container>
        <div class="py-8 bg-white md:py-16 h-full">
          <div class="px-10 mx-auto max-w-7xl md:px-16">
            <div class="max-w-3xl  ">
              <p class="text-xs font-bold text-blue-500 uppercase">#Ao-453</p>
              <h2 class="mt-1 text-2xl font-bold text-left text-gray-800 lg:text-3xl md:mt-2">
                Apply for - SEO Manager
              </h2>
              <p class="max-w-screen-md mx-auto mt-4 text-left text-gray-500 md:text-lg md:mt-6">
                Fill out the form below and we'll do some research on our end
                and get back to you within 24-48 hours. For specific technical
                issues, please visit our{" "}
                <a href="#_" class="font-medium text-blue-500 underline">
                  developer help center
                </a>
                .
              </p>
            </div>

            <form class="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  First name
                </label>
                <input
                  name="first-name"
                  class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>
              <div>
                <label
                  for="first-name"
                  class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  First name
                </label>
                <input
                  name="first-name"
                  class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>
              <div>
                <label
                  for="first-name"
                  class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  First name
                </label>
                <input
                  name="first-name"
                  class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>
              <div>
                <label
                  for="first-name"
                  class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
                >
                  First name
                </label>
                <input
                  name="first-name"
                  class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>
            </form>

            <p class="max-w-3xl mx-auto mt-5 text-xs text-gray-400">
              Please allow up to 24-48 hour response during the weekdays.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
}

// <form class="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
//           <div>
//             <label
//               for="first-name"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               First name
//             </label>
//             <input
//               name="first-name"
//               class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             />
//           </div>

//           <div>
//             <label
//               for="last-name"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               Last name
//             </label>
//             <input
//               name="last-name"
//               class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             />
//           </div>

//           <div class="sm:col-span-2">
//             <label
//               for="Email"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               Email
//             </label>
//             <input
//               name="Email"
//               class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             />
//           </div>

//           <div class="sm:col-span-2">
//             <label
//               for="tel"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               Tel
//             </label>
//             <input
//               name="Tel"
//               class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             />
//           </div>

//           <div class="sm:col-span-2">
//             <label
//               for="message"
//               class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
//             >
//               Message
//             </label>
//             <textarea
//               name="message"
//               class="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
//             ></textarea>
//           </div>
