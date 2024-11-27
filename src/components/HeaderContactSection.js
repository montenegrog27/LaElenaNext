import React from "react";
import Image from "next/image";
import portadaContact from "@/app/assets/images/portadaContact.png";
import imageContact from "@/app/assets/images/imageContact.png";

function HeaderContactSection() {
  return (
    <div className="relative mt-16 md:mt-28">
      <Image
        src={portadaContact}
        alt="Portada de Contacto"
        layout="responsive"
        width={1200}
        height={600}
        className="w-full h-auto object-cover"
      />

      <div className="container mx-auto px-4 md:px-[100px] py-8 lg:py-16 grid lg:grid-cols-3 gap-12 relative md:-mt-72">
        <Image
          src={imageContact}
          alt="Imagen de Contacto"
          width={400}
          height={300}
          className="hidden md:col-span-2 md:flex items-center justify-center  rounded-lg  md:mt-96 2xl:mt-80 w-[80%] h-auto"
        />

        <div className="relative">
          <div className="bg-Blanco10 p-8 rounded-lg shadow-md border border-gray-300 lg:col-start-3 -mt-12">
            <h2 className="text-2xl font-semibold mb-4">
              ¡Déjanos tu consulta!
            </h2>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Nombre y Apellido"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="text"
                placeholder="Número de contacto"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <input
                type="email"
                placeholder="Mail de contacto"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <textarea
                placeholder="Mensaje"
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 resize-none overflow-y-auto"
                rows="4"
              ></textarea>
              <div className="flex justify-end items-center">
                <button
                  type="submit"
                  className="bg-GrisClaro px-10 py-4 shadow-md text-white rounded-xl hover:bg-gray-600 transition"
                >
                  Enviar
                </button>
              </div>
            </form>
          </div>

          <div className="mt-6 ml-2">
            <h1 className="text-SubtituloH1 font-Bold mb-2  ">¡Contactanos!</h1>
            <p className="text-gray-600 mb-2 text-Bottom leading-5">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-gray-600 mb-2 text-Bottom leading-5">
              Lorem ipsum dolor sit amet
            </p>
            <p className="text-gray-600 mb-2 text-Bottom leading-5">
              Lorem ipsum dolor sit amet
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContactSection;
