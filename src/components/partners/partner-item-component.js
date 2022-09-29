import React from "react";

const PartnerItem = () => {
	return(

		<section className="py-20 xl:pt-24 bg-white" style={{backgroundImage: "url('flex-ui-assets/elements/pattern-white.svg')", backgroundPosition: "center"
		}}>

			<div className="mb-8 text-center">
				<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">Our Clients</span>
				<h3 className="mb-4 text-4xl md:text-5xl text-coolGray-900 font-bold tracking-tighter">Trusted by the top companies in this industry</h3>
				<p className="text-lg md:text-xl text-coolGray-500 font-medium">The only SaaS business platform that combines CRM, marketing automation &amp; commerce.</p>
			</div>
			<div className="flex flex-wrap justify-center -mx-4">
				<div className="w-1/2 md:w-1/3 lg:w-1/5 px-4 mb-8 lg:mb-0">
					<div className="flex items-center h-32 md:h-36 px-4 md:px-8 rounded-md bg-coolGray-50 shadow-md">
						<img className="mx-auto" src="logos/men-logo.png" alt=""/>
					</div>
				</div>
			</div>
		</section>


 

	);
};
export default PartnerItem;
