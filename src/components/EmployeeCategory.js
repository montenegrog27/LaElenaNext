import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeCategory = ({ title, employees }) => {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold text-center mb-4">{title}</h2>
      <div className="flex justify-center items-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee.name}
              role={employee.role}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeCategory;
