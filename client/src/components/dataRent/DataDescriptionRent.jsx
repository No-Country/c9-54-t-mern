import React from "react";

const DataDescriptionRent = ({ data }) => {
  return (
    <>
      <div className="rounded-3xl bg-[#ebebeb] mb-2 h-full w-full p-4">
        <div>
          <h3 className="">
            <span className=" font-bold"> Pais : </span>
            {data.country}
          </h3>
        </div>
        <div>
          <h3 className="">
            <span className=" font-bold"> Ciudad : </span>
            {data.city}
          </h3>
        </div>
        <div>
          <h3 className="">
            <span className=" font-bold"> Dirección : </span>
            {data.address}
          </h3>
        </div>
        <div>
          <h3 className="">
            <span className=" font-bold"> Maximo de personas : </span>
            {data.maxPeople}
          </h3>
        </div>
        <div>
          <h3 className="">
            <span className=" font-bold"> Numero de Habitaciones : </span>
            {data.numberBedrom}
          </h3>
        </div>
        <div>
          <h3 className="">
            <span className=" font-bold"> Numero de Baños : </span>
            {data.numberBathroom}
          </h3>
        </div>
        <div>
          <h3 className="">
            <span className=" font-bold"> Gym : </span>
            {data.gym === false ? "No" : "Si"}
          </h3>
        </div>
        <div>
          <h3 className="">
            <span className=" font-bold"> Piscina : </span>
            {data.swimmimgPool === false ? "No" : "Si"}
          </h3>
        </div>
        <p className="">
          <span className=" font-bold"> Reseña : </span>
          {data.description}
        </p>
      </div>
    </>
  );
};

export default DataDescriptionRent;
