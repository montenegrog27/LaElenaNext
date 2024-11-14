import React from "react";
import misionVision from "@/app/assets/images/misionVision.png";
import Image from "next/image";
function MisionVision() {
  return (
    <div className="flex flex-col justify-center items-center p-10 bg-Blanco10">
      <div className="flex justify-between items-center gap-10">
        <Image src={misionVision} width={"100%"} height={"100%"} alt="image1" />
        <div>
          <h3 className="text-SubtituloH1 text-Verde font-GothamBold">
            Seriedad y trayectoria
          </h3>
          <p>
            Entregar en tiempo y forma la gama completa de productos y servicios
            a nuestros clientes creciendo y desarrollándonos a la par con la
            conjunción justa de gran empresa qué mantiene sus raíces de empresa
            familiar. En tiempo y forma significa cumplir con los requerimientos
            de nuestros clientes en cuanto a entrega, asesoramiento, atención,
            calidad y buen precio; manteniendo la calidez humana y empatía qué
            siempre nos caracterizó.
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-10">
        <div>
          <h3 className="text-SubtituloH1 text-Verde font-GothamBold">
            Seriedad y trayectoria
          </h3>
          <p>
            Entregar en tiempo y forma la gama completa de productos y servicios
            a nuestros clientes creciendo y desarrollándonos a la par con la
            conjunción justa de gran empresa qué mantiene sus raíces de empresa
            familiar. En tiempo y forma significa cumplir con los requerimientos
            de nuestros clientes en cuanto a entrega, asesoramiento, atención,
            calidad y buen precio; manteniendo la calidez humana y empatía qué
            siempre nos caracterizó.
          </p>
        </div>
        <Image src={misionVision} width={"100%"} height={"100%"} alt="image1" />
      </div>
    </div>
  );
}

export default MisionVision;
