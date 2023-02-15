import React, { useEffect, useState } from "react";
import GaleryProduct from "../components/GaleryProduct";
import Footer from "../components/footer/Footer";
import SlideDescriptionProduct from "../components/SlideDescriptionProduct";
import ModalGalery from "../components/ModalGalery";
import { useParams } from "react-router-dom";
import getProduct from "../services/getProduct.services";
import Map from "../components/Map";

const DescriptionProduct = () => {
  const [data, setData] = useState();
  const { productId } = useParams();

  useEffect(() => {
    getProduct(productId).then((resp) => {
      setData(resp?.data);
    });
  }, []);

  return (
    <>
      {data !== undefined && (
        <div className="min-h-screen flex flex-col justify-between">
          <div>
            <div className="mx-auto max-[800px]:p-2 max-[800px]:w-full max-[1200px]:w-5/6 w-3/4 my-10 ">
              <h2 className="text-slate-800 text-2xl py-2 capitalize">
                {data.title}{" "}
                <span className="text-sm underline">{data.country} - </span>
                <span className="text-sm underline">{data.city}</span>
              </h2>
              <div className="hidden min-[700px]:block rounded-3xl shadow-xl">
                <GaleryProduct data={data} />
              </div>
              <div className="min-[700px]:hidden min-[700px]:w-full  shadow-xl">
                <SlideDescriptionProduct data={data} />
              </div>
            </div>
            <div className="mx-auto max-[800px]:p-2 max-[800px]:w-full max-[1200px]:w-5/6 w-3/4 mb-5">
              <Map data={data} />
            </div>
            <ModalGalery data={data} />
          </div>
          <div>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
};

export default DescriptionProduct;
