import { React } from "react";
import todos from "../../assets/todos.jpg";
import house from "../../assets/house.jpg";
import bedroom from "../../assets/bedroom.jpg";
import apartment from "../../assets/apartment.jpg";
import filtros from "../../assets/filtros.svg"
import styles from "./filterBar.module.css";

const filterBar = ({ updateFilter }) => {
  return (
    <div className={styles.filterBar}>
      <button className={styles.filter} onClick={() => updateFilter("all")}>
        <img src={todos} alt="Todos" />
        <p className="text-slate-900">Todos</p>
        <div className={styles.line} />
      </button>
      <button className={styles.filter} onClick={() => updateFilter("bedroom")}>
        <img src={bedroom} alt="Habitaciones"></img>
        <p className="text-slate-900">Habitaciones</p>
        <div className={styles.line} />
      </button>
      <button className={styles.filter} onClick={() => updateFilter("apartment")}>
        <img src={apartment} alt="Apartamentos"></img>
        <p className="text-slate-900">Apartamentos</p>
        <div className={styles.line} />
      </button>
      <button className={styles.filter} onClick={() => updateFilter("house")}>
        <img src={house} alt="Casas" />
        <p className="text-slate-900">Casas</p>
        <div className={styles.line} />
      </button>
      <label className={styles.filter} htmlFor="my-modal-7">
        <img src={filtros} alt="Casas" />
        <p className="text-slate-900 ">Filtros</p>
        <div className={styles.line} />
      </label>
    </div>
  );
};

export default filterBar;
