import React from "react";
import style from "./modealGalery.module.css";

const ModalGalery = ({ data }) => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div
          className={`${style.scroll} modal-box  p-0 relative bg-transparent`}
        >
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle sticky left-4 top-12 text-slate-800 bg-white shadow-xl border-transparent"
          >
            ✕
          </label>
          <div>
            {data.image.map((image) => (
              <img key={image} src={image} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalGalery;

/* 



*/
