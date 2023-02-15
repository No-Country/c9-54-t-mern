import React, { useState } from "react";
import FormRegister from "../../components/register/FormRegister";
import style from "./register.module.css";

const Register = () => {
  const [register, setRegister] = useState(false);
  return (
    <div className="h-screen flex-col lg:flex lg:flex-row">
      <div className="lg:w-full lg:h-screen lg:bg-[url('./assets/imgRegister.jpg')] lg:bg-cover"></div>
      <div
        className={`${style.hero} w-full flex flex-shrink-0 h-full flex-col justify-center lg:w-1/3 lg:bg-[#ebebeb]`}
      >
        {register == false ? (
          <h4 className="text-2xl px-[2rem] cursor-default font-bold text-slate-500">
            <p>Descubre nuevas experiencias.</p>
            <span>
              <span className="text-[#A780ff] text-4xl">Registrate</span> ahora!
            </span>
          </h4>
        ) : (
          <h4 className="text-2xl px-[2rem] cursor-default font-bold text-slate-500">
            <p>Bienvenido a</p>
            <span className="text-[#A780ff] text-3xl">
              Tu
              <span className="text-6xl">Destino</span> app
            </span>
          </h4>
        )}
        <div className={style.form}>
          <FormRegister setRegister={setRegister} />
        </div>
      </div>
    </div>
  );
};

export default Register;
