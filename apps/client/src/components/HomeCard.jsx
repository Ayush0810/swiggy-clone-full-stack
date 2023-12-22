import React, { useRef } from "react";
import { CarasouelCardData } from "../data/CarasouelData";

function HomeCard() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    sliderRef.current.scrollLeft -= 700;
  };

  const slideRight = () => {
    sliderRef.current.scrollLeft += 700;
  };

  return (
    <div>
      <div className="flex justify-between gap-3 right-52 z-10 top-24 mt-6">
        <h1 className="font-sans font-bold text-2xl mb-4 mt-4">
          Top restaurant chains in Bangalore
        </h1>
        <div className="">
          <button onClick={slideLeft} className="btn btn-circle">
            ❮
          </button>
          <button onClick={slideRight} className="btn btn-circle">
            ❯
          </button>
        </div>
      </div>
      <div
        className="carousel gap-6 w-full"
        ref={sliderRef}
        style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
      >
        {CarasouelCardData.map((value, index) => (
          <div key={index} className="card-container transition-all duration-200 hover:scale-95 ">
            <div className="card w-72 bg-base-100 bg-transparent relative">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bb7ae131544c7d37e10fc5faf76f09d6"
                  alt="Shoes"
                  className="rounded-3xl mx-2 h-48 object-cover shadow-lg shadow-gray-300"
                />
                  <div className="mx-2 overlay absolute bottom-0 left-0 right-0 h-24 rounded-3xl bg-gradient-to-t from-black to-transparent "></div>
            </div>
            <div className="ml-5 mt-2">
              <h2 className="font-semibold text-xl">McDonald's</h2>
              <p className="font-semibold">
                <i className="text-green-500 fa-solid fa-star"></i> 4.2 • 28mins
              </p>
              <p>Burgers, Beverages, Cafe, Desserts</p>
              <p>Ashok Nagar</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HomeCard;
