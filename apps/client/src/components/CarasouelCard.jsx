import React, { useRef } from "react";
import { CarasouelCardData } from "../data/CarasouelData";

function CarasouelCard() {
	const sliderRef = useRef(null);

	const slideLeft = () => {
		sliderRef.current.scrollLeft -= 700;
	};

	const slideRight = () => {
		sliderRef.current.scrollLeft += 700;
	};

	return (
		<>
			<div className="absolute flex justify-between gap-3 right-52 z-10 top-24">
				<button onClick={slideLeft} className="btn btn-circle">
					❮
				</button>
				<button onClick={slideRight} className="btn btn-circle">
					❯
				</button>
			</div>
			<div
				className="carousel gap-6 w-full"
				ref={sliderRef}
				style={{ overflowX: "scroll", whiteSpace: "nowrap" }}
			>
				{CarasouelCardData.map((value, index) => (
					<div
						key={index}
						className="carousel-item relative inline-block w-[37%]"
					>
						<img src={value.imgSrc} alt={value.imgAlt} className="w-full" />
					</div>
				))}
			</div>
  
		</>
	);
}

export default CarasouelCard;
