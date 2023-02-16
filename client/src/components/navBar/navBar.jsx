import React from "react";
import logo from "../../assets/logo.png";
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

    return (
        <div className="navbar bg-[#ebebeb] flex justify-around w-full">
            <div className="flex-1">
                <img className="w-56" src={logo} alt="logo" />{" "}
            </div>
            <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered" />
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={image} alt="image" />{" "}
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
                        <li><a onClick={navigateIngresar}>Ingresar</a></li>
                        <li><a onClick={navigateRegistrarse}>Registrarse</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default NavBar;