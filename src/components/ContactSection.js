import React from "react";
import portadaContact from "@/app/assets/images/portadaContact.png";
import imageContact from "@/app/assets/images/imageContact.png";
import newsletterImage from "@/app/assets/images/newsletterImage.png";
import Image from "next/image";

function ContactSection() {
  return (
    <div>
      <Image
        src={portadaContact}
        alt="portadaContact"
        width={"100%"}
        height={"100%"}
      />

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-3 gap-12">
        <div className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-300">
          <h2 className="text-2xl font-semibold mb-4">¡Déjanos tu consulta!</h2>
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

        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <Image
            src={imageContact}
            alt="Contact"
            width={"100%"}
            height={"100%"}
            className="rounded-lg mb-6 shadow-lg"
          />
          <h2 className="text-2xl font-bold">¡Contáctanos!</h2>
          <p className="text-gray-700 mt-4">Lorem ipsum dolor sit amet</p>
          <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
          <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
        </div>

        <div
          className="relative bg-cover bg-center h-48 rounded-lg flex items-center justify-center shadow-lg"
          style={{ backgroundImage: `url(${newsletterImage})` }}
        >
          <div className="bg-green-900 bg-opacity-70 p-6 rounded-lg w-full max-w-md flex flex-col items-center">
            <h2 className="text-white text-lg font-semibold mb-3">
              Subscribite a nuestro newsletter
            </h2>
            <div className="flex w-full">
              <input
                type="email"
                placeholder="Mail"
                className="flex-1 p-2 rounded-l-lg border-none outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="bg-green-600 text-white px-4 rounded-r-lg hover:bg-green-700 transition">
                Enviar
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12">
        <div className="bg-gray-200 h-80 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Ubicación"
            src="https://www.google.com/maps/embed?pb=!1m18..."
            className="w-full h-full border-0"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-4">Encontranos en...</h2>
          <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
          <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
          <p className="text-gray-700">Lorem ipsum dolor sit amet</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
