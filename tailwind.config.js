/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-card': '0px 24px 7px 0px rgba(0, 0, 0, 0.00), 0px 15px 6px 0px rgba(0, 0, 0, 0.01), 0px 9px 5px 0px rgba(0, 0, 0, 0.05), 0px 4px 4px 0px rgba(0, 0, 0, 0.09), 0px 1px 2px 0px rgba(0, 0, 0, 0.10)',
      },
      colors: {
        GrisOscuro: "#666666",
        Rojo: "#EE1D23",
        Verde: "#0C6638",
        HoverPrimario: "#094C2A",
        VerdeOscuro: "#06331C",
        Acento: "#63D199",
        CasiBlanco: "#E6E6E6",
        Blanco20: "#CEE0D7",
        Blanco10: "#E7F0EC",
        GrisClaro: "#BEBEBE",
      },
      backgroundImage: {
        VerdeNavbarradiente: "linear-gradient(to bottom, #06331C, #0C6638)",
        VerdeFooterGradiente: "linear-gradient(to bottom, #0C6638, #06331C)",
      },
      fontFamily: {
        GothamLight: ["GothamLight", "sans-serif"],
        GothamRegular: ["GothamRegular", "sans-serif"],
        GothamMedium: ["GothamMedium", "sans-serif"],
        GothamBold: ["GothamBold", "sans-serif"],
      },
      fontSize: {
        // Tamaños Web
        Titulos: "32px",
        TitulosXS: "16px",
        SubtituloH1: "24px",
        SubtituloH2: "20px",
        Bottom: "18px",
        BottomH2: "16px",
        Precios: "32px",
        Body: "20px",
        BodyS: "16px",
        // Tamaños Mobile
        TitulosMobile: "32px",
        TitulosXSMobile: "16px",
        SubtituloH1Mobile: "24px",
        SubtituloH2Mobile: "20px",
        BottomMobile: "16px",
        BottomH2Mobile: "10px",
        PreciosMobile: "16px",
        BodyMobile: "16px",
        BodySMobile: "10px",
      },
      fontWeight: {
        Bold: "700",
        Regular: "400",
      },
    },
  },
  plugins: [],
};
