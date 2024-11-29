import React from "react";
import Image from "next/image";
import parse from "html-react-parser"; // Importa el parser

const EmployeeCard = ({ name, role, image }) => {
  return (
    <div className="border rounded-lg h-auto w-full sm:w-[160px] sm:h-[275px] md:w-[190px] md:h-[275px] flex flex-col justify-center items-center shadow-custom-card">
      {image ? (
        <Image
          src={image}
          alt={name}
          width={190}
          height={190}
          className="object-cover w-28 h-28 md:h-[190px] md:w-[190px] sm:w-full sm:h-full rounded-t-md"
        />
      ) : (
        <span className="text-gray-500">Sin Imagen</span>
      )}
      <div className="p- h-auto sm:h-24">
        <h3 className="font-bold text-gray-700 text-center text-sm sm:text-base">
          {name}
        </h3>
        <div className="text-gray-500 text-xs sm:text-sm text-center w-28 lg:w-36 ">
          {parse(role)}
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
