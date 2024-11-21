import Image from "next/image";
import React from "react";

function TimelineEvent({ year, title, content, image }) {
  return (
    <div className="relative flex items-start md:items-center">
      {/* Año con círculo */}
      <div className="flex flex-col items-center md:items-start relative">
        <div className="bg-green-900 text-white w-20 h-20 md:w-24 md:h-24 flex items-center justify-center text-2xl md:text-3xl font-bold rounded-full z-10">
          {year}
        </div>
        {/* Línea vertical */}
        <div className="w-1 h-full bg-green-900 hidden md:block absolute top-24 left-10"></div>
      </div>

      {/* Contenedor del evento */}
      <div className="bg-white border border-green-900 rounded-lg shadow-lg p-6 md:ml-16 flex flex-col md:flex-row items-start">
        {/* Imagen */}
        <Image
          src={image}
          alt={`Evento del año ${year}`}
          width={400}
          height={400}
          className="w-28 h-28 md:w-36 md:h-36 object-cover rounded-md mr-0 md:mr-6 mb-4 md:mb-0 flex-shrink-0"
        />
        {/* Texto */}
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-green-900">
            {title}
          </h2>
          <p className="mt-2 text-sm md:text-base text-gray-700 leading-relaxed">
            {content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TimelineEvent;
