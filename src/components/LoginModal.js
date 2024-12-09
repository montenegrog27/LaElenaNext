"use client";
import React, { useEffect, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const LoginModal = ({ isOpen, onClose, onGoogleLogin }) => {
  const { loginWithGoogle, loginWithFacebook } = useAuth();
  const router = useRouter();

  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    onClose();
    router.push("/user?section=Datos%20personales");
  };
  return (
    <div
      className={`fixed top-14 right-0 rounded-lg p-3  z-50 w-full max-w-sm bg-white shadow-lg transform transition-transform duration-700 ${
        isOpen ? "-translate-x-5" : "translate-x-full"
      }`}
      ref={modalRef}
    >
      <div className="flex flex-col justify-center items-center border-b p-1">
        <div className="flex justify-between items-center p- w-full">
          <h2 className="text-2xl text-black font-semibold mb-4 text-left">
            ¡Bienvenido!
          </h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 transition -mt-5"
          >
            ✖
          </button>
        </div>
        <h2 className="text-lg text-black font-semibold w-full text-left pl-">
          Iniciar Sesión
        </h2>
      </div>
      <div className="p-4">
        <button
          onClick={handleGoogleLogin}
          className="w-full flex items-center justify-center px-4 py-2 mb-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
        >
          <FcGoogle className="mr-2" />
          Ingresar con Google
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
