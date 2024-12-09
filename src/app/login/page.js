"use client";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { loginWithGoogle, loginWithFacebook } = useAuth();
  const router = useRouter();

  const handleGoogleLogin = async () => {
    await loginWithGoogle();
    router.push("/user?section=Datos%20personales");
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-5 w-[350px]">
        <h1 className="text-2xl font-semibold mb-4 text-left">¡Bienvenido!</h1>
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

export default Login;

// const handleFacebookLogin = async () => {
//   await loginWithFacebook();
//   router.push("/user");
// };

{
  /* <p className="text-sm text-gray-500 text-left mb-6">
          Por favor ingresa tu nombre de usuario y contraseña
        </p>

        <input
          type="text"
          placeholder="Nombre de usuario"
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />

        <input
          type="password"
          placeholder="Contraseña"
          className="w-full px-4 py-2 mb-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        /> */
}

{
  /* <button
          onClick={handleFacebookLogin}
          className="w-full flex items-center justify-center px-4 py-2 mb-3 bg-white border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
        >
          <FaFacebook className="mr-2 text-blue-500" />
          Ingresar con Facebook
        </button> */
}

{
  /* <button className="w-full px-4 py-3 mb-3 bg-Verde text-white rounded-lg text-sm hover:bg-green-700">
          Ingresar
        </button> */
}

{
  /* <div className="text-center text-sm text-gray-500 flex flex-col justify-center items-center gap-2">
          <a href="/register" className="hover:underline">
            Registrarse
          </a>
          <a href="/forgot-password" className="hover:underline">
            Olvide mi contraseña
          </a>
        </div> */
}
