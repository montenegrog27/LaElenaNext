import axios from "axios";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    console.log("email del usuario", email);
    if (!email) {
      return new Response(
        JSON.stringify({ message: "Se requiere un correo electrónico" }),
        { status: 400 }
      );
    }

    // Verificar si el usuario existe en WordPress
    const wpResponse = await axios.get(
      `https://laelena.selftechagency.net/wp-json/wp/v2/search-user-by-email?email=${email}`
    );

    const user = wpResponse.data; // Aquí asumimos que `data` contiene el usuario o null
    console.log("FALSO???", user);
    if (user) {
      console.log("Usuario encontrado:", user);
      return new Response(
        JSON.stringify({
          exists: true,
          userId: user.id,
          email: user.email, // Devuelve el ID del usuario
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    } else {
      return new Response(
        JSON.stringify({ exists: false, message: "Usuario no encontrado" }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      );
    }
  } catch (error) {
    console.error("Error en el endpoint /api/checkCustomers:", {
      message: error.message,
      response: error.response ? error.response.data : null,
      status: error.response ? error.response.status : null,
    });

    return new Response(
      JSON.stringify({
        exists: false,
        error: error.response?.data || "Error al procesar la solicitud",
      }),
      {
        status: error.response?.status || 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

//! ESTO VOY A HACER CUANDO EL CLIENTE COMPRE (CREAR EL CLIENTE EN WOO COMMERCE)

// Paso 2: Verificar si el cliente existe en WooCommerce
// const wcResponse = await axios.get(`${process.env.WC_API_URL}/customers`, {
//   auth: {
//     username: process.env.WC_CONSUMER_KEY,
//     password: process.env.WC_CONSUMER_SECRET,
//   },
//   params: { email },
// });

// const customers = wcResponse.data;

// if (customers.length > 0) {
//   // Cliente ya existe en WooCommerce
//   console.log("Cliente encontrado en WooCommerce");
//   return new Response(JSON.stringify(customers[0]), { status: 200 });
// } else {
//   // Crear un nuevo cliente en WooCommerce
//   console.log("Cliente no encontrado en WooCommerce, creando cliente...");

//   const newCustomerData = {
//     email,
//     first_name: "Nuevo",
//     last_name: "Cliente",
//     username: email,
//     billing: {
//       first_name: "Nuevo",
//       last_name: "Cliente",
//       email,
//       phone: "1234567890",
//     },
//     shipping: {
//       first_name: "Nuevo",
//       last_name: "Cliente",
//     },
//   };

//   const createCustomerResponse = await axios.post(
//     `${process.env.WC_API_URL}/customers`,
//     newCustomerData,
//     {
//       auth: {
//         username: process.env.WC_CONSUMER_KEY,
//         password: process.env.WC_CONSUMER_SECRET,
//       },
//     }
//   );

//   console.log("Cliente creado con éxito en WooCommerce");
//   return new Response(JSON.stringify(createCustomerResponse.data), {
//     status: 201,
//   });
// }
