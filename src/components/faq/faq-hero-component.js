import React from "react";

const FaqHero = () => {
	return(
		<div className="flex flex-row items-center justify-between mb-16 py-20 xl:pt-24 bg-white mx-20">
			<div className="flex flex-col items-start w-1/2">
				<h2 className="mb-4 text-4xl md:text-5xl leading-tight text-coolGray-900 font-bold tracking-tighter">
					Rólunk
				</h2>
				<p className="text-lg md:text-xl text-coolGray-500 font-medium mb-5">
					A Miskolci Egyetemi Napok Északkelet-Magyarország legnagyobb hallgatói rendezvénye.
					1977 óta rendezzük meg a lusta diákság ereszd el a hajam jellegű ünnepét, mely jellemzően 3 napon át tart a miskolci campuson.
				</p>
				<p className="text-lg md:text-xl text-coolGray-500 font-medium">
					MEN jóval több, mint egy egyszerű zenei fesztivál. Ugyanis a MEN napközbeni programjainak a hagyományőrző programok adnak többletet. Este pedig birtokba veszi a campus területét a fesztivál hangulat, melyben a legnagyobb hazai fellépők működnek közre. 
				</p>
			</div>
			<img
				className="mx-auto md:h-full md:w-2/5 lg:w-1/3 md:object-cover"
				src="/images/men.jpg"
				alt=""
			/>
		</div>
	);
};

export default FaqHero;