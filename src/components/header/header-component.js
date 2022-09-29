import React, { useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import HeaderAuth from "./header-auth-component";
import HeaderCart from "./header-cart-component";

const Header = () => {
	const { data: session, loading} = useSession();

	return(
		<nav className="flex justify-between">
			<div className="flex justify-between items-center w-full z-[9999] bg-white py-2 px-4">
				<div className="w-1/2 xl:w-1/5">
					<Link href='/' passHref>
						<a className="block max-w-max" >
							<img className="h-16" src="/logos/men-logo.png" alt=""/>
						</a>
					</Link>
				</div>
				<div className="w-1/2 xl:w-2/5">
					<ul className="hidden xl:flex xl:justify-center">
						<Link href="/" passHref >
							<li className="mr-12">
								<a className="text-coolGray-500 hover:text-coolGray-900 font-medium cursor-pointer" >
									Kezdőlap
								</a>
							</li>
						</Link>
						<Link href="/products" passHref >
							<li className="mr-12">
								<a className="text-coolGray-500 hover:text-coolGray-900 font-medium cursor-pointer" >
									Bérletek
								</a>
							</li>					
						</Link>		
						<Link href="/about" passHref >
							<li className="mr-12">
								<a className="text-coolGray-500 hover:text-coolGray-900 font-medium cursor-pointer" >
									Rólunk
								</a>
							</li>
						</Link>
						<Link href="/contact" passHref >
							<li className="mr-12">
								<a className="text-coolGray-500 hover:text-coolGray-900 font-medium cursor-pointer" >
									Kapcsolat
								</a>
							</li>
						</Link>
						{session && (
							<Link href="/profile" passHref >
								<li className="mr-12">
									<a className="text-coolGray-500 hover:text-coolGray-900 font-medium cursor-pointer" >
									Profil
									</a>
								</li>
							</Link>
						)}
					</ul>
				</div>
				<HeaderCart />
				<HeaderAuth
					session={session}
					loading={loading}
				/>
				<button className="navbar-burger self-center xl:hidden">
					<svg width="35" height="35" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect className="text-coolGray-50" width="32" height="32" rx="6" fill="currentColor"></rect>
						<path className="text-coolGray-500" d="M7 12H25C25.2652 12 25.5196 11.8946 25.7071 11.7071C25.8946 11.5196 26 11.2652 26 11C26 10.7348 25.8946 10.4804 25.7071 10.2929C25.5196 10.1054 25.2652 10 25 10H7C6.73478 10 6.48043 10.1054 6.29289 10.2929C6.10536 10.4804 6 10.7348 6 11C6 11.2652 6.10536 11.5196 6.29289 11.7071C6.48043 11.8946 6.73478 12 7 12ZM25 15H7C6.73478 15 6.48043 15.1054 6.29289 15.2929C6.10536 15.4804 6 15.7348 6 16C6 16.2652 6.10536 16.5196 6.29289 16.7071C6.48043 16.8946 6.73478 17 7 17H25C25.2652 17 25.5196 16.8946 25.7071 16.7071C25.8946 16.5196 26 16.2652 26 16C26 15.7348 25.8946 15.4804 25.7071 15.2929C25.5196 15.1054 25.2652 15 25 15ZM25 20H7C6.73478 20 6.48043 20.1054 6.29289 20.2929C6.10536 20.4804 6 20.7348 6 21C6 21.2652 6.10536 21.5196 6.29289 21.7071C6.48043 21.8946 6.73478 22 7 22H25C25.2652 22 25.5196 21.8946 25.7071 21.7071C25.8946 21.5196 26 21.2652 26 21C26 20.7348 25.8946 20.4804 25.7071 20.2929C25.5196 20.1054 25.2652 20 25 20Z" fill="currentColor"></path>
					</svg>
				</button>
			</div>
		</nav>
	);
};

export default Header;