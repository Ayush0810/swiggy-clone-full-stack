import React, { useRef } from "react";
import CarasouelCard from "../components/CarasouelCard";
import SecondCarasouel from "../components/SecoundCard";
import HomeCard from "../components/HomeCard";
import HomeCards from "../components/HomeCards";
import Footer from "../components/Footer";
const itemWidth = 160; // Adjust this value to control the width of each item
const itemGap = 10; // Adjust this value to control the gap between items
function Home() {
	const sliderRef = useRef(null);
	const slideLeft = () => {
		sliderRef.current.scrollLeft -= itemWidth + itemGap;
	};

	const slideRight = () => {
		sliderRef.current.scrollLeft += itemWidth + itemGap;
	};

	return (
		<>
			<div className="mx-48 mt-28 ">
				<h1 className="font-sans font-bold text-2xl mb-4">
					Best offers for you
				</h1>
				<CarasouelCard />
				<div className="flex justify-between align-middle">
					<h1 className="font-sans font-bold text-2xl mb-4 mt-4">
						What's on your mind?
					</h1>
					<div className="   flex align-middle gap-3 right-52 z-10 top-96">
						<button onClick={slideLeft} className="btn btn-circle">
							❮
						</button>
						<button onClick={slideRight} className="btn btn-circle">
							❯
						</button>
					</div>
				</div>
				<SecondCarasouel sliderRef={sliderRef} />
				<hr className="text-black font-bold mt-10" />
				<HomeCard />
				<hr className="text-black font-bold mt-10" />
				<HomeCards title="Restaurants with online food delivery in Bangalore" />
			</div>
			<Footer />
		</>
	);
}

export default Home;
