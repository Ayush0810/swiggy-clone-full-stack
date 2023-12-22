import React, { useRef } from "react";
import SecondCarasouel from "../components/SecoundCard";
import { secondCarasouelData } from "../data/SecondCarasouel";

const itemWidth = 100; // Adjust this value to control the width of each item
const itemGap = 20; // Adjust the gap based on the custom margin you defined

function Search() {
	return (
		<div className="mt-32 flex flex-col items-center overflow-hidden">
			<input
				className="w-[55%] h-12 border border-gray-400 pl-6 font-semibold text-gray-600 focus:border-gray-400 rounded-sm"
				placeholder="Search for restaurants and food"
				type="text"
			/>

			<div>
                <h1 className="text-lg font-extrabold p-6 mt-7">Popular Cuisines</h1>
                <div  className="carousel w-[55rem]">
				{secondCarasouelData.map((value, index) => (
					<div className="carousel-item pl-7 w-[80px] cursor-pointer " key={index}>
						<img src={value.imgSrc} alt={value.imgAlt} className="w-full " />
					</div>
				))}
			</div>
			</div>

		</div>
	);
}

export default Search;
