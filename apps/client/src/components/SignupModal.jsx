import React from "react";

function SignupModal() {
	return (
		<div className="">
			<dialog id="my_modal_3" className="modal ">
				<div className="modal-box h-[100vh]  rounded-none absolute right-0 top-0">
					<form method="dialog ">
						<button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2 text-2xl ml-2">
							✕
						</button>
					</form>
					<div className="flex justify-between w-[80%]">
						<div>
							<h3 className="font-semibold text-3xl mt-6">Sign up</h3>
							<h3 className="font-semibold mt-2 text-sm">
								or{" "}
								<span className="font-semibold mt-2 text-sm text-orange-400 cursor-pointer">
                                login to your account
								</span>
							</h3>
							<div className=""></div>
						</div>
						<img
							src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
							alt=""
							className="w-24 "
						/>
					</div>

					<form action="" className="flex flex-col">
						<input
							className="w-[80%] h-16 border border-b-0 border-gray-500 mt-5 pl-5"
							placeholder="Phone number"
							type="text"
						/>
						<input
							className="w-[80%] h-16 border border-b-0 border-gray-500  pl-5"
							placeholder="Phone number"
							type="text"
						/>
						<input
							className="w-[80%] h-16 border border-gray-500 pl-5"
							placeholder="Phone number"
							type="text"
						/>
                        <a className="mt-6 text-blue-400 font-semibold" href="">Have a referral code?</a>
						<button className="btn  w-[80%] mt-7 rounded-none bg-orange-500 border-orange-400 hover:bg-orange-500 text-white">
							Continue
						</button>
						<p className="font-semibold mt-2 text-xs w-[80%]">
							By clicking on Login, I accept the Terms & Conditions & Privacy
							Policy
						</p>
					</form>
				</div>
			</dialog>
		</div>
	);
}

export default SignupModal;
