import React from "react";
import { NextSeo } from "next-seo";

import Hero from "../components/hero/index-hero-component";
import Partners from "../components/partners/partners-components";

export default function Home() {
	return (
		<div className="w-full z-0 filter">
			<NextSeo
				title='Kezdőlap | Miskolci Egyetemi Napok - MEN'
				description='Kezdőlap | Miskolci Egyetemi Napok - MEN'
				openGraph={{
					title: "Kezdőlap | Miskolci Egyetemi Napok - MEN",
					description: "Kezdőlap | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<div className="relative pb-[56.25%] -mt-8 xl:-mt-20">
				<video
					className='absolute top-0 left-0 h-full'
					muted
					autoPlay
					loop
					playsInline
				>
					<source
						src="https://res.cloudinary.com/dm19sprvh/video/upload/v1651789179/Robesz/Y2Mate.is_-_Miskolci_Egyetemi_Napok_2021_-_HIMNUSZ_Aftermovie-FNTEGqVc_d4-1080p-1651787921728_xaoclq.mp4"
						type="video/mp4"
					/>
				</video>
			</div>
			<Hero />
			<Partners />
		</div>
	);
}
