import React from "react";
import Image from "next/image";
import Nav from "@/Components/Nav/Nav";
import Footer from "@/Components/Footer/Footer";

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Nav />
      <div className="text-center mt-12">
        <h1 className="text-4xl font-semibold text-gray-800">
          About <span className="text-orange-500">Us</span>
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="w-full flex justify-center">
            <img
              src="https://images.pexels.com/photos/31236098/pexels-photo-31236098/free-photo-of-cozy-desktop-setup-with-modern-accessories.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="Workstation"
              width={500}
              height={120}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Content Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800">Our Story</h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              quidem dicta voluptatibus exercitationem nisi, ut sapiente saepe
              natus, delectus eius, dolore velit nobis sint? Our Mission Lorem
              ipsum dolor sit, amet consectetur adipisicing elit. Nemo quidem
              dicta voluptatibus exercitationem nisi, ut sapiente saepe natus,
              delectus eius, dolore velit nobis sint?
            </p>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              quidem dicta voluptatibus exercitationem nisi, ut sapiente saepe
              natus, delectus eius, dolore velit nobis sint?
            </p>
            <h3 className="mt-4 font-semibold text-xl"> Our Mission</h3>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
              quidem dicta voluptatibus exercitationem nisi, ut sapiente saepe
              natus, delectus eius, dolore velit nobis sint?
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
