import React from "react";
import Image from "next/image";
import portadaContact from "@/app/assets/images/portadaContact.png";
import imageContact from "@/app/assets/images/imageContact.png";

function HeaderContactSection() {
  return (
    <div className="relative">
      <Image
        src={portadaContact}
        alt="Portada de Contacto"
        layout="responsive"
        width={1200}
        height={600}
        className="w-full h-auto object-cover"
      />

      <div className="container mx-auto px-4 py-8 lg:py-16 grid lg:grid-cols-3 gap-12 relative">
        <div className="lg:col-span-2 flex items-center justify-center">
          <Image
            src={imageContact}
            alt="Imagen de Contacto"
            width={400}
            height={300}
            className="rounded-lg shadow-lg"
          />
        </div>

        <div className="relative">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-300 lg:col-start-3 -mt-12">
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
                className="border border-gray-300 p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                rows="4"
              ></textarea>
              <button
                type="submit"
                className="bg-gray-500 text-white py-2 rounded-md hover:bg-gray-600 transition"
              >
                Enviar
              </button>
            </form>
          </div>

          <div className="mt-6">
            <p className="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderContactSection;
