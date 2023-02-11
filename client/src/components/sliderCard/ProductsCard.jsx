import { useState } from "react";
import styles from "./products.module.css";

const ProductsCard = ({ image, data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (x) => {
    setCurrentIndex(x);
  };

  return (
    <aside className=" bg-transparent w-[250px] h-[280px]  group m-2 rounded-xl">
      <div className="relative w-full h-[200px] ">
        <img
          className="w-full h-full  object-cover rounded-xl"
          src={image[currentIndex]}
          alt=""
        />
        <div className=" hidden group-hover:block ">
          <div
            onClick={prevSlide}
            className="w-[20px] h-[20px] absolute flex justify-center items-center cursor-pointer bg-white rounded-[50%] left-1    top-1/2 "
          >
            {" "}
            <i className="fa-solid fa-chevron-left  text-[.5rem] text-slate-800"></i>
          </div>
          <div
            onClick={nextSlide}
            className="w-[20px] h-[20px]  absolute flex justify-center items-center  cursor-pointer bg-white rounded-[50%]  hover:rounded-[50%] right-1   top-1/2"
          >
            <i className="fa-solid fa-chevron-right text-slate-800 text-[.5rem]"></i>
          </div>
        </div>
        <div className="absolute  bottom-0 flex  w-full  justify-center m-1">
          {image.map((imag, imagIndex) => (
            <div
              key={imagIndex}
              onClick={() => goToSlide(imagIndex)}
              className={`${
                imagIndex === currentIndex
                  ? `${styles.dot} ${styles.activedot}`
                  : `${styles.dot}`
              }`}
            >
              <span className="w-1 h-1 cursor-pointer "></span>
            </div>
          ))}
        </div>
      </div>
      <div className="p-1 flex flex-col">
        <div className="flex items-center justify-between py-0">
          <span className="text-[.6rem] text-[#0a0a0a]  font-bold">
            {data.title}
          </span>
          <span className="text-[.6rem]  font-semibold text-[#0a0a0a]">
            {data.city}, {data.country}
          </span>
        </div>
        <span className="text-[#9c9898] font-normal text-[.6rem]  py-0 ">
          {data.address}
        </span>
        <span className="text-right text-[#0a0a0a] font-bold text-[.6rem]    ">
          US${data.price}
        </span>
      </div>
    </aside>
  );
};

export default ProductsCard;
