import React from "react";
import historiaPortada from "../app/assets/images/historiaPortada.png";
import Timeline from "./TimelineHistory";
import Image from "next/image";

function HistorySection() {
  return (
    <section className="max-w-7xl mx-auto">
      {/* Imagen de portada */}
      <div className="w-full">
        <Image
          src={historiaPortada}
          alt="Portada Historia La Elena"
          width={400}
          height={400}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Título */}
      <div className="text-center mt-10 mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-green-900 leading-tight">
          Somos La Elena y esta es nuestra historia
        </h1>
      </div>

      {/* Línea de tiempo */}
      <Timeline />
    </section>
  );
}

export default HistorySection;
