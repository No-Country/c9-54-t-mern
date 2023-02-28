import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Navigate, useNavigate } from "react-router-dom";

const FormUpdate = ({ open, setOpen, edit, setEdit }) => {
  const { register, handleSubmit, reset } = useForm();
  const [alertUpdate, setAlertUpdate] = useState(false);

  const navigate = useNavigate();
  const close = () => {
    setOpen(!open);
  };

  const update = (data) => userUpdate(edit._id, data);

  const userUpdate = async (id, data) => {
    //carga imagen

    const img = new FormData();
    img.append("upload_preset", "myuploads");
    img.append("file", data.image[0]);
    const uploadRes = await axios.post(
      "https://api.cloudinary.com/v1_1/djdp4cavt/image/upload",
      img
    );

    const url = uploadRes.data?.url;

    let newData;
    if (url !== undefined) {
      newData = {
        ...data,
        image: url,
      };
    } else {
      newData = data;
    }

    const urlUpdate = `https://tudestinoapp-api-production.up.railway.app/api/users/${id}`;
    axios
      .patch(urlUpdate, newData)
      .then((res) => {
        console.log(res.data);

        setAlertUpdate(true);
        setTimeout(() => {
          setAlertUpdate(false);
          setOpen(!open);
        }, 3000);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    reset({
      country: edit.country,
      city: edit.city,
      age: edit.age,
      phone: edit.phone,
    });
  }, []);

  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 bg-[rgba(0,0,0,.5)] flex justify-center items-center ">
        <div className="w-[350px] h-auto bg-white relative rounded-xl">
          <i
            onClick={close}
            className="fa-sharp fa-solid fa-circle-xmark absolute right-4 top-4 text-2xl cursor-pointer"
          ></i>

          <form
            onSubmit={handleSubmit(update)}
            className="w-[80%] mx-auto flex flex-col gap-3  my-12"
          >
            <div className="w-full">
              <label className="p-1">
                <span className="font-medium text-black">Pais</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered bg-zinc-300 text-black w-full"
                {...register("country")}
              />
            </div>
            <div className="w-full">
              <label className="p-1">
                <span className="font-medium text-black ">Ciudad</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered bg-zinc-300 text-black w-full"
                {...register("city")}
              />
            </div>
            <div className="w-full">
              <label className="p-1">
                <span className="font-medium text-black">Edad</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered bg-zinc-300 text-black w-full"
                {...register("age")}
              />
            </div>
            <div className="w-full">
              <label className="p-1">
                <span className="font-medium text-black">Telefono</span>
              </label>
              <input
                type="number"
                placeholder="Type here"
                className="input input-bordered bg-zinc-300 text-black w-full"
                {...register("phone")}
              />
            </div>
            <div className="w-full">
              <label className="p-1">
                <span className="font-medium text-black">Imagen</span>
              </label>
              <input
                type="file"
                className="file-input file-input-bordered file-input-primary w-full max-w-xs"
                {...register("image")}
              />
            </div>

            <>
              {alertUpdate === false ? (
                <button className="btn bg-[#A780ff] my-4 hover:bg-[#906be7] border-transparent hover:border-transparent text-white">
                  actualizar
                </button>
              ) : (
                <div className="alert alert-info shadow-lg">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="stroke-current flex-shrink-0 w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span>actualizado</span>
                  </div>
                </div>
              )}
            </>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormUpdate;
