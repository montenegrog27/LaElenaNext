import React from "react";
import misionVision from "@/app/assets/images/misionVision.png";
import Image from "next/image";
function MisionVision() {
  return (
    <div className="flex flex-col justify-between items-center px-5 py-[34px]  md:py-[40px] md:px-[100px] bg-Blanco10 gap-[24px] md:gap-[40px]">
      <div className="flex mb-10 lg:mb-0 flex-col md:flex-row text-start md:justify-between md:items-center gap-3 md:gap-[70px] w-full ">
        <Image src={misionVision} width={614} height={234} alt="image1" className="object-cover w-auto h-[200px] md:w-[614px] md:h-[234px]"/>
        <div>
          <h3 className="text-SubtituloH1 text-Verde font-GothamBold">
            Seriedad y trayectoria
          </h3>
          <p className="w-auto md:h-[189px] text-BodySMobile md:text-Body">
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

      <div className="flex flex-col-reverse md:flex-row text-start md:justify-between md:items-center gap-3 md:gap-[70px] w-full ">
        <div>
          <h3 className="text-SubtituloH1 text-Verde font-GothamBold">
          Nuestra visión
          </h3>
          <p className="w-auto md:h-[189px] text-BodySMobile md:text-Body">
          Entregar en tiempo y forma la gama completa de productos y servicios a nuestros clientes creciendo y desarrollándonos a la par con la conjunción justa de gran empresa qué mantiene sus raíces de empresa familiar. En tiempo y forma significa cumplir con los requerimientos de nuestros clientes en cuanto a entrega, asesoramiento, atención, calidad y buen precio; manteniendo la calidez humana y empatía qué siempre nos caracterizó.
          </p>
        </div>
        <Image src={misionVision} width={614} height={234} alt="image1" className="object-cover w-auto h-[200px] md:w-[614px] md:h-[234px]"/>
      </div>
    </div>
  );
}

export default MisionVision;
