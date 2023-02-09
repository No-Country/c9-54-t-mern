import "./App.css";
import FilterBar from "./components/filterBar/filterBar";
import Landing from "./components/landing/Landing";
import ProductContainer from "./components/sliderCard/ProductContainer";
import ProductsCard from "./components/sliderCard/ProductsCard";
import data from "./data.json";

function App() {
  return (
    <>
      <ProductContainer>
        {data.map((data, index) => (
          <ProductsCard key={index} image={data.image} data={data} />
        ))}
      </ProductContainer>
      <Landing />
      <FilterBar />
    </>
  );
}

export default App;
