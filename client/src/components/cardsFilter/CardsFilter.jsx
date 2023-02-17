import React, { useState } from 'react';
import { cities, countries } from '../../utils/locations';

const CardsFilter = ({applyFilter}) => {
  
  /*const [filter, setFilter] = useState({});
  
  const applyFilter = () => {
    setFilter({
      country: document.getElementById("selectCountry").value,
      city: document.getElementById("selectCity").value,
    })
  }*/

  
  
    
    return (
<div className="card w-96 bg-[#c5c5c5] mt-10 h-64" >
  <div className="card-body">
    <h2 className="card-title">Filtros</h2>
    <select className="select w-full max-w-xs bg-[#EBEBEB]  " id='selectCountry'>
        <option disabled selected>Pais</option>
        {
          countries.map(({name}) => {
            return (<option key={name}>{name}</option>)
          })
        }
    </select>
    <select className="select w-full max-w-xs bg-[#EBEBEB]  " id='selectCity'>
        <option disabled selected>Ciudad</option>
        {
          cities.map(({city}) => {
            return (<option key={city}>{city}</option>)
          })
        }
    </select>
    <div className="card-actions justify-end">
      <button className="btn btn-primary " onClick={() => applyFilter()}>Aplicar</button>
    </div>
  </div>
</div>
     
    );
}

export default CardsFilter;
