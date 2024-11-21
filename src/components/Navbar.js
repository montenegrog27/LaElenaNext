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
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-VerdeNavbarradiente text-white px-2 md:px-4 py-2 fixed top-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Image
          src={logo}
          alt="Logo"
          width={"100%"}
          height={"100%"}
          className="hidden md:block h-10"
        />
        <Image
          src={logoMobile}
          alt="LogoMobile"
          width={"100%"}
          height={"100%"}
          className="md:hidden h-10"
        />

        <input
          type="text"
          placeholder="Buscar productos, marcas y más"
          className="p-2 mx-2 md:mx-0 rounded bg-white text-black w-full h-[90%] md:h-auto md:w-1/3 "
        />

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center p-2 text-white"
        >
          {isMenuOpen ? (
            <AiOutlineClose size={24} />
          ) : (
            <AiOutlineMenu size={24} />
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
            >
              Iniciar Sesión
            </Link>
          )}
          <button className=" md:flex items-center bg-VerdeOscuro md:bg-white p-1 rounded-full md:p-2 text-white md:text-black md:rounded">
            <CiShoppingCart className=" w-7 h-7 md:h-5 md:w-5 md:mr-2" />
            <p className="hidden md:block">Carrito</p>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden flex flex-col bg-VerdeNavbarradiente text-white p-4 space-y-4">
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
          {/* <button className="flex items-center bg-white p-2 text-black rounded">
            <CiShoppingCart className="h-5 w-5 mr-2" />
            Carrito
          </button> */}
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
