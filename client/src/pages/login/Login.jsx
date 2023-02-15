import React from "react";
import FormLogin from "../../components/login/FormLogin";
import style from "./login.module.css";

const Login = () => {
  return (
    <div className="h-screen flex-col lg:flex lg:flex-row">
      <div className="lg:w-full lg:h-screen lg:bg-[url('./assets/imgLogin.jpg')] bg-cover"></div>
      <div
        className={`${style.hero} w-full flex flex-shrink-0 h-full flex-col justify-center lg:w-1/3 lg:bg-[#ebebeb]`}
      >
        <h4 className="text-4xl px-[2rem] cursor-default font-bold text-slate-500">
          <p>Bienvenido a</p>
          <span>
            Tu
            <span className="text-[#A780ff] text-6xl">Destino</span> app.
          </span>
        </h4>
        <div className={style.form}>
          <FormLogin />
        </div>
      </div>
    </div>
  );
};

export default Login;
