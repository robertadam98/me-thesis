import Link from "next/link";
import React from "react";
import { useSession } from "next-auth/react";

const Hero = () => {
	const { data: session} = useSession();

	return(
		<div className="absolute 2xl:-mt-28 top-0 left-0 flex items-center justify-center w-full h-full bg-[rgba(0,0,0,0.6)]">
			<div className="mx-auto text-center">
				<span className="inline-block py-2 px-3 text-xl leading-5 text-white bg-green-500 uppercase rounded-9xl">
					MEN
				</span>
				<h1 className="mb-6 text-3xl md:text-6xl 2xl:text-8xl leading-tight font-bold tracking-tighter text-white">
					Miskolci Egyetemi Napok
				</h1>
				<p className="mb-8 mx-auto text-2xl 2xl:text-4xl text-white font-medium">
					Szórakozás, csapatversenyek, koncertek, gyere, jó lesz!
				</p>
				<div className="flex flex-wrap justify-center">
					<div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
						<Link href='/products' passHref>
							<a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm">
							Jegyek
							</a>
						</Link>
					</div>
					<div className="w-full md:w-auto py-1 md:py-0">
						<Link href={session ? "/profile" : "/login"} passHref>
							<a className="inline-block py-5 px-7 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm">
								{session ? "Profil" : "Bejelentkezés"}
							</a>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);

};
export default Hero;