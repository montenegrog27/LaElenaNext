/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
        BottomH2Mobile: "14px",
        PreciosMobile: "24px",
        BodyMobile: "16px",
        BodySMobile: "14px",
      },
      fontWeight: {
        Bold: "700",
        Regular: "400",
      },
    },
  },
  plugins: [],
};
