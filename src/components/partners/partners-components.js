import React from "react";

const Partners = () => {
	return(
		<div className="pt-10 absolute -bottom-36 left-0 bg-white w-full h-[28vh] 2xl:h-[37vh]">
			<div className="mb-8 text-center">
				<span className="inline-block py-px px-2 mb-10 text-3xl leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
					Támogatóink
				</span>
			</div>
			<div className="flex flex-wrap justify-center">
				<div className="flex items-center h-32 md:h-36  rounded-md bg-coolGray-50 shadow-md">
					<img className="mx-auto" src="logos/men-logo.png" alt=""/>
				</div>
			</div>
		</div>
	);
};

export default Partners;