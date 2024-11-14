// src/components/StaffSection.js
import React from "react";
import staffPortada from "@/app/assets/images/staffPortada.png";
import EmployeeCategory from "./EmployeeCategory";
import Image from "next/image";

const staffData = {
  family: [
    { name: "Remo Bortolotti", role: "Presidente" },
    { name: "Carlos Bortolotti", role: "Gerente General" },
    { name: "Margarita Bortolotti", role: "Gerente Administrativo y Legal" },
    { name: "Matias Nuñez", role: "Gerente Comercial y MKT" },
    { name: "Matias Nuñez", role: "Gerente Comercial y MKT" },
  ],
  office: [
    { name: "Mario Paludi", role: "Gerencia operativa" },
    { name: "Emilse Eltueti", role: "Gerencia financiera" },
    { name: "Ivana Dachini", role: "Recursos humanos" },
    { name: "Mario Paludi", role: "Gerencia operativa" },
    { name: "Emilse Eltueti", role: "Gerencia financiera" },
    { name: "Ivana Dachini", role: "Recursos humanos" },
  ],
  fieldTeam: [
    { name: "Germán Potor", role: "Referente en hornos y bolsas" },
    { name: "Claudio Batoraynik", role: "Referente en hornos y bolsas" },
    { name: "Mario Paludi", role: "Gerencia operativa" },
    { name: "Emilse Eltueti", role: "Gerencia financiera" },
    { name: "Ivana Dachini", role: "Recursos humanos" },
    { name: "Mario Paludi", role: "Gerencia operativa" },
    { name: "Emilse Eltueti", role: "Gerencia financiera" },
    { name: "Ivana Dachini", role: "Recursos humanos" },
    { name: "Mario Paludi", role: "Gerencia operativa" },
    { name: "Emilse Eltueti", role: "Gerencia financiera" },
    { name: "Ivana Dachini", role: "Recursos humanos" },
  ],
};

const StaffSection = () => {
  return (
    <div>
      <Image
        src={staffPortada}
        alt="Portada del Staff"
        width={"100%"}
        height={"100%"}
      />
      <EmployeeCategory
        title="La familia de 'La Elena'"
        employees={staffData.family}
      />
      <EmployeeCategory title="The office y más" employees={staffData.office} />
      <EmployeeCategory
        title="El equipo del predio"
        employees={staffData.fieldTeam}
      />
    </div>
  );
};

export default StaffSection;
