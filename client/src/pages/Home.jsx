import React from "react";
import FilterBar from "../components/filterBar/filterBar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";

import ProductContainer from "../components/sliderCard/ProductContainer";
import ProductsCard from "../components/sliderCard/ProductsCard";
import data from "../data.json";

const Home = () => {
  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <FilterBar />
        <Slider />
        <ProductContainer>
          {data.map((data, index) => (
            <ProductsCard key={index} image={data.image} data={data} />
          ))}
        </ProductContainer>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
