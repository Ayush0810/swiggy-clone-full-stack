import React, { useRef } from "react";
import { secondCarasouelData } from "../data/SecondCarasouel";

const itemWidth = 160; // Adjust this value to control the width of each item
const itemGap = 10;  // Adjust this value to control the gap between items

function SecondCarasouel({sliderRef}) {

  return (
    <>
      <div className="carousel w-full " ref={sliderRef} style={{ overflowX: "hidden" }}>
        <div className="carousel-content flex">
          {secondCarasouelData.map((value, index) => (
            <div key={index} style={{padding:"10px" ,width: `${itemWidth}px`, marginRight: `${itemGap}px` }}>
              <img src={value.imgSrc} alt={value.imgAlt} style={{ width: "100%", height: "auto" }} />
            </div>
          ))}
        </div>
      </div>
      
    </>
  );
}

export default SecondCarasouel;
