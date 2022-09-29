import React from "react";
import { NextSeo } from "next-seo";

export default function Error() {

	return (
		<div className="h-[70vh] pt-20 bg-white flex flex-col items-center justify-center">
			<NextSeo
				title='Hiba | Miskolci Egyetemi Napok - MEN'
				description='Hiba | Miskolci Egyetemi Napok - MEN'
				openGraph={{
					title: "Hiba | Miskolci Egyetemi Napok - MEN",
					description: "Hiba | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<img
				className="w-1/4"
				src="/images/error.png"
				alt=""
			/>
			<p className="text-3xl mt-10">
				Sajnáljuk, valami hiba lépett fel, vagy a keresett oldal nem található.
			</p>	 
		</div>
	);
}
