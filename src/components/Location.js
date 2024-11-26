import React from "react";

function Location() {
  return (
    <div className="container mx-auto px-6 md:px-[100px] py-16 grid lg:grid-cols-2 gap-12">
      <div className="bg-gray-200 h-80 rounded-lg overflow-hidden shadow-md">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18..."
          className="w-full h-full border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="flex flex-col justify-center md:ml-36">
        <h2 className="text-2xl font-bold mb-4">Encontranos en...</h2>
        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
        <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
      </div>
    </div>
  );
}

export default Location;
