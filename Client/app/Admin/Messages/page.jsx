import React from "react";

const page = () => {
  const sampleMessages = [
    {
      name: "John Doe",
      email: "john@example.com",
      subject: "Website Feedback",
      message: "I love your website! It's very clean and user-friendly.",
      date: "2025-06-14",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Order Issue",
      message: "I didn’t receive confirmation for my order placed yesterday.",
      date: "2025-06-13",
    },
    {
      name: "Amal Perera",
      email: "amalp@gmail.com",
      subject: "Partnership",
      message: "Are you open to collaborating on a food blog feature?",
      date: "2025-06-12",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      subject: "Website Feedback",
      message: "I love your website! It's very clean and user-friendly.",
      date: "2025-06-14",
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      subject: "Order Issue",
      message: "I didn’t receive confirmation for my order placed yesterday.",
      date: "2025-06-13",
    },
    {
      name: "Amal Perera",
      email: "amalp@gmail.com",
      subject: "Partnership",
      message: "Are you open to collaborating on a food blog feature?",
      date: "2025-06-12",
    },
  ];
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 mt-8">
        {/* Search Bar */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800">
          Contact Form Messages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sampleMessages.map((msg, index) => (
            <div
              key={index}
              className="bg-white  rounded-lg p-5 border-1 border-gray-300"
            >
              <h3 className="text-lg font-semibold text-gray-800">
                {msg.subject}
              </h3>
              <p className="text-sm text-gray-600 mb-1">
                From: <span className="font-medium">{msg.name}</span>
              </p>
              <p className="text-sm text-gray-600 mb-1">
                Email:{" "}
                <a
                  href={`mailto:${msg.email}`}
                  className="text-orange-500 underline"
                >
                  {msg.email}
                </a>
              </p>
              <p className="text-sm text-gray-600 mb-2">Date: {msg.date}</p>
              <p className="text-gray-700 text-sm">{msg.message}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
