import React from "react";
import misionVision from "@/app/assets/images/misionVision.png";
import Image from "next/image";
function MisionVision() {
  return (
    <div className="flex px-[5%] md:px-0 py-[34px] md:py-[40px] justify-center items-center w-full  bg-Blanco10 ">
      <div className="flex flex-col justify-between items-center gap-[24px] md:gap-[40px] md:w-[80%] 2xl:w-[70%]">
        <div className="flex mb-10 lg:mb-0 flex-col lg:flex-row text-start md:justify-between md:items-start gap-3 md:gap-[70px] w-full ">
          <Image
            src={misionVision}
            width={"100%"}
            height={"100%"}
            alt="image1"
            className="object-cover w-auto h-[200px] flex-1 md:h-[35vh] md:w-[100vh]  2xl:h-[30vh] 2xl:w-[80vh] "
          />
          <div>
            <h3 className="text-SubtituloH1 text-Verde font-GothamBold md:leading-[19px] md:mb-4">
              Seriedad y trayectoria
            </h3>
            <p className="w-auto md:h-[189px] text-BodySMobile md:text-[13px] md:leading-[19px] 2xl:text-Body 2xl:leading-[21px]">
              Entregar en tiempo y forma la gama completa de productos y
              servicios a nuestros clientes creciendo y desarrollándonos a la
              par con la conjunción justa de gran empresa qué mantiene sus
              raíces de empresa familiar. En tiempo y forma significa cumplir
              con los requerimientos de nuestros clientes en cuanto a entrega,
              asesoramiento, atención, calidad y buen precio; manteniendo la
              calidez humana y empatía qué siempre nos caracterizó.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse lg:flex-row text-start md:justify-between md:items-start gap-3 md:gap-[70px] w-full ">
          <div>
            <h3 className="text-SubtituloH1 text-Verde font-GothamBold md:leading-[19px] md:mb-4">
              Nuestra visión
            </h3>
            <p className="w-auto md:h-[189px] text-BodySMobile md:text-[13px] md:leading-[19px] 2xl:text-Body 2xl:leading-[21px]">
              Entregar en tiempo y forma la gama completa de productos y
              servicios a nuestros clientes creciendo y desarrollándonos a la
              par con la conjunción justa de gran empresa qué mantiene sus
              raíces de empresa familiar. En tiempo y forma significa cumplir
              con los requerimientos de nuestros clientes en cuanto a entrega,
              asesoramiento, atención, calidad y buen precio; manteniendo la
              calidez humana y empatía qué siempre nos caracterizó.
            </p>
          </div>
          <Image
            src={misionVision}
            width={"100%"}
            height={"100%"}
            alt="image1"
            className="object-cover w-auto h-[200px] flex-1 md:h-[35vh] md:w-[100vh]  2xl:h-[30vh] 2xl:w-[80vh] "
          />
        </div>
      </div>
    </div>
  );
}

export default MisionVision;
