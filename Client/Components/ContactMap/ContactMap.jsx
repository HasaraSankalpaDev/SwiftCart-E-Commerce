import React from "react";

const ContactMap = () => {
  return (
    <div className="mx-6 px-2 py-2 border-2 border-gray-400 rounded-sm">
      {" "}
      <iframe
        className="w-full h-full border-0"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63322.98193895035!2d79.8296746377282!3d6.927078957873396!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25925c291eb41%3A0x6f3b31024810a92b!2sColombo!5e0!3m2!1sen!2slk!4v1712222222222"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactMap;
