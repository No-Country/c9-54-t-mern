import React from "react";

const DataDescriptionRent = ({ data }) => {
  return (
    <>
      <div className="rounded-3xl bg-[#ebebeb] mb-2 h-full w-full p-4">
        <div>
          <h3 className="">
            <span className=" font-bold"> Pais :</span>
            {data.country}
          </h3>
        </div>
        <div>
          <h3 className=""> Ciudad : {data.city}</h3>
        </div>
        <div>
          <h3 className=""> Dirección : {data.address}</h3>
        </div>
        <div>
          <h3 className=""> Maximo de personas : {data.maxPeople}</h3>
        </div>
        <div>
          <h3 className="">Numero de Habitaciones : {data.numberBedrom}</h3>
        </div>
        <div>
          <h3 className=""> Numero de Baños : {data.numberBathroom}</h3>
        </div>
        <div>
          <h3 className="">Gym : {data.gym === false ? "No" : "Si"}</h3>
        </div>
        <div>
          <h3 className="">
            Piscina : {data.swimmimgPool === false ? "No" : "Si"}
          </h3>
        </div>
        <p className="">Reseña : {data.description}</p>
      </div>
    </>
  );
};

export default DataDescriptionRent;
