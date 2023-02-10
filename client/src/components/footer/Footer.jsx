import React from "react";
import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <>
      <footer className="footer p-10 bg-secondary-content justify-evenly border-t-2">
        <div>
          <span className="text-slate-700 font-bold">Asistencia</span>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/help/?audience=guest"
            target={"_blank"}
          >
            Centro de ayuda
          </a>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/accessibility"
            target={"_blank"}
          >
            Apoyo a las personas con discapacidad
          </a>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/help/article/2701"
            target={"_blank"}
          >
            Opciones de cancelacion
          </a>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/help/article/3290"
            target={"_blank"}
          >
            Denunciar un problema en el vecindario
          </a>
        </div>
        <div>
          <span className="text-slate-700 font-bold">tu destino app</span>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/against-discrimination"
            target={"_blank"}
          >
            Luchamos contra la discriminación
          </a>
          <a
            className="link text-slate-600 link-hover"
            href="https://careers.airbnb.com/"
            target={"_blank"}
          >
            Carreras
          </a>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/2022-winter"
            target={"_blank"}
          >
            Proteccion al cliente
          </a>
        </div>
        <div>
          <span className="text-slate-900 font-bold">Legal</span>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/help/article/149"
            target={"_blank"}
          >
            Politicas de cancelación
          </a>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/help/article/3175"
            target={"_blank"}
          >
            Politicas de privacidad
          </a>
        </div>
        <div>
          <span className="text-slate-700 font-bold">comunidad</span>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/help/article/149"
            target={"_blank"}
          >
            Tu destino: alojamiento de ayuda en caso de catástrofe
          </a>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/help/article/3175"
            target={"_blank"}
          >
            Recursos para anfitriones
          </a>
          <a
            className="link text-slate-600 link-hover"
            href="https://www.airbnb.com.co/help/article/3175"
            target={"_blank"}
          >
            Como brindar servicios de anfitrión de forma responsable
          </a>
          <div className="w-56 mt-4">
            <img src={logo} alt="logo" />{" "}
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
