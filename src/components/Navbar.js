"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo/logo.png";
import logoMobile from "@/app/assets/logo/logoMobile.png";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TbUserCircle } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-VerdeNavbarradiente text-white px-[16px] md:px-[50px] py-[16px] fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center gap-[16px]">
        <Image
          src={logo}
          alt="Logo"
          width={"100%"}
          height={"100%"}
          className="hidden md:block h-10 md:h-[43px] md:w-[229px]"
        />
        <Image
          src={logoMobile}
          alt="LogoMobile"
          width={"100%"}
          height={"100%"}
          className="md:hidden h-10"
        />

        <div className="flex flex-row w-full  h-[100%]  md:w-[40%] bg-white rounded justify-start pl-2 items-center">
                <CiSearch className="text-gray-300 h-[24px] w-[24px]  absolute"/>
                <input
                  type="text"
                  placeholder="Buscar productos, marcas y más"
                  className="-ml-1 py-2 pl-[35px] md:mx- rounded bg-white text-black text-BodySMobile md:text-BodyS w-full h-[90%] md:h-auto md:w-full "


                />
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center text-white"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={36} />
          ) : (
            <AiOutlineMenu size={36} />
          )}
        </button>

        <div className="flex space-x-0 md:space-x-4">
          {user ? (
            <button
              onClick={logout}
              className="hidden md:flex items-center bg-white p-2 text-black rounded"
            >
              <HiOutlineUserCircle className="h-5 w-5 mr-2" />
              Cerrar sesión
            </button>
          ) : (
            <Link
              href="/login"
              className="hidden md:flex items-center bg-white p-2 text-black rounded"
            ><TbUserCircle   className="mr-2 w-5 h-5 text-GothamLight text-gray-800"/>
              Iniciar Sesión
            </Link>
          )}
          <button className=" md:flex items-center  md:bg-white p-1 rounded-full md:p-2 text-white md:text-black md:rounded">
            <CiShoppingCart className=" w-[36px] h-[36px] md:h-5 md:w-5 md:mr-2" />
            <p className="hidden md:block">Carrito</p>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col  text-white p-4 space-y-4">
          <Link href="/" className="hover:underline">
            Inicio
          </Link>
          <Link href="/staff" className="hover:underline">
            Staff
          </Link>
          <Link href="/history" className="hover:underline">
            Historia
          </Link>
          <Link href="/contact" className="hover:underline">
            Contacto
          </Link>
          <Link href="/verified" className="hover:underline">
            Clientes Verificados
          </Link>

          {user ? (
            <button
              onClick={logout}
              className="flex items-center bg-white p-2 text-black rounded"
            >
              <HiOutlineUserCircle className="h-5 w-5 mr-2" />
              Cerrar sesión
            </button>
          ) : (
            <Link
              href="/login"
              className="flex items-center bg-white p-2 text-black rounded"
            >
              Iniciar Sesión
            </Link>
          )}

        </div>
      )}

      <div className="hidden md:flex justify-around mt-4 space-x-6 text-sm">
        <button className="hover:underline flex-1">
          <div className="flex justify-center items-center">
            <p>Todas las categorías</p>
            <IoMdArrowDropdown className="h-5 w-5 ml-2 mt-1" />
          </div>
        </button>
        <div className="flex-1 flex justify-start gap-3">
          <Link
            href="/"
            className="hover:bg-Blanco10 hover:text-black transition-transform px-2 py-1 rounded"
          >
            Inicio
          </Link>
          <Link
            href="/staff"
            className="hover:bg-Blanco10 hover:text-black transition-transform px-2 py-1 rounded"
          >
            Staff
          </Link>
          <Link
            href="/history"
            className="hover:bg-Blanco10 hover:text-black transition-transform px-2 py-1 rounded"
          >
            Historia
          </Link>
          <Link
            href="/contact"
            className="hover:bg-Blanco10 hover:text-black transition-transform px-2 py-1 rounded"
          >
            Contacto
          </Link>
          <Link
            href="/verified"
            className="font-GothamBold hover:bg-Blanco10 hover:text-black transition-transform px-2 py-1 rounded"
          >
            Clientes Verificados
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
