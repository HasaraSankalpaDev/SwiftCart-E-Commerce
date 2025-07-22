import React from "react";

const ContactForm = () => {
  return (
    <div className="mt-8">
      <h2 className="text-3xl font-medium">
        Contact <span className="text-orange-500">Us</span>
      </h2>
      <form className="mt-8">
        <div className="mb-1">
          <label htmlFor="username" className="text-md font-medium">
            User Name
          </label>
          <input
            type="text"
            name="username"
            id="username"
            className="py-2  px-3 outline-2 outline-gray-300 focus:outline-gray-400 p-2 rounded-xs w-full mb-4 mt-2"
            placeholder="Enter Your Name"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="email" className="text-md font-medium">
            Email Address
          </label>
          <input
            type="text"
            name="email"
            id="email"
            className="py-2  px-3 outline-2 outline-gray-300 p-2 rounded-xs w-full mb-4 mt-2focus:outline-gray-40 mt-2"
            placeholder="Enter Your Email Address"
          />
        </div>
        <div className="mb-1">
          <label htmlFor="message" className="text-md font-medium">
            Message
          </label>
          <textarea
            type="text"
            rows={5}
            name="message"
            id="message"
            className="py-2  px-3 outline-2 outline-gray-300 p-2 rounded-xs w-full mb-4 mt-2focus:outline-gray-40 mt-2"
            placeholder="Enter Your Message"
          />
        </div>
        <div className="mb-1">
          <button className="w-full mt-2 bg-orange-500 py-2 rounded-xs text-white hover:bg-orange-600 transition-all duration-400  cursor-pointer">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
