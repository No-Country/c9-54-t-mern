import axios, { all } from "axios";
import React, { useEffect, useState } from "react";
import FilterBar from "../components/filterBar/filterBar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import ProductContainer from "../components/sliderCard/ProductContainer";
import ProductsCard from "../components/sliderCard/ProductsCard";

const Home = () => {
  const [products, setProducts] = useState();
  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState();

  const updateFilter = (filter) => {
      setFilter(filter)
  }

  useEffect(() => {
    if(filter === "all"){
      setFilteredProducts(products)
    } else{
      setFilteredProducts(products.filter(product => product.productType === filter));
    }
  }, [filter]);

  useEffect(() => {
    axios
      .get("https://tudestinoapp-production.up.railway.app/api/products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div className="h-full flex flex-col justify-between">
      <div>
        <Slider />
        <div className="mt-3 border-b-2">
          <FilterBar updateFilter={updateFilter}/>
        </div>
        <div className="container mx-auto">
          <ProductContainer>
            {filteredProducts?.map((prod, index) => (
              <ProductsCard key={index} image={prod.image} data={prod} />
            ))}
          </ProductContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
