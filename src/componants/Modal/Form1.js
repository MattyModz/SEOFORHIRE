import axios from "axios";
import { useState } from "react";
import { motion } from "framer-motion";
import Container from "../container";
import Link from "next/link";
export default function Formone() {
  const GETFORM_FORM_ENDPOINT =
    "https://getform.io/f/dcb812c1-ae90-4016-871f-32f0a3b6d83e";
  const [formStatus, setFormStatus] = useState(false);

  const [queryhire, setQueryhire] = useState({
    name: "",
    company: "",
    email: "",
    contact: "",
    salary: "",
    niche: "",
    requirements: "",
    experience: "",
  });

  const handleFileChange = () => (e) => {
    setQueryhire((prevState) => ({
      ...prevState,
      files: e.target.files[0],
    }));
  };

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQueryhire((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(queryhire).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(GETFORM_FORM_ENDPOINT, formData, {
        headers: { Accept: "application/json" },
      })
      .then(function (response) {
        setFormStatus(true);
        setQueryhire({
          name: "",
          company: "",
          email: "",
          contact: "",
          salary: "",
          niche: "",
          requirements: "",
          experience: "",
        });
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <Container className="border-4 border-red-400">
      <div>
        <div>
          <form
            acceptCharset="UTF-8"
            method="POST"
            enctype="multipart/form-data"
            id="ajaxForm"
            onSubmit={handleSubmit}
            className=" grid  w-full gap-4 mx-auto sm:grid-cols-2   font-bold "
            style={formStatus ? { display: "none" } : { display: "" }}
            exit={{ opacity: 0 }}
          >
            <div>
              <label
                for="name"
                className="inline-block mb-2 font-bold text-sm font-medium text-white0 sm:text-base"
              >
                Name
              </label>
              <input
                name="name"
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                type="text"
                id="InputName"
                placeholder="Name"
                required
                value={queryhire.name}
                onChange={handleChange()}
              />
            </div>
            <div>
              <label
                for="Company"
                className="inline-block mb-2 font-bold text-sm font-medium text-white sm:text-base"
              >
                Company
              </label>
              <input
                type="text"
                id="Inputcompany"
                placeholder="Company"
                required
                name="company"
                value={queryhire.company}
                onChange={handleChange()}
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>
            <div>
              <label
                for="first-name"
                className="inline-block mb-2 font-bold text-sm font-medium  sm:text-base"
              >
                Email
              </label>
              <input
                type="email"
                id="InputEmail"
                aria-describedby="emailHelp"
                placeholder="Email Address"
                required
                name="email"
                value={queryhire.email}
                onChange={handleChange()}
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
              />
            </div>
            <div>
              <label
                for="Telephonenumber"
                className="inline-block mb-2 font-bold text-sm font-medium text-white sm:text-base"
              >
                Tel
              </label>
              <input
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                type="text"
                id="contact"
                placeholder="Contact number"
                required
                name="contact"
                value={queryhire.contact}
                onChange={handleChange()}
              />
            </div>
            <div>
              <label
                for="Telephonenumber"
                className="inline-block mb-2 font-bold text-sm font-medium text-white sm:text-base"
              >
                salary range
              </label>
              <select
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                type="text"
                id="salary"
                required
                name="salary"
                value={queryhire.salary}
                onChange={handleChange()}
              >
                <option value="25">£25k</option>
                <option value="30">£30k</option>
                <option value="35">£35k</option>
                <option value="40">£40k</option>
                <option value="45">£45k</option>
                <option value="50">£50k</option>
                <option value="55">£55k</option>
                <option value="60">£60k</option>
                <option value="65">£65k</option>
                <option value="70">£70k</option>
                <option value="75">£75k</option>
              </select>
            </div>
            <div className="sm:block hidden">
              <br />
              <br />
            </div>
            <div>
              <label
                for="Telephonenumber"
                className="inline-block mb-2 font-bold text-sm font-medium text-white sm:text-base"
              >
                Niche / specialism
              </label>
              <input
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                type="select"
                id="niche"
                placeholder="specialism / niche?"
                required
                name="niche"
                value={queryhire.niche}
                onChange={handleChange()}
              ></input>
            </div>
            <div className="sm:block hidden">
              <br />
              <br />
            </div>
            <div>
              <label
                for="Telephonenumber"
                className="inline-block mb-2 font-bold text-sm font-medium text-white sm:text-base"
              >
                Years of experience required
              </label>
              <select
                className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
                type="select"
                id="experience"
                required
                name="experience"
                value={queryhire.experience}
                onChange={handleChange()}
              >
                <option value="1 year">Apprentice</option>
                <option value="2 year">1+ years experience </option>
                <option value="3 year ">3+ years experience </option>
                <option value="5 year">5+ years experience</option>
                <option value="8 year">8+ years experience</option>
                <option value="10 year">10+ years experience</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label className="inline-block font-bold mb-2 text-sm font-medium sm:text-base">
                Additional requirements
              </label>
              <textarea
                className="w-full  h-64 px-3 py-2 w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300  "
                type="text"
                id="Requirements"
                placeholder="Describe your perfect candidate"
                required
                name="requirements"
                value={queryhire.requirements}
                onChange={handleChange()}
              ></textarea>
            </div>

            <div className="py-8 flex items-center justify-between sm:col-span-2">
              <button
                className="learn-more rounded-full bg-white bg-opacity-50 "
                type="submit"
              >
                <span
                  className="circle border-2 border-opacity-50"
                  aria-hidden="true"
                >
                  <span className="icon arrow"></span>
                </span>
                <span className="button-text">Hire</span>
              </button>
            </div>
          </form>
        </div>
        <div style={formStatus ? { display: "" } : { display: "none" }}>
          <Link href={"/About"}>
            <h2>Your enquiry has been succesfully submitted</h2>
          </Link>
        </div>
      </div>
    </Container>
  );
}

// {
//   `presubmit  font-bold ${setFormStatus(true, "submitted")}`;
// }
// <div style={formStatus ? { display: "" } : { display: "none" }}>
//   <h2>Your application has been succesfully submitted</h2>
// </div>;
