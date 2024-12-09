import React from "react";
import EmployeeCard from "./EmployeeCard";

const EmployeeCategory = ({ title, employees }) => {
  console.log("emplotes", employees);
  return (
    <section className="my-8 md:my-14 md:px-[100px] flex-col justify-center items-center  ">
      <div className="h-auto mb-4 md:mb-[50px] flex flex-col justify-center items-center">
        <h2 className=" text-SubtituloH2Mobile md:text-Titulos font-Bold text-center">
          {title}
        </h2>
        <div className="h-[3px] md:h-1 bg-Verde w-[40%] md:w-[15%] rounded text-center"></div>
      </div>
      <div
        className="flex justify-center items-center 
       "
      >
        <div className="grid grid-cols-3 lg:grid-cols-4 2xl:grid-cols-6 gap-4 place-items-center">
          {employees.map((employee, index) => (
            <EmployeeCard
              key={index}
              name={employee?.name}
              role={employee?.description}
              image={employee?.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EmployeeCategory;
