import React from "react";
function Footer() {
	return (
		<>
			<div className="mt-32 w-full bg-gray-300 p-2 mb-1">
				<div className=" h-20 px-14 gap-7  mx-48 flex mt-5 align-middle ">
					<h1 className="font-semibold text-3xl w-[50%] text-gray-700 ">
						For better experience,download the Swiggy app now
					</h1>
					<button className="w-60">
						<img
							src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png"
							alt=""
						/>
					</button>
					<button className="w-56 pt mx-6">
						<img
							src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png"
							alt=""
						/>
					</button>
				</div>
			</div>
			<div className="bg-black ">
				<footer className="footer text-gray-400 text-[1.1rem]  px-72  pt-7 ">
					<nav className="w-[50%]">
						<header className="font-bold text-xl text-white flex">
							
							Swiggy  
						</header>
						<a className="link link-hover">
							© 2023 Bundl Technologies Pvt. Ltd
						</a>
					</nav>
					<nav>
						<header className="font-bold text-xl text-white">Company</header>
						<a className="link link-hover">About</a>
						<a className="link link-hover">Careers</a>
						<a className="link link-hover">Team</a>
						<a className="link link-hover">Swiggy One</a>
						<a className="link link-hover">Swiggy Instamart</a>
						<a className="link link-hover">Swiggy Genie</a>
					</nav>
					<nav>
						<header className="font-bold text-xl text-white">
							{" "}
							Contact us
						</header>
						<a className="link link-hover"> Help & Support</a>
						<a className="link link-hover"> Partner with us</a>
						<a className="link link-hover"> Ride with us</a>
						<header className="font-bold text-xl text-white mt-12">
							Legal
						</header>
						<a className="link link-hover">Terms & Conditions</a>
						<a className="link link-hover"> Cookie Policy</a>
						<a className="link link-hover">Privacy Policy</a>
					</nav>
					<nav>
						<header className="font-bold text-xl text-white">
							{" "}
							We deliver to:
						</header>
						<a className="link link-hover"> Bangalore</a>
						<a className="link link-hover">Gurgaon</a>
						<a className="link link-hover"> Delhi</a>
						<a className="link link-hover"> Hyderabad</a>
						<a className="link link-hover">Mumbai</a>
						<a className="link link-hover"> Pune</a>
					</nav>
				</footer>
			</div>
		</>
	);
}

export default Footer;
