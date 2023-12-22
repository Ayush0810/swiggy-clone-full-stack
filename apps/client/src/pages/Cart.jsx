import React from "react";
import { User } from "lucide-react";
function Cart() {
	return (
		<div className="mt-60 flex flex-col items-center space-y-5">
			<img className='w-[271px] h-[256px] ' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0" alt="" />

     <div className='text-center'>
     <h1 className='font-bold text-xl'>Your cart is empty</h1>
      <p className='text-gray-400 text-sm'>You can go to home page to view more restaurants</p>
     </div>
      <button className='btn bg-orange-400 w-[20%] rounded-none text-white hover:bg-orange-400 uppercase font-bold '>See Restaurants near you</button>
			<div className="p-4 mt-36">
				<div className="container">
					<div className="flex flex-col md:grid grid-cols-12 ">
						<div className="flex md:contents">
							<div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
								<div className="w-6 h-6 absolute top-1/2 -mt-3 shadow p-4 ">
									<User className="z-12" color="#000" />
								</div>
							</div>
							<div className=" col-start-4 col-end-10 p-4 my-4  shadow-md w-full flex justify-between">
								<div className="mx-4">
									<h3 className="font-bold text-lg mb-1">Account</h3>
									<p className="leading-tight text-justify w-full text-gray-500">
										To place your order now, log in to your existing account or
										sign up.
									</p>

									<div className="mt-10 flex gap-4">
										<button className="bg-white border px-7 border-green-500 flex flex-col text-green-600 font-extralight text-xs py-1 ">
											Have an account?
											<span className="text-green-400 font-bold	">LOG IN</span>
										</button>
										<button className="bg-[#60b246] text-white	  font-extralight text-sm py-1 flex flex-col px-10 ">
											New to Swiggy?
											<span className="font-bold	">SIGN UP</span>
										</button>
									</div>
								</div>
								<img
									src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
									alt=""
									className="w-40 "
								/>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:grid grid-cols-12 ">
						<div className="flex md:contents">
							<div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
								<div className="w-6 h-6 absolute top-1/2 -mt-3   shadow p-4 ">
									<User className="z-12" color="#000" />
								</div>
							</div>
							<div className=" col-start-4 col-end-10 p-4 my-4  shadow-md w-full flex justify-between">
								<div className="mx-4">
									<h3 className="font-semibold text-lg mb-1 text-gray-400">Delivery address</h3>
								</div>
							</div>
						</div>
					</div>
					<div className="flex flex-col md:grid grid-cols-12 ">
						<div className="flex md:contents">
							<div className="col-start-2 col-end-4 mr-10 md:mx-auto relative">
								<div className="w-6 h-6 absolute top-1/2 -mt-3   shadow p-4 ">
									<User className="z-12" color="#000" />
								</div>
							</div>
							<div className=" col-start-4 col-end-10 p-4 my-4  shadow-md w-full flex justify-between">
								<div className="mx-4">
									<h3 className="font-semibold text-lg mb-1 text-gray-400">Payment</h3>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Cart;
