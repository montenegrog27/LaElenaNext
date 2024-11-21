import React from "react";
import { HiOutlineMapPin } from "react-icons/hi2";
import { LuPhone } from "react-icons/lu";

import logoSelftech from "@/app/assets/logo/logoself.png";
import logo from "@/app/assets/logo/logo.png";
import Image from "next/image";

function FooterWeb() {
  return (
    <footer className="w-full py-4 z-10 relative bg-VerdeFooterGradiente text-white -bottom-10 p-5 lg:p-10 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        <div className="flex items-center justify-center md:justify-start">
          <Image src={logo} alt="logo" width={150} height={150} />
        </div>

        <div className="text-start flex justify-center items-start gap-3 flex-col">
          <h3 className="font-bold text-center md:text-left">Contáctanos</h3>
          <div className="flex items-center justify-center md:justify-start space-x-2">
            <LuPhone />
            <span>0341 456-6676</span>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-1">
            <HiOutlineMapPin className="h-5 w-5" />
            <span>Av. Pres. Perón 7299, Rosario Santa Fe</span>
          </div>
        </div>

        <div className="text-start flex justify-center items-start gap-3 flex-col">
          <h3 className="font-bold text-center md:text-left">Secciones</h3>
          <ul className="space-y-1 text-center md:text-left">
            <li>
              <a href="#" className="hover:underline">
                Categorías
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Staff
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Historia
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contacto
              </a>
            </li>
          </ul>
        </div>

        <div className="flex justify-center md:justify-start">
          <Image
            src={logoSelftech}
            alt="logoSelfTech"
            width={150}
            height={150}
          />
        </div>
      </div>
    </footer>
  );
}

export default FooterWeb;
