import React from "react";

const ContactHero = () => {
	return(


		<section className="py-20 bg-white" style={{backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: "center"
		}}>
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap mb-24 lg:mb-18 justify-between items-center">
					<div className="w-full lg:w-1/2 mb-10 lg:mb-0">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">Contact</span>
						<h3 className="mb-4 text-4xl md:text-5xl text-darkCoolGray-900 font-bold tracking-tighter leading-tight">Lets stay connected</h3>
						<p className="text-lg md:text-xl text-coolGray-500 font-medium">Its never been easier to get in touch with Flex. Call us, use our live chat widget or email and well get back to you as soon as possible!</p>
					</div>
					<div className="w-full lg:w-auto">
						<div className="flex flex-wrap justify-center items-center md:justify-start -mb-2"><a className="inline-block py-4 px-6 mb-2 md:mb-0 w-full md:w-auto md:mr-5 text-lg leading-6 text-coolGray-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm" href="#">Open Positions</a><a className="inline-block py-4 px-6 w-full md:w-auto text-lg leading-6 font-medium text-center text-coolGray-500 bg-white border border-coolGray-200 hover:border-coolGray-300 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 rounded-md shadow-sm" href="#">About Us</a></div>
					</div>
				</div>
			</div>
		</section>
	);
};
        


    
    
    
export default ContactHero;