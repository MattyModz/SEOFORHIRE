import Link from "next/link";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { motion } from "framer-motion";
// import { useRouter } from "next/router";
import Image from "next/image";
export default function Footer() {
  //  const { register, handleSubmit } = useForm();
  //  const router = useRouter();

  //  async function onSubmitForm(values) {
  //    const config = {
  //      method: "post",
  //      url: `${process.env.NEXT_PUBLIC_API_URL}/api/mail`,
  //      headers: {
  //        "Content-Type": "application/json",
  //      },
  //      data: values,
  //    };

  //    try {
  //      const response = await axios(config);

  //      if (response.status == 200) {
  //        router.push("https://topsecret.link-city.co/");
  //      }
  //    } catch (err) {}
  //  }

  return (
    <section className="relative border w-full bg-royal bg-opacity-95 border-gray-700">
      <div className="text-xs text-gray-200 space-y-4 border-b border-gray-700 relative">
        <div className="max-w-7xl border-l border-r border-gray-700 py-6 relative h-full px-10 mx-auto flex flex-col sm:items-center sm:justify-between md:flex-row md:space-y-0">
          <p className="md:mb-0 mb-1">SEO Recruitment specialists</p>
          <div className="flex sm:flex-row flex-col items-start sm:items-center">
            Visit our social channels
            <nav className="flex sm:ml-3 md:mt-0 mt-3 items-center space-x-3">
              <a
                href="https://twitter.com/SEOforHireLTD"
                className="transition flex hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="https://m.facebook.com/seoforhireLTD/"
                className="transition flex hover:text-white"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col-reverse items-stretch border-l border-r border-gray-700 justify-center h-full mx-auto max-w-7xl md:space-x-10">
        <div className="flex w-full md:w-1/2 flex-col sm:items-center justify-center space-y-5 p-10 md:pr-0 md:items-start">
          <a
            href="#_"
            className="text-white font-extrabold uppercase text- flex items-center"
          >
            <Image src="/logo.svg" height={50} width={50} />
          </a>
          <nav className="flex flex-col flex-wrap sm:items-center space-y-4 text-xs font-medium text-white sm:flex-row sm:space-x-3  lg:space-x-4 sm:space-y-0">
            <div>
              <Link href={"/"}>
                <a className="hover:text-white">Home</a>
              </Link>
            </div>
            <div>
              <Link href={"/media"}>
                {" "}
                <a className="hover:text-white">Podcasts</a>
              </Link>
            </div>
            <div>
              <Link href={"/contact"}>
                {" "}
                <a className="hover:text-white">Contact</a>
              </Link>
            </div>
            <div>
              <Link href={"/blog"}>
                {" "}
                <a className="hover:text-white">Blog</a>
              </Link>
            </div>
          </nav>
          <p className="sm:text-center text-xs leading-5 text-white md:text-left">
            SEOforhire is a subsidiary of the Charlie Delta Group.
          </p>
        </div>
        <div className="flex w-full md:w-0 border-b md:border-r border-gray-700"></div>
        <div className="w-full md:w-1/2 md:pl-0 p-10 flex sm:items-center md:items-start flex-col justify-center">
          <h4 className="font-bold uppercase text-gray-100">Stay updated</h4>
          <p className="sm:text-center my-3 text-xs leading-5 text-gray-500 md:text-left">
            If you want to get notified about our latest features and updates
            fill out the form below and we promise to only send you updates once
            a week.
          </p>
          <div className="flex w-full space-x-2">
            <input
              type="text"
              placeholder="Enter your email"
              // {...register("Email", { required: true })}
              className="block w-full rounded bg-gray-50 placeholder-black border-gray-700 border text-sm transition px-3 text-royal"
            />
            <button
              type="submit"
              className="inline-flex w-auto flex-shrink-0 cursor-pointer select-none appearance-none items-center justify-center space-x-1 rounded bg-white px-3 py-2 text-sm font-medium text-royal transition focus:outline-none focus:ring-2 focus:ring-orange-100"
            >
              Sign up
            </button>
          </div>
        </div>
      </div>
      <div className="text-xs text-gray-200 space-y-4 border-t border-gray-700">
        <div className="max-w-7xl border-l border-r border-gray-700 py-6 h-full px-10 mx-auto flex flex-col sm:items-center sm:justify-between md:flex-row md:space-y-0">
          © {new Date().getFullYear()}, SEOforHire
          <nav className="flex flex-col space-y-1.5 md:mt-0 mt-4 sm:flex-row sm:space-y-0 sm:space-x-3">
            <Link href={"/policy/terms-and-conditions"}>
              {" "}
              <a className="transition hover:text-white">Terms of Service</a>
            </Link>
            <Link href={"/policy/privacy-policy"}>
              <a className="transition hover:text-white">Privacy Policy</a>
            </Link>
            <Link href={"/policy/cookie-policy"}>
              <a className="transition hover:text-white">Cookie Policy</a>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
