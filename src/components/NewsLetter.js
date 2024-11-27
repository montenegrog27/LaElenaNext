import React from "react";
import imagenN from "../app/assets/images/imagenNewsLetter.png";

function NewsLetter() {
  return (
    <div
      className="relative bg-cover bg-center h-48 flex items-center justify-center w-full  shadow-lg"
      style={{ backgroundImage: `url(${imagenN.src})` }}
    >
      <div className="md:w-[80%] 2xl:w-[70%] flex justify-end items-end">
      <div className=" bg-opacity-70 p-6 md:p-0 w-full max-w-md flex flex-col justify-center items-end ">
        <h2 className="text-white text-lg font-semibold mb-3 text-center">
          Subscribite a nuestro newsletter
        </h2>
        <div className="flex w-full justify-center gap-4">
          {" "}
          <input
            type="email"
            placeholder="Mail"
            className="flex-1 p-2 rounded-lg border-none outline-none focus:ring-2 shadow-lg focus:ring-green-500"
          />
          <button className="bg-Verde text-white px-4 rounded-lg shadow-lg hover:bg-green-700 transition">
            Enviar
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}

export default NewsLetter;
