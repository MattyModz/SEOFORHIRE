import { useForm } from "react-hook-form";

export default function Contactform() {
  return (
    <div class="">
      <div class="px-10 mx-auto max-w-7xl md:px-16">
        <div class="max-w-3xl mx-auto mb-10 md:mb-16"></div>
        <form
          onSubmit={handleSubmit(onSubmitForm)}
          class="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2"
        >
          <div>
            <label
              for="first-name"
              class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
            ></label>
            <input
              name="full-name"
              {...register("fill_name", { required: true })}
              placeholder="Name"
              class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            />
          </div>

          <div class="sm:col-span-2">
            <label
              for="Email"
              class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
            ></label>
            <input
              placeholder="Email"
              {...register("Email", { required: true })}
              name="Email"
              class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            />
          </div>

          <div class="sm:col-span-2">
            <label
              for="PhoneNumber"
              class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
            ></label>
            <input
              placeholder="Enter your phone number"
              {...register("phone", { required: true })}
              name="PhoneNumber"
              class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            />
          </div>

          <div class="sm:col-span-2">
            <label
              for="message"
              class="inline-block mb-2 text-sm font-medium text-gray-500 sm:text-base"
            ></label>
            <textarea
              placeholder="How can we help you"
              {...register("message", { required: true })}
              name="message"
              class="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
            ></textarea>
          </div>

          <div class="flex items-center justify-between sm:col-span-2">
            <button
              type="submit"
              class="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 rounded-md outline-none bg-gradient-to-br from-purple-600 via-fuscia-800 to-pink-500 md:text-base"
            >
              Send Message.
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
