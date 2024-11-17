"use client";
import { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation"; // Cambiar a next/navigation
import { CiShoppingCart } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi2";

const Login = () => {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Manejar el inicio de sesión
  const handleLogin = async () => {
    try {
      await login(email, password);
      router.push("/user");
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión");
    }
  };
  const handleLogout = () => {
    router.push("/"); // Redirige a "/"
    logout(); // Limpia el estado del usuario
  };

  return (
    <>
      {user ? (
        <button
          onClick={handleLogout}
          className="flex items-center bg-white p-2 text-black rounded"
        >
          <HiOutlineUserCircle className="h-5 w-5 mr-2" />
          Cerrar sesión
        </button>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold">Iniciar sesión</h2>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-2 rounded bg-gray-200 text-black w-full my-2"
            />
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="p-2 rounded bg-gray-200 text-black w-full my-2"
            />
            <button
              onClick={handleLogin}
              className="bg-green-500 text-white w-full p-2 rounded mt-4"
            >
              Iniciar sesión
            </button>
            <button
              onClick={() => router.push("/")}
              className=" bg-Blanco20 text-black w-full p-2 rounded mt-4"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
