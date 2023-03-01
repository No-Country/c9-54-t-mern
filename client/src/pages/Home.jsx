import axios from "axios";
import React, { useEffect, useState } from "react";
import FilterBar from "../components/filterBar/filterBar";
import Footer from "../components/footer/Footer";
import Slider from "../components/slider/Slider";
import ProductContainer from "../components/sliderCard/ProductContainer";
import ProductsCard from "../components/sliderCard/ProductsCard";
import NavBar from "../components/navBar/navBar";
import { useSelector } from "react-redux";
import Squeleton from "./Squeleton";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const search = useSelector((state) => state.search);

  const URL =
    "https://tudestinoapp-api-production.up.railway.app/api/products/all/search?searchText=";

  useEffect(() => {
    setIsLoading(true);

    if (search !== "") {
      axios.get(`${URL}${search}`).then((resp) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1700);

        if (resp.data.length > 0) {
          setProducts(resp.data);
          setFilteredProducts(resp.data);
        } else {
          setProducts([]);
          setFilteredProducts([]);
        }
      });
    } else {
      axios.get(`${URL}`).then((resp) => {
        setTimeout(() => {
          setIsLoading(false);
        }, 1700);

        setProducts(resp.data);
        setFilteredProducts(resp.data);
      });
    }
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

  const squeletonArray = [1, 2, 3, 4, 5];

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <Slider />
        <div className="sticky top-0 z-10 bg-[#ebebeb] pt-4">
          <div className="container mx-auto">
            <NavBar />
          </div>
          <div className="container mx-auto border-b-2 mt-6">
            <FilterBar updateFilter={updateFilter} />
          </div>
          {search !== "" && (
            <div className="container mx-auto border-b-2 cursor-default">
              <div className="text-lg breadcrumbs mx-10">
                <ul>
                  <li>Disponible en</li>
                  <li className="text-[#A780ff]">{search}</li>
                </ul>
              </div>
            </div>
          )}
        </div>
        <div className="container mx-auto relative min-h-[16rem]">
          <ProductContainer>
            {isLoading === false ? (
              <>
                {products.length > 0 ? (
                  filteredProducts?.map((prod, index) => (
                    <ProductsCard key={index} image={prod.image} data={prod} />
                  ))
                ) : (
                  <h2 className="p-5 text-[2rem] text-slate-400 absolute top-0 left-[1rem] max-[795px]:left-0 uppercase">
                    No se encontraron coincidencias{" "}
                  </h2>
                )}
              </>
            ) : (
              squeletonArray?.map((prod, index) => (
                <div key={index}>
                  <Squeleton />
                </div>
              ))
            )}
          </ProductContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
