import React from "react";
import { NextSeo } from "next-seo";

import FaqHero from"../components/faq/faq-hero-component";
import FaqBanner from"../components/faq/faq-banner.component";

export default function About() {
	return (
		<div>
			<NextSeo
				title='Rólunk | Miskolci Egyetemi Napok - MEN'
				description='Rólunk | Miskolci Egyetemi Napok - MEN'
				openGraph={{
					title: "Rólunk | Miskolci Egyetemi Napok - MEN",
					description: "Rólunk | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<FaqHero />
			<FaqBanner />
		</div>
	);
}
