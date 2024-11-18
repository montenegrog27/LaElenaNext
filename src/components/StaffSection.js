"use client";
import React, { useState, useEffect } from "react";
import fetchStaff from "@/lib/fetchStaff";

import EmployeeCategory from "./EmployeeCategory";

const StaffSection = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const getStaff = async () => {
      const data = await fetchStaff();
      setEmployees(data);
    };
    getStaff();
  }, []);

  const employeeCategories = [
    { id: 26, name: "equipodelpredio" },
    { id: 24, name: "lafamilia" },
    { id: 25, name: "office" },
  ];

  const groupedEmployees = employeeCategories.reduce((acc, category) => {
    acc[category.name] = [];
    return acc;
  }, {});

  employees.forEach((employee) => {
    employee.categories.forEach((category) => {
      const categoryName = category.slug;
      if (groupedEmployees[categoryName]) {
        groupedEmployees[categoryName].push({
          id: employee.id,
          name: employee.name,
          description: employee.description,
          image: employee.images[0].src,
        });
      }
    });
  });

  const family = groupedEmployees.lafamilia;
  const office = groupedEmployees.office;
  const predio = groupedEmployees.equipodelpredio;

  console.log("predio,", predio);
  console.log("family,", family);

  return (
    <div>
      <EmployeeCategory title="La familia de 'La Elena'" employees={family} />
      <EmployeeCategory title="The office y más" employees={office} />
      <EmployeeCategory title="El equipo del predio" employees={predio} />
    </div>
  );
};

export default StaffSection;
