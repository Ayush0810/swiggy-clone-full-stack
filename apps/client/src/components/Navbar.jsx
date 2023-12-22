import React from "react";
import help from "../assets/pokeball.png";
import SideModel from "./SideModel";
import SignupModal from "./SignupModal";
import { Link } from "react-router-dom";
function Navbar() {
	const openModal = () => {};
	return (
		<div className="navbar bg-base-100 px-24 shadow-xl fixed z-20">
			<div className="flex-1 ">
			<Link to={"/"}>
			<img
					className="w-40 px-5 contrast-200 hover:scale-110 transition-all duration-200 cursor-pointer "
					src="https://onlytech.com/wp-content/uploads/2020/07/Swiggy-Logo.jpg"
					alt=""
				/>
			</Link>

				<h1>
					<a
						className="underline decoration-[1.7px] hover:text-orange-400  text-sm font-bold underline-offset-8 "
						href=""
					>
						Nagarathpete
					</a>{" "}
					Bengaluru, Karnataka 56000...{" "}
					<span>
						<i className="text-xl  text-orange-400  font-extrabold fi fi-rr-angle-small-down"></i>
					</span>{" "}
				</h1>
			</div>
			<div className="flex space-x-11 ">
				<Link to={"/search"}>
				<div className="flex gap-2 text-lg font-sans font-semibold hover:text-orange-400 cursor-pointer">
					<span>
						<i className="fa-solid fa-magnifying-glass"></i>
					</span>
					<h1>Search</h1>
				</div>
				</Link>
				<Link to={"/offer"}>
				<div className="flex gap-2 text-lg font-sans font-semibold hover:text-orange-400 cursor-pointer">
					<span>
						<i className="fi fi-rr-badge-percent"></i>
					</span>
					<h1>Offer</h1>
				</div>
				</Link>
				<Link to={"/help"}>
				<div className="flex gap-2  align-middle text-lg font-sans font-semibold hover:text-orange-400 cursor-pointer">
					<span>
						<i className="fa-solid fa-bullseye"></i>
					</span>
					<h1>Help</h1>
				</div>
				</Link>
			<Link to={"/signup"}>
			<div
					onClick={() => document.getElementById("my_modal_3").showModal()}
					className="flex gap-2 text-lg font-sans font-semibold hover:text-orange-400 cursor-pointer"
				>
					<span>
						<i className="fa-regular fa-user"></i>
					</span>
					<h1>Sign In</h1>
				</div>
			</Link>
				<Link to={"/cart"}>
				<div className="flex gap-2 text-lg font-sans font-semibold hover:text-orange-400 cursor-pointer">
					<span>
						<i className="fa-regular fa-square"></i>
					</span>
					<h1>Cart</h1>
				</div>
				</Link>
			</div>
        {/* <SideModel/> */}
		<SignupModal/>
		</div>
	);
}

export default Navbar;
