import React from "react";
import styles from "./landing.module.css";
import imagen from "../../assets/hotel.jpg";

const Landing = () => {
  return (
    <>
      <section className={`${styles.landing}`}>
        <div className={`${styles.div1}`}>
          <img className={`${styles.image1}`} src={imagen} alt="" />
        </div>
        <div className={`${styles.div2} opacity-95 shadow-2xl`}>
          <h4 className="text-3xl cursor-default font-bold">
            <span>
              Tu
              <span className="text-[#A780ff] text-6xl ">Destino</span> app.
            </span>
          </h4>
          <p className="text-xl my-2">Un lugar donde llegar </p>
          <p className="mt-12">
            Aquí encontraras calidad, familiaridad y compromiso, planifica tus
            reservas con los mejores precios del mercado y ofertas increíbles.
            Mas de 500 casas, 800 apartamentos y miles de destinos en un solo
            lugar.
          </p>
          <button className="btn hover:bg-[#A780FF] bg-[#A780FF] border-transparent  tracking-widest text-white mt-36 ">
            Ingresa Ya
          </button>
        </div>
      </section>
    </>
  );
};
export default Landing;
