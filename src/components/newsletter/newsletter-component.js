import React from "react";

const Newsletter = () => {
	return(
		<section className="py-24 bg-coolGray-900">
			<div className="container px-4 mx-auto">
				<div className="relative py-16 md:py-32 px-6 text-center bg-white overflow-hidden rounded-7xl" style={{backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: "center"
				}}>
					<div className="relative z-10 mx-auto md:max-w-2xl">
						<h3 className="mb-4 text-3xl md:text-4xl leading-tight font-bold tracking-tighter">Be the first to know when we launch</h3>
						<p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium">Stay in the loop with everything you need to know.</p>
						<div className="mx-auto md:max-w-md text-left">
							<div className="flex flex-wrap mb-1">
								<div className="w-full md:flex-1 mb-3 md:mb-0 md:mr-6">
									<input className="w-full py-3 px-4 text-coolGray-500 leading-tight placeholder-coolGray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-coolGray-200 rounded-lg shadow-xsm" type="text" placeholder="Enter your email"/>
								</div>
								<div className="w-full md:w-auto"><a className="inline-block py-3 px-5 w-full leading-5 text-white bg-green-500 hover:bg-green-600 font-medium text-center focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm" href="#">Subscribe</a></div>
							</div>
							<span className="text-xs text-coolGray-500 font-medium">
								<span>We care about your data in our</span>
								<a className="text-green-500 hover:text-green-600" href="#">privacy policy</a>
							</span>
						</div>
					</div>
					<img className="absolute top-0 left-0 w-28 md:w-auto" src="flex-ui-assets/elements/wave2-yellow.svg" alt=""/>
					<img className="absolute right-6 top-6 w-28 md:w-auto" src="flex-ui-assets/elements/dots3-green.svg" alt=""/>
					<img className="absolute right-0 bottom-0 w-28 md:w-auto" src="flex-ui-assets/elements/wave3-red.svg" alt=""/>
					<img className="absolute left-6 bottom-6 w-28 md:w-auto" src="flex-ui-assets/elements/dots3-violet.svg" alt=""/>
				</div>
			</div>
		</section>
	);
};

export default Newsletter;