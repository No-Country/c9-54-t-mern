import { useForm } from "react-hook-form";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const URL = "https://tudestinoapp-api-production.up.railway.app/api/payment";

const DataRange = ({ info }) => {
  const [result, setResult] = useState();
  const [dataInput, setDataInput] = useState();
  const [numberDay, setNumberDay] = useState();
  const [noUser, setNoUser] = useState(false);
  const [bookingOk, setBookingOk] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const users = useSelector((state) => state.user);

  const toltalPrice = (data) => {
    setDataInput(data);

    const init = new Date(data.init).getTime();
    const end = new Date(data.end).getTime();

    if (init < end) {
      let totalDay = (end - init) / (1000 * 60 * 60 * 24);
      setNumberDay(totalDay);
      setResult(totalDay * info.price);
    } else {
      setResult(0);
    }
  };

  const dataBooking = () => {
    if (dataInput) {
      const init = new Date(dataInput.init).getTime();
      const end = new Date(dataInput.end).getTime();

      let totalDay = (end - init) / (1000 * 60 * 60 * 24);
      const totalPrice = totalDay * info.price;

      const booking = {
        dateInit: dataInput.init,
        dateEnd: dataInput.end,
        numberEvening: totalDay,
        total: totalPrice,
        idProduct: info._id,
        idUser: users.id,
        price: info.price,
        username: users.username,
        dateRegister: new Date().toISOString().replace("T", " ").slice(0, 19),
      };

      if (init < end && users.username !== "") {
        console.log(booking);

        axios.post(URL, booking).then((resp) => {
          console.log(resp);
          setBookingOk(true);
          setTimeout(() => {
            setBookingOk(false);
          }, 2000);
        });
      } else {
        console.log("debe estar logueado");
        setNoUser(true);
      }
    }
  };

  const navigateLogin = () => navigate("/login");

  const handleBooking = () => setNoUser(false);

  return (
    <div className="bg-[#ebebeb]  rounded-3xl py-6 w-[24rem] max-[430px]:w-[100%] max-[430px]:mx-auto">
      {noUser === false ? (
        <div className="flex flex-col justify-center">
          <form
            onSubmit={handleSubmit(toltalPrice)}
            className="form-control w-full"
          >
            <span className="text-lg">
              Precio por noche:{" "}
              <span className="text-slate-600">$ {info.price} US</span>
            </span>
            <div className=" flex justify-between w-full my-4 max-[430px]:flex-col max-[430px]:gap-5">
              <div className="flex flex-col ">
                <label className="">Fecha de llegada</label>
                <input
                  className=" input focus:ring-2 bg-[#A780ff] focus:ring-blue-500 focus:outline-none text-white cursor-pointer"
                  type="date"
                  {...register("init", {
                    required: "Debes ingresar una fecha",
                  })}
                />
                <p className="text-red-700 text-xs">{errors.init?.message}</p>
              </div>
              <div className="flex flex-col">
                <label className="">Fecha de salida</label>
                <input
                  className=" input focus:ring-2 bg-[#A780ff] focus:ring-blue-500 focus:outline-none text-white cursor-pointer"
                  type="date"
                  {...register("end", { required: "Debes ingresar una fecha" })}
                />
                <p className="text-red-700 text-xs">{errors.end?.message}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex">
                <button className="btn w-full bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white">
                  Calcular
                </button>
              </div>
              {numberDay !== undefined && (
                <p className="text-slate-600 mt-4 text-[1.1rem]">
                  Num noches: {numberDay} x Valor noche:{" "}
                  <span>$ {info.price} US</span>
                </p>
              )}
              <span className="my-3 text-violet-500 text-lg font-bold">
                <span className="text-slate-400">Total:</span>{" "}
                {result > 0 && <span>$</span>}
                {result <= 0 ? (
                  <span className="text-red-400 font-light">
                    fecha invalida
                  </span>
                ) : (
                  <span> {result}</span>
                )}{" "}
                {result > 0 && <span>US</span>}
              </span>
            </div>
          </form>
          <button
            onClick={dataBooking}
            className="btn w-full mb-2 bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white"
          >
            Reservar
          </button>
          {bookingOk === true && (
            <p className="btn text-white text-lg text-center bg-green-500 border-transparent">
              Reserva Exitosa
            </p>
          )}
        </div>
      ) : (
        <>
          <p className="text-xl mb-7 text-center uppercase">
            debes ingresar para poder reservar
          </p>
          <button
            onClick={navigateLogin}
            className="btn w-full  bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white mb-5"
          >
            {" "}
            ingresar ahora
          </button>
          <button
            onClick={handleBooking}
            className="btn w-full  bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white"
          >
            {" "}
            ingresar despues
          </button>
        </>
      )}
    </div>
  );
};

export default DataRange;
