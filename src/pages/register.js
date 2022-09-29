import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { HashLoader } from "react-spinners";
import { NextSeo } from "next-seo";

import RegisterComponent from "../features/auth/register-component";

export default function Register() {
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		getSession().then((session) => {
			if (session) {
				router.replace("/");
			} else {
				setIsLoading(false);
			}
		});
	}, [router]);
  
	if (isLoading) {
		return <div className="flex items-center justify-center min-h-[80vh] w-screen">
			<HashLoader color='green' />
		</div>;
	}
	return (
		<div className="h-[70vh] pt-20 bg-white flex flex-row items-center justify-center">
			<NextSeo
				title='Regisztráció | Miskolci Egyetemi Napok - MEN'
				description='Regisztráció | Miskolci Egyetemi Napok - MEN'
				openGraph={{
					title: "Regisztráció | Miskolci Egyetemi Napok - MEN",
					description: "Regisztráció | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<img
				className="mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
				src="/images/register.jpg"
				alt=""
			/>
			<RegisterComponent />
		</div>
	);
}
