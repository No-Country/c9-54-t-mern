import React from "react";

const ProductContainer = (props) => {
  return (
    <section className="bg-[#EBEBEB]  m-8   grid grid-auto-fit-xl justify-center ">
      {props.children}
    </section>
  );
};

export default ProductContainer;
