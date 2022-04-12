import axios from "axios";
import { useState } from "react";

export default function Form() {
  const GETFORM_FORM_ENDPOINT =
    "https://getform.io/f/70804196-fb2a-48d6-a04f-50bcbd17b5eb";
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
    <form
      acceptCharset="UTF-8"
      method="POST"
      enctype="multipart/form-data"
      id="ajaxForm"
      onSubmit={handleSubmit}
      className=" grid  max-w-3xl gap-4 mx-auto sm:grid-cols-2 "
      style={{ display: formStatus ? "none" : "" }}
    >
      <div>
        <label
          for="first-name"
          className="inline-block mb-2 text-sm font-medium text-white0 sm:text-base"
        >
          First name
        </label>
        <input
          name="firstname"
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          type="text"
          id="InputfirstName"
          placeholder="Enter your name"
          required
          value={query.firstname}
          onChange={handleChange()}
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
        >
          Tel
        </label>
        <input
          className="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"
          type="text"
          id="Telephone"
          placeholder="Enter contact number"
          required
          name="contact"
          value={query.contact}
          onChange={handleChange()}
        />
      </div>
      <div className="sm:col-span-2">
        <label className="inline-block mb-2 text-sm font-medium sm:text-base">
          Cover Note
        </label>
        <textarea
          className="w-full h-64 px-3 py-2 w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300  "
          type="text"
          id="Cover letter"
          placeholder="Cover Letter"
          required
          name="cover"
          value={query.cover}
          onChange={handleChange()}
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
      <div className="flex items-center justify-between sm:col-span-2">
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
          <span className="button-text">Apply</span>
        </button>
        <div
          className=""
          style={{
            display: formStatus ? (
              ""
            ) : (
              <h2>Your Application has been has been succesfully submitted</h2>
            ),
          }}
        ></div>
      </div>
    </form>
  );
}
