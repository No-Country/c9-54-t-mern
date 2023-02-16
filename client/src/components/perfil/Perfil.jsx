import React from "react";
import { useState } from "react";
import hote from "../../assets/hotel.jpg";

const Perfil = () => {
  const [select, setselect] = useState(true);

  const change = () => {
    setselect(!select);
  };

  console.log(select);
  return (
    <>
      <div className="tabs tabs-boxed">
        <a
          onClick={change}
          className={select ? "tab tab-active bg-orange-600" : "tab"}
        >
          Informacion Personal
        </a>
        <a onClick={change} className={select ? "tab" : "tab tab-active"}>
          Reservas
        </a>
      </div>
      {select ? (
        <div className="w-[60%] m-auto h-[100vh] flex gap-2 flex-col my-4">
          <div className="w-full h-[400px] bg-slate-400"></div>
          <div className="w-full h-[400px] bg-slate-400"></div>
        </div>
      ) : (
        <div className="overflow-x-auto w-full ">
          <table className="table bg-white w-full">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Dias</th>
                <th>Direccion</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1  */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
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
                <td>05/12/2023</td>
                <td>3</td>
                <td>av. arequipa</td>
                <td>0</td>
              </tr>
              {/* row 2  */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
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
                <td>05/12/2023</td>
                <td>3</td>
                <td>av. arequipa</td>
                <td>0</td>
              </tr>
              {/* row 3 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
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
                <td>05/12/2023</td>
                <td>2</td>
                <td>av. arequipa</td>
                <td>0</td>
              </tr>
              {/* row 4  */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
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
                <td>05/12/2023</td>
                <td>1</td>
                <td>av. arequipa</td>
                <td>0</td>
              </tr>
            </tbody>
            {/* foot  */}
            <tfoot>
              <tr>
                <th></th>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Dias</th>
                <th>Direccion</th>
                <th>Total</th>
              </tr>
            </tfoot>
          </table>
        </div>
      )}
    </>
  );
};

export default Perfil;
