import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CardsFilter = () => {
  const { register, handleSubmit } = useForm();
  const [prueba, setPrueba] = useState({});

  const change = (e) => {
    setPrueba({...prueba, [e.target.name]:e.target.value})
  }

  const submit = (data) => {

  }
  return (
    <form onSubmit={handleSubmit(submit)} >
      <input type="checkbox" id="my-modal-7" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-[#ebebeb]">
          <label htmlFor="my-modal-7" className="btn btn-sm btn-circle absolute right-2 top-2 ">✕</label>
          <div className='my-4'>
            <label>Precio</label>
            <input type="range" min={100} max={15000} className="range range-xs" {...register("price")} onChange={change} name="price"
            />
            {<p>{prueba.price}</p>}
          </div>
          <div className='my-4'>
            <label>Cantidad de personas</label>
            <input type="range" min={1} max={15} className="range range-xs" {...register("numPeople")} onChange={change} name="numPeople"/>
            <p>{prueba.numPeople}</p>
          </div>
          <div className='my-4'>
            <label>Numero de habitaciones</label>
            <input type="range" min={1} max={10} className="range range-xs" {...register("numBedrooms")} onChange={change} name="numBedrooms"/>
            <p>{prueba.numBedrooms}</p>
          </div>
          <div className='my-4'>
            <label>Numero de baños</label>
            <input type="range" min={1} max={15} className="range range-xs" {...register("numBathrooms")} onChange={change} name="numBathrooms"/>
            <p>{prueba.numBathrooms}</p>
          </div>
        <button className='btn w-full my-4 bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white'>Filtrar</button>
        </div>
      </div>
    </form>

  );
}

export default CardsFilter;
