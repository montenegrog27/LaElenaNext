"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";

const UserPersonalDataSection = ({ user }) => {
  const { verifyUserInWordPress } = useAuth();

  const [name, setName] = useState(user?.name || "");
  const [lastName, setLastName] = useState(user?.lastName || "");
  const [email, setEmail] = useState(user?.email || "");
  const [phone, setPhone] = useState(user?.phone || "");
  const [birthDate, setBirthDate] = useState(user?.birthDate || "");
  const [isEditing, setIsEditing] = useState(false); // Controla si el formulario está en modo edición
  const [userData, setUserData] = useState(null);

  const currentUserEmail = localStorage.getItem("wordpressUserEmail"); // Recuperar el userEmail
  const currentUserId = localStorage.getItem("wordpressUserId"); // Recuperar el userId

  console.log("userID:", currentUserEmail);

  useEffect(() => {
    const verify = async () => {
      const data = await verifyUserInWordPress(currentUserEmail);
      console.log("data:", data);
      setUserData(data);
    };
    verify();
  }, [currentUserEmail]);

  useEffect(() => {
    if (userData) {
      setName(userData.firstName || "");
      setLastName(userData.lastName || "");
      setEmail(userData.email || "");
      setPhone(userData.phone || "");
      setBirthDate(userData.birthDate || "");
    }
  }, [userData]);

  // Alternar entre modo de edición y modo de vista
  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const token = localStorage.getItem("wordpressUserToken");

  // Guardar los cambios
  const handleSave = async () => {
    try {
      // Enviar los datos actualizados al backend
      const response = await axios.post("/api/updateUser", {
        token,
        userId: currentUserId, // ID del usuario
        name,
        lastName,
        email,
        phone,
        birthDate,
      });

      console.log("Usuario actualizado con éxito:", response.data);
      setIsEditing(false); // Desactivar el modo edición después de guardar
      alert("Datos actualizados con éxito.");
    } catch (error) {
      console.error(
        "Error al actualizar usuario:",
        error.response?.data || error.message
      );
      alert("Error al guardar los datos. Inténtalo de nuevo.");
    }
  };

  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Datos Personales</h2>
      <form className="space-y-4">
        <div className="flex space-x-4">
          {/* Campo de Nombre */}
          <div className="flex-1">
            <label className="block text-gray-600">Nombre</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              readOnly={!isEditing} // Solo editable en modo edición
              className={`flex-1 border p-2 rounded ${
                isEditing ? "" : "bg-gray-100"
              }`}
            />
          </div>
          {/* Campo de Apellido */}
          <div className="flex-1">
            <label className="block text-gray-600">Apellido</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              readOnly={!isEditing}
              className={`flex-1 border p-2 rounded ${
                isEditing ? "" : "bg-gray-100"
              }`}
            />
          </div>
        </div>
        {/* Campo de Correo Electrónico */}
        <div>
          <label className="block text-gray-600">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            readOnly={!isEditing}
            className={`flex-1 border p-2 rounded ${
              isEditing ? "" : "bg-gray-100"
            }`}
          />
        </div>
        {/* Campo de Teléfono */}
        <div>
          <label className="block text-gray-600">Teléfono de contacto</label>
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            readOnly={!isEditing}
            className={`flex-1 border p-2 rounded ${
              isEditing ? "" : "bg-gray-100"
            }`}
          />
        </div>
        {/* Campo de Fecha de Nacimiento */}
        <div>
          <label className="block text-gray-600">Fecha de Nacimiento</label>
          <input
            type="date"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            readOnly={!isEditing}
            className={`flex-1 border p-2 rounded ${
              isEditing ? "" : "bg-gray-100"
            }`}
          />
        </div>
        {/* Botones de acción */}
        <div className="flex justify-end space-x-4">
          {isEditing ? (
            <>
              {/* Botón de Guardar */}
              <button
                type="button"
                onClick={handleSave}
                className="p-2 rounded bg-green-500 text-white hover:bg-green-600 transition"
              >
                Guardar cambios
              </button>
              {/* Botón de Cancelar */}
              <button
                type="button"
                onClick={handleEditToggle}
                className="p-2 rounded bg-gray-400 text-white hover:bg-gray-500 transition"
              >
                Cancelar
              </button>
            </>
          ) : (
            /* Botón de Editar */
            <button
              type="button"
              onClick={handleEditToggle}
              className="p-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
            >
              Editar
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

export default UserPersonalDataSection;
