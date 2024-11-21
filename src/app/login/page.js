"use client";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation"; // Importar useRouter
import { HiOutlineUserCircle } from "react-icons/hi2";

const Login = () => {
  const { user, loginWithGoogle, logout } = useAuth();
  const router = useRouter();

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    router.push("/user"); // Redirige a "/user" después de iniciar sesión
  };

  const handleCancel = () => {
    router.push("/"); // Redirige a "/" al cancelar
  };

  return (
    <div>
      {user ? (
        <button
          onClick={() => {
            logout();
            router.push("/");
          }}
          className="flex items-center bg-white p-2 text-black rounded"
        >
          <HiOutlineUserCircle className="h-5 w-5 mr-2" />
          Cerrar sesión
        </button>
      ) : (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-96">
            <h2 className="text-xl font-semibold">Iniciar sesión</h2>

            {/* Botón de Iniciar sesión con Google */}
            <button
              onClick={handleGoogleLogin}
              className="bg-red-500 text-white w-full p-2 rounded mt-4 flex justify-center items-center"
            >
              <HiOutlineUserCircle className="h-5 w-5 mr-2" />
              Iniciar sesión con Google
            </button>

            {/* Botón de Cancelar */}
            <button
              onClick={handleCancel}
              className="bg-gray-400 text-white w-full p-2 rounded mt-2 flex justify-center items-center"
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
