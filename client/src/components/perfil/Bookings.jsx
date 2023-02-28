import axios from "axios";
import React, { useEffect, useState } from "react";
import hote from "../../assets/hotel.jpg";
import { useSelector } from "react-redux";
import ProductInfoModal from "./ProductInfoModal";

const URL = "https://tudestinoapp-api-production.up.railway.app/api/payment";

const Bookings = () => {
  const [infoBooking, setInfoBooking] = useState();
  const [openModal, setopenModal] = useState(false);
  const [productById, setProductById] = useState();

  const userLocal = JSON.parse(localStorage.getItem("user"));
  const users = useSelector((state) => state.user);

  const handleModal = (idProduct) => {
    setopenModal(!openModal);
    setProductById(idProduct);
  };

  const fetch = () => {
    axios.get(URL).then((resp) => {
      const data = resp.data.filter((user) => user.idUser === users.id);
      setInfoBooking(data);
      // console.log(data);
    });
  };

  console.log(infoBooking);

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <div className="overflow-x-auto w-full container mx-auto my-2 rounded-xl border-2 border-[#100a1866] shadow-2xl">
        <table className="table  w-full">
          {/* head */}
          <thead className="bg-[#0a0a0a]">
            <tr className="border-b border-[#aea3a3db] ">
              <th className=" border-1 border-[#cbc7c7db]  bg-[#ebebeb]">
                <label></label>
              </th>
              <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                Nombre
              </th>
              <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                Fecha inicio
              </th>
              <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                Fecha Final
              </th>
              <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                Dias
              </th>
              <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                Precio
              </th>
              <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                Total
              </th>
              <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                Info
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1  */}

            {infoBooking?.map((booking, index) => (
              <tr key={booking._id}>
                <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  <label className="flex justify-center items-end">
                    {index + 1}
                  </label>
                </th>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={booking?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  {booking.dateInit}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  {booking.dateEnd}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  {booking.numberEvening}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  {booking.price}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  {booking.total}
                </td>
                <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
                  <button
                    className="btn bg-[#A780ff] hover:bg-[#906be7] border-transparent hover:border-transparent text-white"
                    onClick={() => handleModal(booking.idProduct)}
                  >
                    Ver mas
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {openModal && (
        <ProductInfoModal
          setopenModal={setopenModal}
          openModal={openModal}
          productById={productById}
        />
      )}
    </>
  );
};

export default Bookings;
