import Link from "next/link";
import React from "react";

const Footer = () => {
	return(
		<section className="relative bg-white mt-52 2xl:mt-5">
			<div className="flex flex-wrap justify-center">
				<div className="w-full md:w-auto p-3 md:px-6">
					<Link href='/about' passHref>
						<a className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium">
							Galéria
						</a>
					</Link>
				</div>
				<div className="w-full md:w-auto p-3 md:px-6">
					<Link href='/products' passHref>
						<a className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium">
							Bérletek
						</a>
					</Link>
				</div>
				<div className="w-full md:w-auto p-3 md:px-6">
					<Link href='/contact' passHref>
						<a className="inline-block text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium">
							Kapcsolat
						</a>
					</Link>
				</div>
			</div>
			<div className="border-b border-coolGray-100" />
			<div className="container px-4 mx-auto">
				<p className="py-10 md:pb-20 text-lg md:text-xl text-coolGray-400 font-medium text-center">
					© 2022 ME-HÖK Minden jog fenntartva
				</p>
			</div>
		</section>
	);
};
    
export default Footer;