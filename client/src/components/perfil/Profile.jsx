import React from "react";
import { useState } from "react";

import user from "../../assets/users.png";
import Bookings from "./Bookings";

const Profile = () => {
  const [select, setselect] = useState(true);

  const change = () => {
    setselect(!select);
  };

  return (
    <>
      <div className="tabs bg-secondary-content tabs-boxed ">
        <button
          onClick={change}
          className={select ? "tab tab-active" : "tab text-black "}
        >
          Informacion Personal
        </button>
        <button
          onClick={change}
          className={select ? "tab text-black" : "tab tab-active"}
        >
          Reservas
        </button>
      </div>
      {select ? (
        <div className="w-[55%] m-auto  flex gap-2 flex-col my-4">
          <h1 className="p-4 text-3xl text-black text-center">
            Información personal
          </h1>

          <div className="flex">
            <div className=" flex  gap-4 flex-wrap">
              <h2 className="text-xl text-black">Tu información de perfil </h2>
              <p>
                Encontrarás tu información de perfil y las opciones para
                administrarla. Puedes hacer visible parte de esta información,
                como tus datos de contacto.También puedes ver un resumen de tus
                perfiles.
              </p>
            </div>
            <img className="w-[120px] h-[120px]" src={user} />
          </div>
          <form>
            <div className="w-full h-[350px]  flex flex-col  justify-between  border  border-[#cfccccdb] m-1 rounded  shadow-md ">
              <div className="p-6 text-xl text-black">
                <h2>Informacion basíca</h2>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db] shadow-lg" />
              <div className="p-5  flex ">
                <div className="w-[120px]">
                  <span className="text-black text-sm ">Nombre</span>
                </div>
                <div>
                  <span className=" text-black  ">Jorge</span>
                </div>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex">
                <div className="w-[120px]">
                  <span className="text-black  text-sm">Edad</span>
                </div>
                <div>
                  <span className="text-black  ">22</span>
                </div>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex">
                <div className="w-[120px]">
                  <span className="text-black text-sm">Pais</span>
                </div>
                <div>
                  <span className=" text-black  ">Perú</span>
                </div>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex">
                <div className="w-[120px]">
                  <span className="text-black text-sm ">Ciudad</span>
                </div>
                <div>
                  <span className=" text-black  ">Lima</span>
                </div>
              </div>
            </div>
            <div className="w-full h-[300px] border border-[#cfccccdb]   flex  flex-col justify-between  m-1 rounded shadow-md ">
              <div className="p-6 text-xl text-black">
                <h2>Información de contacto</h2>
              </div>
              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex flex-wrap">
                <div className="w-[120px]">
                  <span className="text-black  text-sm ">Correo</span>
                </div>
                <div>
                  <span className="text-black  text-sm ">
                    espinoza@gmail.com
                  </span>
                </div>
              </div>

              <hr className="mx-4 border-1 border-[#9b9898db]" />
              <div className="p-5 flex flex-wrap">
                <div className="w-[120px]">
                  <span className="text-black  text-sm ">Telefono</span>
                </div>
                <div>
                  <span className="text-black  text-sm ">+51 940052655</span>
                </div>
              </div>
            </div>
            <div className="flex justify-end p-2">
              <button className="btn mx-4 bg-slate-400 shadow-lg shadow-slate-400 text-black hover:text-[#fff]">
                Actualizar
              </button>
              <button className="btn mx-2  bg-slate-400 shadow-lg shadow-slate-400 text-black hover:text-[#fff]">
                Eliminar
              </button>
            </div>
          </form>
        </div>
      ) : (
        <>
          <h1 className="text-3xl text-black container m-auto mt-8 mb-4 ">
            Tus reservas
          </h1>
          <Bookings />
        </>
      )}
    </>
  );
};

export default Profile;
