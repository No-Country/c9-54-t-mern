import React from "react";

const ProductContainer = (props) => {
  return (
    <section className="bg-slate-500 w-11/12 m-auto h-full product__container flex gap-4 ">
      {props.children}
    </section>
  );
};

export default ProductContainer;
