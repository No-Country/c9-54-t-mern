import axios from "axios";
import React, { useEffect, useState } from "react";
import CardsFilter from "../components/cardsFilter/CardsFilter";
import FilterBar from "../components/filterBar/FilterBar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import ProductContainer from "../components/sliderCard/ProductContainer";
import ProductsCard from "../components/sliderCard/ProductsCard";
import NavBar from "../components/navBar/NavBar";

const Home = () => {
  const [products, setProducts] = useState();
  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState();
  const [cardFilter, setCardFilter] = useState({
    country: "",
    city: "",
  });
  
  const updateFilter = (filter) => {
    setFilter(filter);

  };
  const applyFilter = () => {
    setCardFilter({
      country: document.getElementById("selectCountry").value,
      city: document.getElementById("selectCity").value,
    })
  }

  
  useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.productType === filter)
        );
      }
    }, [filter]);

   useEffect(() => {
      if (cardFilter.country === "" && cardFilter.city === "") {
        setFilteredProducts(products);
      } else {
        setFilteredProducts(
          products.filter((product) => product.country === cardFilter.country && product.city === cardFilter.city)
          );
        }
      }, [cardFilter]);
  

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
        <div className="sticky top-0 z-10 bg-[#ebebeb] pt-4">
          <div className="container mx-auto ">
            <NavBar />
          </div>
          <div className="border-b-2 mt-6">
            <FilterBar updateFilter={updateFilter} />
          </div>
        </div>
        <div className="container mx-auto flex ">
          <CardsFilter applyFilter={applyFilter}></CardsFilter>
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
