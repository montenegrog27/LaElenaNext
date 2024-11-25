"use client";
import FooterWeb from "@/components/FooterWeb";
import Image from "next/image";
import misionVision from "../assets/images/misionVision.png";

import React, { useState } from "react";
import {
  FaGraduationCap,
  FaBriefcase,
  FaAward,
  FaLightbulb,
  FaRocket,
} from "react-icons/fa";

const timelineData = [
  {
    id: 1,
    date: "1924",
    title: "Con un ladrillo comienza esta historia",
    image: misionVision,
    description:
      "Todo comenzó en 1924 con un simple ladrillo. Don Augusto Bortolutti, un inmigrante italiano oriundo de Udine, llegó a Argentina huyendo de la guerra. Junto a un grupo de amigos, recorrió el país en busca de oportunidades hasta que encontró un campo que necesitaba construir un chalet. Fue allí donde fabricó sus primeros ladrillos, dando inicio a lo que sería una gran empresa familiar.",
  },
  {
    id: 2,
    date: "1943",
    title: "Ladrillo a ladrillo",
    image: misionVision,
    description:
      "Don Augusto se muda a un barrio moderno y trabajaba allí como peón hasta que logró comprar dos hectáreas de campo. En los 10 años siguientes, adquirió dos predios más para instalar más fábricas de ladrillos de barro. En 1943 fue donde Don Remo, a sus 8 años, y su hermano Pío comenzaron a trabajar en la empresa y aprender el oficio junto a su padre.",
  },
  {
    id: 3,
    date: "1945",
    title: "Somos parte de la historia de Rosario",
    image: misionVision,
    description:
      "En 1943, La Elena S.A. ya había dejado su huella al ser la proveedora de ladrillos para la construcción original del Monumento Nacional a la Bandera. Seis décadas después, en 1993, volvió a ser la encargada de abastecer con materiales para la última restauración de este ícono máximo de los rosarinos y monumento histórico visitado por turistas de todo el mundo. Asimismo, en 1945, la empresa experimentó un crecimiento significativo al adquirir su primer camión, un Dodge 46. Este vehículo permitió optimizar el transporte de ladrillos hacia el centro de la ciudad, dejando atrás los métodos tradicionales como caballos y carretas.",
  },
  {
    id: 4,
    date: "1965",
    title: "El continuo crecimiento",
    image: misionVision,
    description:
      "Mientras los hornos de ladrillos continuaban produciendo, La Elena S.A, se adentró en el comercio de leña y carbón, adquiriendo terrenos adyacentes fundando así el Depósito Bortolutti. Para optimizar la logística y reducir costos, se invirtió en una flota de camiones, incluyendo un acoplado que duplicaba la capacidad de carga. En paralelo, Don Remo impulsó una modernización en los procesos de producción de ladrillos, reemplazando la fuerza animal y el trabajo manual por maquinaria especializada, como tractores y montacargas. Esta transformación tecnológica no solo aumentó la eficiencia, sino que también permitió prestar servicios a otros productores de la región. Así, a fines de los años 60 y principios de los 70, La Elena S.A. consolidó su posición como un referente en la industria de la construcción en Rosario.",
  },
  {
    id: 5,
    date: "1980",
    title: "El inicio de nuestro predio actual",
    image: misionVision,
    description: `A principios de los 80, ante la implementación del IVA, la empresa diversificó su oferta con materiales de construcción, liderando rápidamente el mercado regional gracias a una eficiente estrategia.
En 1989 la empresa adoptó la razón social "La Elena S.A.", en honor a la madre de los fundadores.
Además de continuar con la expansión de sus instalaciones, incorporación de maquinaria y optimización de procesos.
En 1998, se fundó Devol SA, una sociedad dedicada a la comercialización de camiones que le permitió mejorar su distribución. Incluso en la crisis del 2001, invirtió en infraestructura y se adaptó a las tendencias del mercado.`,
  },
  {
    id: 6,
    date: "2024",
    title: "Un siglo de historia",
    image: misionVision,
    description: `En 2024, La Elena S.A. celebra un siglo de trayectoria ininterrumpida. Un siglo marcado por la pasión por la construcción, la innovación y el compromiso con nuestros clientes. Hoy, somos líderes indiscutidos en la región, ofreciendo una amplia gama de productos y servicios para satisfacer todas las necesidades de la industria de la construcción.
Mirando hacia el futuro, La Elena S.A. continúa innovando y creciendo. Actualmente, estamos trabajando en la implementación de una plataforma de comercio electrónico para brindar una experiencia de compra aún más ágil y personalizada a nuestros clientes. Además, la construcción de una nueva planta de hormigón nos permitirá ampliar nuestra oferta de productos y servicios, consolidando nuestro liderazgo en el mercado.`,
  },
];

function History() {
  return (
    <>
      <div className="container mx-auto px-4 my-36 w-full">
        <div className="relative z-20">
          <h1 className="text-lg md:text-3xl font-bold mb-8 text-center bg-white lg:bg-transparent z-11 border-4 border-VerdeOscuro rounded-xl lg:border-0">
            Somos La Elena y esta es nuestra historia
          </h1>
        </div>
        <div className="relative wrap overflow-hidden px-0 md:px-[100px] h-full w-full ">
          <div
            id="raya"
            className="fixed top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 bg-VerdeOscuro -ml-1 md:left-40 md:ml-5 z-0"
          ></div>
          {timelineData.map((milestone, index) => (
            <div
              key={milestone.id}
              className="mb-8 flex justify-start items-center w-full flex-col md:flex-row gap-10  "
            >
              {/* <div className="order-1 "></div> */}
              <div className="z-6 flex items-center left-40 order-1 bg-VerdeOscuro shadow-xl w-4 h-6 md:w-8 md:h-8 rounded-full min-w-fit p-2 absolute">
                <h1 className="mx-auto font-semibold text-BodyMobile md:text-lg px-2 text-white">
                  {milestone.date}
                </h1>
              </div>
              <div className="order-1 flex flex-col md:flex-row justify-center items-center md:items-start gap-5 px-4 md:px-6 py-4 rounded-lg shadow-xl bg-VerdeOscuro text-white md:ml-48 z-10 mt-10 md:mt-0">
                <Image
                  src={milestone.image}
                  width={500}
                  height={450}
                  alt="imageHistory"
                  className="object-cover w-64 md:w-96 h-36 md:h-60 rounded-md"
                />
                <div>
                  <h3 className="mb-3 font-bold text-TitulosXSMobile md:text-xl">
                    {milestone.title}
                  </h3>
                  <p className="text-xs md:text-sm leading-snug tracking-wide text-opacity-100">
                    {milestone.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <FooterWeb />;
    </>
  );
}

export default History;
