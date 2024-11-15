import Navbar from "@/components/Navbar";
import "../styles/globals.css";
import { Suspense } from "react";
import { StaffToolbar } from "@components/staff-toolbar";
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`font-GothamRegular`}>
        <Navbar />
        {children}
        <Suspense>
          <StaffToolbar />
        </Suspense>
      </body>
    </html>
  );
}
