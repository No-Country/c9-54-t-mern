import React from "react";

const ProductContainer = (props) => {
  return (
    <section className="bg-[#EBEBEB] w-[100%]  h-auto flex flex-wrap justify-center items-center">
      {props.children}
    </section>
  );
};

export default ProductContainer;
