import React from "react";
import todos from "../../assets/todos.jpg";
import house from "../../assets/house.jpg";
import bedroom from "../../assets/bedroom.jpg";
import apartment from "../../assets/apartment.jpg";
import styles from "./filterBar.module.css";

export default function () {
  return (
    <div className={styles.filterBar}>
      <button className={styles.filter}>
        <img src={todos} alt="Todos" />
        <p className="text-slate-900">Todos</p>
        <div className={styles.line} />
      </button>
      <button className={styles.filter}>
        <img src={house} alt="Casas" />
        <p className="text-slate-900">Casas</p>
        <div className={styles.line} />
      </button>
      <button className={styles.filter}>
        <img src={bedroom} alt="Habitaciones"></img>
        <p className="text-slate-900">Habitaciones</p>
        <div className={styles.line} />
      </button>
      <button className={styles.filter}>
        <img src={apartment} alt="Apartamentos"></img>
        <p className="text-slate-900">Apartamentos</p>
        <div className={styles.line} />
      </button>
    </div>
  );
}
