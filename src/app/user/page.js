"use client";

import { useAuth } from "@/context/AuthContext";
import PrivateRoute from "@/components/PrivateRoute";

const UserPage = () => {
  const { user, logout } = useAuth();

  return (
    <PrivateRoute>
      <div>
        <h1>Bienvenido, {user?.email}!</h1>
        <button onClick={logout}>Cerrar sesión</button>
      </div>
    </PrivateRoute>
  );
};

export default UserPage;
