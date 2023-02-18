import { useForm } from "react-hook-form";
import { useState } from "react";

const DataRange = ({ info }) => {
  const [result, setResult] = useState();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submit = (data) => {
    let init = Number(data.init.replaceAll("-", ""));
    let end = Number(data.end.replaceAll("-", ""));

    if (init < end) {
      let total = end - init;
      setResult(total * info.price);
    } else {
      setResult(0);
    }
  };
  return (
    <>
      <div className="flex flex-row justify-center h-[18rem] bg-[#ebebeb] rounded-3xl py-6  px-2 w-[24rem] max-[1000px]:w-full hover:shadow-2xl hover:scale-[1.02] duration-300  ">
        <form
          onSubmit={handleSubmit(submit)}
          className="form-control w-full max-[1000px]:w-[24rem]"
        >
          <span className=" text-lime-700 text-lg">
            {" "}
            Precio por dia: {info.price} US
          </span>
          <div className=" flex justify-between w-full my-4">
            <div className="flex flex-col ">
              <label className="">Fecha de llegada</label>
              <input
                className=" input focus:ring-2 bg-[#A780ff] focus:ring-blue-500 focus:outline-none text-white cursor-pointer"
                type="date"
                {...register("init", { required: "Debes poner una fecha" })}
              />
              <p className="text-red-700">{errors.init?.message}</p>
            </div>
            <div className="flex flex-col">
              <label className="">Fecha de salida</label>
              <input
                className=" input focus:ring-2 bg-[#A780ff] focus:ring-blue-500 focus:outline-none text-white cursor-pointer"
                type="date"
                {...register("end", { required: "Debes poner una fecha" })}
              />
              <p className="text-red-700">{errors.end?.message}</p>
            </div>
          </div>
          <div className="flex flex-col">
            <span className=" text-red-600 text-lg">
              Total: {result <= 0 ? "fecha invalida" : result}
            </span>
            <button className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white">
              Reservar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default DataRange;
