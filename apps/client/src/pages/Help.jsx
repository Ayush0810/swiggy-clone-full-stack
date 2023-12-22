import React from "react";

function Help() {
	return (
		<div className=" bg-[#37718e] h-[100vh] overflow-auto">
			<div className="pl-40 pt-40">
				<h1 className="font-semibold text-3xl text-white ">Help & Support</h1>
				<p className="text-white ">
					Let's take a step ahead and help you better.
				</p>
			</div>
			<div className="mx-28 bg-white h-[80%] mt-9 p-10 flex">
				<div className="bg-gray-200 w-[20%] h-[95%] flex flex-col pl-5 pt-7 space-y-3 ">
					<a
						className="hover:font-bold transition-all ease-in-out duration-100 focus:bg-white pl-10 py-4 inline-block"
						href="/Partner-Onboarding"
					>
						Partner Onboarding
					</a>
					<a
						className="hover:font-bold transition-all ease-in-out duration-100 foucs:bg-white pl-10 py-4 inline-block"
						href=""
					>
						Legal
					</a>
					<a
						className="hover:font-bold transition-all ease-in-out duration-100  focus:bg-white pl-10 py-4 inline-block"
						href=""
					>
						FAQs
					</a>
				</div>
				<div className="mx-7 p-7">
        <h1 className="font-bold text-2xl mx-4">Partner Onboarding</h1>
					<div className="collapse collapse-arrow bg-base-200 ">
						<input type="radio" name="my-accordion-2" checked="checked" />
						<div className="collapse-title text-xl font-medium  bg-white">
							Click to open this one and close others
						</div>
						<div className="collapse-content ">
							<p>hello</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-base-200">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium bg-white">
							Click to open this one and close others
						</div>
						<div className="collapse-content  bg-white">
							<p>hello</p>
						</div>
					</div>
					<div className="collapse collapse-arrow bg-base-200">
						<input type="radio" name="my-accordion-2" />
						<div className="collapse-title text-xl font-medium  bg-white">
							Click to open this one and close others
						</div>
						<div className="collapse-content">
							<p>hello</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Help;
