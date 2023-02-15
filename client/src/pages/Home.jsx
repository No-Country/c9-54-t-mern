import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterBar from "../components/filterBar/filterBar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";

import ProductContainer from "../components/sliderCard/ProductContainer";
import ProductsCard from "../components/sliderCard/ProductsCard";
import data from "../data.json";

const Home = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    axios
      .get("https://tudestinoapp-production.up.railway.app/api/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <FilterBar />
        <Slider />
        <ProductContainer>
          {products?.map((prod, index) => (
            <ProductsCard key={index} image={prod.image} data={prod} />
          ))}
        </ProductContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
