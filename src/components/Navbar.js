import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/logo/logo.png";
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => (
  <nav className="bg-VerdeNavbarradiente text-white px-4 py-2">
    <div className="container mx-auto flex justify-between items-center">
      <Image
        src={logo}
        alt="Logo"
        width={"100%"}
        height={"100%"}
        className="h-10"
      />

      <input
        type="text"
        placeholder="Buscar productos, marcas y más"
        className="p-2 rounded bg-white text-black w-1/3"
      />

      <div className="flex space-x-4">
        <button className="flex items-center bg-white p-2 text-black rounded">
          <HiOutlineUserCircle className="h-5 w-5 mr-2" />
          Iniciar Sesión
        </button>
        <button className="flex items-center bg-white p-2 text-black rounded">
          <CiShoppingCart className="h-5 w-5 mr-2" />
          Carrito
        </button>
      </div>
    </div>

    <div className="container mx-auto mt-4 flex justify-around space-x-6 text-sm ">
      <button className="hover:underline flex-1">
        <div className="flex justify-center items-center ">
          <p>Todas las categorías</p>
          <IoMdArrowDropdown className="h-5 w-5 ml-2 mt-1 " />
        </div>
      </button>
      <div className=" flex-1 flex justify-start gap-3">
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
          href="/staff"
          className="font-GothamBold hover:bg-Blanco10 hover:text-black transition-transform px-2 py-1 rounded"
        >
          Clientes verificados
        </Link>
      </div>
    </div>
  </nav>
);

export default Navbar;
