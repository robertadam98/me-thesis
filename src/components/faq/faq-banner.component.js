import React from "react";
import Link from "next/link";

const FaqBanner = () => {
	return(
		<div className="relative -mb-40 py-16 px-4 md:px-8 lg:px-16 bg-coolGray-900 rounded-md overflow-hidden">
			<div className="relative max-w-max mx-auto text-center">
				<h3 className="text-2xl md:text-5xl leading-tight font-bold text-white tracking-tighter mb-5">
					További kérdéseid vannak?
				</h3>
				<Link href='/contact' passHref>
					<a className="inline-flex items-center justify-center px-7 py-3 h-14 w-full md:w-auto mb-2 md:mb-0 md:mr-4 text-lg leading-7 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-transparent rounded-md shadow-sm">
					Írj nekünk!
					</a>
				</Link>
			</div>
		</div>
	);
};

export default FaqBanner;