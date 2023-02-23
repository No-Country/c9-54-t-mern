import React from "react";
import hote from "../../assets/hotel.jpg";

const Bookings = () => {
  return (
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
              Fecha
            </th>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              Dias
            </th>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              Direccion
            </th>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              Total
            </th>
          </tr>
        </thead>
        <tbody>
          {/* row 1  */}
          <tr>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              <label className="flex justify-center items-end">1</label>
            </th>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={hote} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              05/12/2023
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              3
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              av. arequipa
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              0
            </td>
          </tr>
          {/* row 2  */}
          <tr>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              <label className="flex justify-center items-end">2</label>
            </th>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={hote} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              05/12/2023
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              3
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              av. arequipa
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              0
            </td>
          </tr>
          {/* row 3 */}
          <tr>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              <label className="flex justify-center items-end">3</label>
            </th>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={hote} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              05/12/2023
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              2
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              av. arequipa
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              0
            </td>
          </tr>
          {/* row 4  */}
          <tr>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              <label className="flex justify-center items-end">4</label>
            </th>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={hote} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              05/12/2023
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              1
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              av. arequipa
            </td>
            <td className=" border-[#9b9898db] bg-[#ebebeb] text-[#394e6a]">
              0
            </td>
          </tr>
        </tbody>
        {/* foot  */}
        <tfoot>
          <tr>
            {/* <th className=" border-[#9b9898db] bg-[#ebebeb] text-black"></th>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-black">
              Nombre
            </th>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-black">
              Fecha
            </th>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-black">
              Dias
            </th>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-black">
              Direccion
            </th>
            <th className=" border-[#9b9898db] bg-[#ebebeb] text-black">
              Total
            </th> */}
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Bookings;
