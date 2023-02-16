import React from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const navigatePage = (title) => navigate(`/page/${title}`);

  const navigateHome = () => navigate("/home");

  return (
    <>
      <footer className="footer p-10 bg-secondary-content justify-evenly border-t-2">
        <div>
          <span className="text-slate-700 font-bold">Asistencia</span>
          <a
            onClick={() => navigatePage("Centro de ayuda")}
            className="link text-slate-600 link-hover"
          >
            Centro de ayuda
          </a>
          <a
            onClick={() =>
              navigatePage("Apoyo a las personas con discapacidad")
            }
            className="link text-slate-600 link-hover"
          >
            Apoyo a las personas con discapacidad
          </a>
          <a
            onClick={() => navigatePage("Opciones de cancelación")}
            className="link text-slate-600 link-hover"
          >
            Opciones de cancelación
          </a>
          <a
            onClick={() =>
              navigatePage("Denunciar un problema en el vecindario")
            }
            className="link text-slate-600 link-hover"
          >
            Denunciar un problema en el vecindario
          </a>
        </div>
        <div>
          <span className="text-slate-700 font-bold">tu destino app</span>
          <a
            onClick={() => navigatePage("Luchamos contra la discriminación")}
            className="link text-slate-600 link-hover"
          >
            Luchamos contra la discriminación
          </a>
          <a
            onClick={() => navigatePage("Carreras")}
            className="link text-slate-600 link-hover"
          >
            Carreras
          </a>
          <a
            onClick={() => navigatePage("Proteccion al cliente")}
            className="link text-slate-600 link-hover"
          >
            Protección al cliente
          </a>
        </div>
        <div>
          <span className="text-slate-900 font-bold">Legal</span>
          <a
            onClick={() => navigatePage("Politicas de cancelación")}
            className="link text-slate-600 link-hover"
          >
            Politicas de cancelación
          </a>
          <a
            onClick={() => navigatePage("Politicas de privacidad")}
            className="link text-slate-600 link-hover"
          >
            Politicas de privacidad
          </a>
        </div>
        <div>
          <span className="text-slate-700 font-bold">comunidad</span>
          <a
            onClick={() =>
              navigatePage(
                "Tu destino: alojamiento de ayuda en caso de catástrofe"
              )
            }
            className="link text-slate-600 link-hover"
          >
            Tu destino: alojamiento de ayuda en caso de catástrofe
          </a>
          <a
            onClick={() => navigatePage("Recursos para anfitriones")}
            className="link text-slate-600 link-hover"
          >
            Recursos para anfitriones
          </a>
          <a
            onClick={() =>
              navigatePage(
                "Como brindar servicios de anfitrión de forma responsable"
              )
            }
            className="link text-slate-600 link-hover"
          >
            Como brindar servicios de anfitrión de forma responsable
          </a>
          <div onClick={navigateHome} className="w-56 mt-4 cursor-pointer">
            <img src={logo} alt="logo" />{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
