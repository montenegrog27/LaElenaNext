import axios from "axios";

const wooCommerceAPI = axios.create({
  baseURL: process.env.WC_API_URL,
  auth: {
    username: process.env.WC_CONSUMER_KEY,
    password: process.env.WC_CONSUMER_SECRET,
  },
});
wooCommerceAPI.interceptors.request.use((config) => {
  console.log("Configuración de la solicitud WooCommerce:", config);
  return config;
});
