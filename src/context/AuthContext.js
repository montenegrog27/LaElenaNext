"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../lib/firebaseConfig";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Mueve estas funciones arriba para que estén disponibles antes de ser llamadas
  const verifyUserInWordPress = async (email) => {
    try {
      // Realiza una solicitud GET a tu endpoint para verificar el cliente
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/checkCustomers`,
        {
          params: { email },
        }
      );

      console.log("Cliente verificado:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al verificar el usuario en WordPress:", error);
    }
  };

  const createUser = async (email) => {
    try {
      // Realiza una solicitud GET a tu endpoint para crear el usuario
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/createUser`,
        {
          params: { email },
        }
      );

      console.log("Cliente creado:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error al crear el usuario en WordPress:", error);
    }
  };
  const createToken = async (email) => {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/createToken`, // Cambié GET por POST
        { email }, // Envía el email como parte del cuerpo de la solicitud
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("token creado:", response.data);
      const token = response.data.token;

      // Almacenar token y datos del usuario
      localStorage.setItem("wordpressUserToken", token);
      return token;
    } catch (error) {
      console.error("Error al crear token:", error);
    }
  };

  const loginWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);

      const email = result.user.email;

      // Verificar si el email es usuario en WordPress
      const verify = await verifyUserInWordPress(email);
      console.log("respuesta de la verificacion", verify);
      if (verify.email) {
        localStorage.setItem("wordpressUserEmail", verify.email);
        localStorage.setItem("wordpressUserId", verify.userId);
        return verify.email;
      }
      if (verify.exists === false) {
        console.log("entra aca a crear el usuario");
        const createUserResponse = await createUser(email);
        console.log(
          "user creado para guardar en localStorage",
          createUserResponse
        );
        localStorage.setItem(
          "wordpressUserEmail",
          createUserResponse.userCreated.email
        );
        localStorage.setItem(
          "wordpressUserId",
          createUserResponse.userCreated.id
        );

        return createUserResponse.userCreated.email;
      }
      return verify;
    } catch (error) {
      console.error("Error al iniciar sesión con Google:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loginWithGoogle,
        logout,
        verifyUserInWordPress,
        createUser,
        createToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
