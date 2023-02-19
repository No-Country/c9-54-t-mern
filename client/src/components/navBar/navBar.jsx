import React, { useEffect, useState } from "react";
import logo from "../../assets/LogoIcono.png";
import imgProfile from "../../assets/profile.webp";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../store/slices/user.slice";
import { setSearch } from "../../store/slices/search.slice";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [handleSearch, setHandleSearch] = useState(false);
  const [dataSearch, setDataSearch] = useState("");

  const users = useSelector((state) => state.user);

  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    dispatch(
      setUser({
        username: user?.details.username || "",
        email: user?.details.email || "",
        id: user?.details._id || "",
        country: user?.details.country || "",
        city: user?.details.city || "",
        phone: user?.details.phone || "",
        image: user?.details.image || "",
        age: user?.details.age || "",
        isAdmin: user?.isAdmin || "",
      })
    );
  }, []);

  const navigateIngresar = () => navigate("/login");

  const navigateRegistrarse = () => navigate("/register");

  const navigateHome = () => navigate("/home");

  const navigateMyProfile = () => navigate("/profile");

  const exitUser = () => {
    localStorage.removeItem("user");

    dispatch(
      setUser({
        username: "",
        email: "",
        id: "",
        country: "",
        city: "",
        phone: "",
        image: "",
        age: "",
        isAdmin: "",
      })
    );

    navigate("/home");
  };

  const search = () => setHandleSearch(!handleSearch);

  const navigateDashboard = () => {
    navigate("/cambiar ruta conectar con dashboard");
  };

  const onSearch = (e) => {
    setDataSearch(e.target.value);
  };

  const onSubmit = (e) => {
    navigate("/home");
    e.preventDefault();
    dispatch(setSearch(dataSearch));
  };

  return (
    <div className="navbar bg-[#ebebeb] justify-between px-10 max-[800px]:px-3">
      <div onClick={navigateHome}>
        <img className="w-12 cursor-pointer" src={logo} alt="logo" />{" "}
      </div>
      <form onSubmit={onSubmit} className="form-control w-full flex relative">
        <button
          onClick={search}
          className="rounded-full w-10 p-2 shadow-lg text-center min-[600px]:hidden bg-white cursor-pointer self-start ml-4"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <input
          type="search"
          placeholder="Ciudad o pais"
          className="input input-bordered w-4/5 bg-white rounded-full shadow-lg text-slate-600 max-[600px]:hidden"
          name="search"
          onChange={onSearch}
        />
        <input
          type="search"
          placeholder="Ciudad o pais"
          className={
            handleSearch === true
              ? `input input-bordered w-[12rem] bg-white rounded-full shadow-lg text-slate-600 absolute left-16 top-[-0.3rem] min-[600px]:hidden`
              : `hidden`
          }
        />
      </form>
      <div className="flex-none gap-2">
        <div className="p-4">
          <span className="font-bold">
            {users.username ? (
              <b>
                <p className="text-[#A780ff]">Bienvenid@</p> {users.username}
              </b>
            ) : (
              ""
            )}
          </span>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-12 rounded-full shadow-xl">
              <img src={users.image ? users.image : imgProfile} />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow-xl menu menu-compact dropdown-content bg-white rounded-box w-52"
          >
            {users.username ? (
              <>
                <li className="hover:bg-[#ebebeb]">
                  <a onClick={navigateMyProfile}>Mi perfil</a>
                </li>
                {users.isAdmin === true && (
                  <li className="hover:bg-[#ebebeb]">
                    <a onClick={navigateDashboard}>Panel administrador</a>
                  </li>
                )}
                <li className="hover:bg-[#ebebeb]">
                  <a onClick={exitUser}>Salir</a>
                </li>
              </>
            ) : (
              <>
                <li className="hover:bg-[#ebebeb]">
                  <a onClick={navigateIngresar}>Ingresa</a>
                </li>
                <li className="hover:bg-[#ebebeb]">
                  <a onClick={navigateRegistrarse}>Registrate</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
