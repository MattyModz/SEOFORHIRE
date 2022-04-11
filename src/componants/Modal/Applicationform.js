import axios from "axios";
import { useState } from "react";

import Container from "../container";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyPoundIcon,
  LinkIcon,
  LocationMarkerIcon,
  PencilIcon,
} from "@heroicons/react/solid";

const GETFORM_FORM_ENDPOINT =
  "https://getform.io/f/70804196-fb2a-48d6-a04f-50bcbd17b5eb";

export default function Form({ children }) {
  const [formStatus, setFormStatus] = useState(false);
  const [query, setQuery] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    cover: "",
    file: "",
  });

  const handleFileChange = () => (e) => {
    setQuery((prevState) => ({
      ...prevState,
      files: e.target.files[0],
    }));
  };

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(GETFORM_FORM_ENDPOINT, formData, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          firstname: "",
          lastname: "",
          email: "",
          contact: "",
          cover: "",
          file: "",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <>
      <Container>
        <motion.div
          className="py-8 md:py-16bg-black bg-opacity-10 rounded-xl w-full py-11 flex justify-center text-white"
          initial="pageInitial"
          exit={{ opacity: 0 }}
          animate="pageAnimate"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
          }}
        >
          <div className="px-10 mx-auto max-w-7xl md:px-16   ">
            <div className="max-w-3xl  ">
              <Image src={"/logo.png"} width={50} height={50} alt="Logo" />
              <p className="text-xs font-bold text-blue-500 uppercase"></p>
              <h2 className="mt-1 text-2xl font-bold text-left text-white lg:text-3xl md:mt-2">
                Apply for - {children[0]}
              </h2>

              <div className="py-8 md:flex sm:block  ">
                <div className="flex px-2">
                  <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                    <BriefcaseIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                    <div>{children[1]}</div>
                  </div>
                </div>

                <div className="flex px-2">
                  <div className="flex rounded-full px-3 py-1.5   bg-gray-100 bg-opacity-10  text-gray-100 mb-4">
                    <LocationMarkerIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-white"
                      aria-hidden="true"
                    />

                    <h6 className=""> {children[2]}</h6>
                  </div>
                </div>

                <div className="flex px-2">
                  <div className="flex rounded-full  px-3 py-1.5 bg-gray-100 bg-opacity-10 text-gray-100 mb-4">
                    <CurrencyPoundIcon
                      className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-100"
                      aria-hidden="true"
                    />
                    {children[3]}
                  </div>
                </div>
              </div>
            </div>

            <form
              acceptCharset="UTF-8"
              method="POST"
              enctype="multipart/form-data"
              id="ajaxForm"
              onSubmit={handleSubmit}
              className="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2"
            >
              <div>
                <label
                  for="first-name"
                  className="inline-block mb-2 text-sm font-medium text-white0 sm:text-base"
                  type="text"
                  id="InputfirstName"
                  placeholder="Enter your name"
                  required
                  name="firstname"
                  value={query.firstname}
                  onChange={handleChange()}
                >
                  First name
                </label>
                <input
                  name="firstname"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>

              <div>
                <label
                  for="first-name"
                  className="inline-block mb-2 text-sm font-medium text-white sm:text-base"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="InputlastName"
                  placeholder="Enter your surname"
                  required
                  name="lastname"
                  value={query.lastname}
                  onChange={handleChange()}
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>

              <div>
                <label
                  for="first-name"
                  className="inline-block mb-2 text-sm font-medium  sm:text-base"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="InputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  required
                  name="email"
                  value={query.email}
                  onChange={handleChange()}
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>

              <div>
                <label
                  for="Telephonenumber"
                  className="inline-block mb-2 text-sm font-medium text-white sm:text-base"
                  type="text"
                  id="Telephone"
                  placeholder="Enter contact number"
                  required
                  name="contact"
                  value={query.contact}
                  onChange={handleChange()}
                >
                  Tel
                </label>
                <input
                  name="Contact"
                  className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  type="text"
                  id="Cover letter"
                  placeholder="Cover Letter"
                  required
                  name="cover"
                  value={query.cover}
                  onChange={handleChange()}
                  className="inline-block mb-2 text-sm font-medium sm:text-base"
                >
                  Cover Note
                </label>
                <textarea
                  name="Cover Note"
                  className="w-full h-64 px-3 py-2 w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300  "
                ></textarea>
              </div>

              <div className=" ">
                <div className="form-group mt-3">
                  <label className="mr-2">Upload your CV:</label>
                  <input
                    name="file"
                    type="file"
                    onChange={handleFileChange()}
                    className=""
                  />
                </div>
              </div>
              {formStatus ? (
                <div className="text-success mb-2">
                  Your message has been sent.
                </div>
              ) : (
                ""
              )}
              <div className="flex items-center justify-between sm:col-span-2">
                <button
                  type="submit"
                  className="bg-blue-400 p-2 bg-opacity-80 rounded-xl hover:bg-opacity-100"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </Container>
    </>
  );
}
