import { React, useState } from "react";
import todos from "../../assets/todos.jpg";
import house from "../../assets/house.jpg";
import bedroom from "../../assets/bedroom.jpg";
import apartment from "../../assets/apartment.jpg";
import filtros from "../../assets/filtros.svg"
import styles from "./filterBar.module.css";

const filterBar = ({ updateFilter }) => {
  const [isActive, setIsActive] = useState("all");

  let activeStyle = {
    borderBottom: "2px solid black",
  };

  const handleActive = (id) => setIsActive(id);

  return (
    <div className={styles.filterBar}>
      <div
        style={isActive === "all" ? activeStyle : undefined}
        onClick={() => handleActive("all")}
      >
        <button className={styles.filter} onClick={() => updateFilter("all")}>
          <img src={todos} alt="Todos" />
          <p className="text-slate-900">Todos</p>
          <div className={styles.line} />
        </button>
      </div>
      <div
        style={isActive === "bedroom" ? activeStyle : undefined}
        onClick={() => handleActive("bedroom")}
      >
        <button
          className={styles.filter}
          onClick={() => updateFilter("bedroom")}
        >
          <img src={bedroom} alt="Habitaciones"></img>
          <p className="text-slate-900">Habitaciones</p>
          <div className={styles.line} />
        </button>
      </div>
      <div
        style={isActive === "apartment" ? activeStyle : undefined}
        onClick={() => handleActive("apartment")}
      >
        <button
          className={styles.filter}
          onClick={() => updateFilter("apartment")}
        >
          <img src={apartment} alt="Apartamentos"></img>
          <p className="text-slate-900">Apartamentos</p>
          <div className={styles.line} />
        </button>
      </div>
      <div
        style={isActive === "house" ? activeStyle : undefined}
        onClick={() => handleActive("house")}
      >
        <button className={styles.filter} onClick={() => updateFilter("house")}>
          <img src={house} alt="Casas" />
          <p className="text-slate-900">Casas</p>
          <div className={styles.line} />
        </button>
      </div>
      <label className={styles.filter} htmlFor="my-modal-7">
        <img src={filtros} alt="Casas" />
        <p className="text-slate-900 ">Filtros</p>
        <div className={styles.line} />
      </label>
    </div>
  );
};

export default filterBar;
