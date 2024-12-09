"use client";

import { useAuth } from "@/context/AuthContext";
import PrivateRoute from "@/components/PrivateRoute";
import UserPersonalDataSection from "@/components/UserPersonalDataSection"; // Importamos el componente
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

const UserPage = () => {
  const { user, logout } = useAuth();
  const searchParams = useSearchParams();
  const sectionFromURL = searchParams.get("section");

  const [activeSection, setActiveSection] = useState(
    sectionFromURL || "Datos personales"
  );

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    if (sectionFromURL) {
      setActiveSection(sectionFromURL);
    }
  }, [sectionFromURL]);

  return (
    <PrivateRoute>
      <div className="flex mt-[150px] bg-white min-h-screen px-[5%]">
        <div className="w-1/4 p-4">
          <h2 className="text-2xl font-bold mb-4">Mi Perfil</h2>
          <ul className="space-y- shadow-custom-card rounded-lg ">
            <li
              className={`flex items-center cursor-pointer p-3 hover:bg-gray-200 ${
                activeSection === "Datos personales"
                  ? "bg-Blanco20 rounded-t-lg hover:bg-Blanco20"
                  : ""
              }`}
              onClick={() => handleSectionClick("Datos personales")}
            >
              Datos personales
            </li>
            <li
              className={`flex items-center cursor-pointer p-3 hover:bg-gray-200 ${
                activeSection === "Pedidos entregados"
                  ? "bg-Blanco20 hover:bg-Blanco20"
                  : ""
              }`}
              onClick={() => handleSectionClick("Pedidos entregados")}
            >
              Pedidos entregados
            </li>
            <li
              className={`flex items-center cursor-pointer p-3 hover:bg-gray-200 ${
                activeSection === "Pedidos pendientes"
                  ? "bg-Blanco20 hover:bg-Blanco20"
                  : ""
              }`}
              onClick={() => handleSectionClick("Pedidos pendientes")}
            >
              Pedidos pendientes
            </li>
            <li
              className="flex items-center cursor-pointer p-3 hover:bg-gray-200"
              onClick={logout}
            >
              Cerrar sesión
            </li>
          </ul>
        </div>

        <div className="w-3/4 bg-white p-8">
          {activeSection === "Datos personales" && (
            <UserPersonalDataSection user={user} />
          )}
          {activeSection === "Pedidos entregados" && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Pedidos Entregados</h2>
              <p>No tienes pedidos entregados.</p>
            </section>
          )}
          {activeSection === "Pedidos pendientes" && (
            <section>
              <h2 className="text-2xl font-bold mb-4">Pedidos Pendientes</h2>
              <p>No tienes pedidos pendientes.</p>
            </section>
          )}{" "}
        </div>
      </div>
    </PrivateRoute>
  );
};

export default UserPage;
