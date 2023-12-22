import React from "react";
import { CarasouelCardData } from "../data/CarasouelData";

function HomeCards({title}) {
  return (
    <div>
      <h1 className="font-sans font-bold text-2xl mb-4 mt-4">
      {title}
      </h1>
      <div className="flex gap-3 mb-7 mt-5">
        <button className="btn btn-sm shadow-lg rounded-full font-normal ">Filter<i className="fi fi-sr-settings-sliders"></i></button>
        <button className="btn btn-sm shadow-lg bg-white rounded-full font-normal">Sort By</button>
        <button className="btn btn-sm shadow-lg bg-white  rounded-full font-normal">Fast Delivery</button>
        <button className="btn btn-sm shadow-lg bg-white  rounded-full font-normal">New on Swiggy</button>
        <button className="btn btn-sm shadow-lg bg-white  rounded-full font-normal">Ratings 4.0+</button>
        <button className="btn btn-sm shadow-lg bg-white  rounded-full font-normal">Pure Veg</button>
        <button className="btn btn-sm shadow-lg bg-white  rounded-full font-normal">Offers</button>
        <button className="btn btn-sm shadow-lg bg-white  rounded-full font-normal">Rs. 300-Rs. 600</button>
        <button className="btn btn-sm shadow-lg bg-white  rounded-full font-normal">Less than Rs. 300</button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
        {CarasouelCardData.map((value, index) => (
          <div key={index} className="card-container transition-all duration-200 hover:scale-95">
            <div className="card bg-base-100 bg-transparent  relative">
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

export default HomeCards;
