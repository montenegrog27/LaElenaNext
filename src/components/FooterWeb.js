import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";

import logoSelftech from "@/app/assets/logo/logoself.png";
import logo from "@/app/assets/logo/logo.png";
import Image from "next/image";

function FooterWeb() {
  return (
    <footer className="w-full  py-[32px] px-[16px] z-10 relative bg-VerdeFooterGradiente text-white -bottom-10 md:py-[50px] md:px-[100px] ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between md-gap-[127px] items-start gap-[16px] w-full ">
        <div className="flex flex-col-reverse md:flex-row items-start justify-start md:justify-center gap-[16px] w-full ">
          <div
            id="logo-la-elena"
            className="flex items-center justify-center md:justify-start w-1/2"
          >
            <Image
              src={logo}
              alt="logo"
              width={"100%"}
              height={"100%"}
              className="w-[209px] h-[40px] md:w-[302px] md:h-[58px] "
            />
          </div>

          <div className="flex flex-col md:flex-row items-start  justify-center md:justify-around gap-[16px] w-full ">
            <div
              id="contactanos"
              className="text-start flex justify-center items-start gap-3 flex-col"
            >
              <h3 className="font-Bold text-center md:text-left">
                Contáctanos
              </h3>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <LuPhone className="h-6 w-6" />
                <span>0341 456-6676</span>
              </div>
              <div className="flex items-center h-[42px] w-[210px] justify-center md:justify-start space-x-2 mt-1">
                <HiOutlineMapPin className="h-6 w-6" />
                <span className="h-[42px] w-[210px]">
                  Av. Pres. Perón 7299 Rosario Santa Fe
                </span>
              </div>
            </div>

            <div
              id="secciones"
              className="text-TitulosXSMobile  text-left flex justify-center items-start gap-3 flex-col mr-[50px]"
            >
              <h3 className="font-Bold text-left">Secciones</h3>
              <ul className="space-y-1 text-center md:text-left">
                <li className="text-left">
                  <a href="/" className="hover:underline font-Regular">
                    Categorías
                  </a>
                </li>
                <li className="text-left">
                  <a href="/staff" className="hover:underline font-Regular">
                    Staff
                  </a>
                </li>
                <li className="text-left">
                  <a href="/history" className="hover:underline">
                    Historia
                  </a>
                </li>
                <li className="text-left">
                  <a href="/contact" className="hover:underline">
                    Contacto
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          id="logo-selftech"
          className="flex justify-start md:justify-end w-[250px]"
        >
          <Image
            src={logoSelftech}
            alt="logoSelfTech"
            width={"100%"}
            height={"100%"}
            className="w-[115px] h-[40px] md:w-[195px] md:h-[67px]"
          />
        </div>
      </div>
    </footer>
  );
}

export default FooterWeb;
