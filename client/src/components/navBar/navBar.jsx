import React from "react";
import logo from "../../assets/LogoIcono.png";
import image from "../../assets/imgLogin.jpg";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const navigateIngresar = () => {
    navigate("/login");
  };
  const navigateRegistrarse = () => {
    navigate("/register");
  };
  const navigateHome = () => {
    navigate("/home");
  };

  return (
    <div className="navbar bg-[#ebebeb] justify-between px-10 max-[800px]:px-3">
      <div onClick={navigateHome}>
        <img className="w-12 cursor-pointer" src={logo} alt="logo" />{" "}
      </div>
      <div className="form-control w-full">
        <input
          type="text"
          placeholder="Buscar"
          className="input input-bordered w-4/5 bg-white rounded-full shadow-lg text-slate-600"
        />
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-12 rounded-full shadow-xl">
              <img src={image} alt="image" />{" "}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-white rounded-box w-52"
          >
            <li className="hover:bg-[#ebebeb]">
              <a onClick={navigateIngresar}>Ingresa</a>
            </li>
            <li className="hover:bg-[#ebebeb]">
              <a onClick={navigateRegistrarse}>Registrate</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
