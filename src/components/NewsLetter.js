// src/components/NewsLetter.js
import React from "react";
import newsletterImage from "@/app/assets/images/newsletterImage.png";

function NewsLetter() {
  return (
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
  );
}

export default NewsLetter;
