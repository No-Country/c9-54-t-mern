import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterBar from "../components/filterBar/FilterBar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import ProductContainer from "../components/sliderCard/ProductContainer";
import ProductsCard from "../components/sliderCard/ProductsCard";
import NavBar from "../components/navBar/NavBar";
import { useSelector } from "react-redux";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState();

  const search = useSelector((state) => state.search);

  useEffect(() => {
    axios
      .get("https://tudestinoapp-api-production.up.railway.app/api/products")
      .then((res) => {
        let result;

        if (search !== "") {
          result = res.data.filter(
            (item) => item.country.toLowerCase() === search.toLowerCase()
          );

          if (result.length > 0) {
            setProducts(result);
            setFilteredProducts(result);
          } else {
            setProducts([]);
            setFilteredProducts([]);
          }
        } else {
          setProducts(res.data);
          setFilteredProducts(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [search]);

  const updateFilter = (filter) => {
    setFilter(filter);
  };

  useEffect(() => {
    if (filter === "all") {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) => product.productType === filter)
      );
    }
  }, [filter]);

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Slider />
        <div className="sticky top-0 z-10 bg-[#ebebeb] pt-4">
          <div className="container mx-auto ">
            <NavBar />
          </div>
          <div className="container mx-auto border-b-2 mt-6">
            <FilterBar updateFilter={updateFilter} />
          </div>
        </div>
        <div className="container mx-auto relative min-h-[16rem]">
          <ProductContainer>
            {products.length > 0 ? (
              filteredProducts?.map((prod, index) => (
                <ProductsCard key={index} image={prod.image} data={prod} />
              ))
            ) : (
              <h2 className="p-5 text-[2rem] text-slate-400 absolute top-0 left-[1rem] max-[795px]:left-0 uppercase">
                No se encontraron coincidencias{" "}
              </h2>
            )}
          </ProductContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
