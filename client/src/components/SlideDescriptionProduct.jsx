import React, { useState } from "react";

const SlideDescriptionProduct = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.image.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.image.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {data !== undefined && (
        <div className="relative w-full h-[320px]">
          <label htmlFor="my-modal-3">
            <img
              className="w-full h-full  object-cover"
              src={data.image[currentIndex]}
              alt="image"
            />
          </label>
          <div className="group-hover:block ">
            <div
              onClick={prevSlide}
              className="w-[2rem] h-[2rem] absolute flex justify-center items-center cursor-pointer bg-white rounded-[50%] left-1 top-1/2 "
            >
              {" "}
              <i className="fa-solid fa-chevron-left  text-slate-800"></i>
            </div>
            <div
              onClick={nextSlide}
              className="w-[2rem] h-[2rem]  absolute flex justify-center items-center  cursor-pointer bg-white rounded-[50%]  hover:rounded-[50%] right-1   top-1/2"
            >
              <i className="fa-solid fa-chevron-right text-slate-800 "></i>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SlideDescriptionProduct;
