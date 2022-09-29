import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { HashLoader } from "react-spinners";
import { NextSeo } from "next-seo";

import LoginComponent from "../features/auth/login-component";

export default function Login() {
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
				title='Bejelentkezés | Miskolci Egyetemi Napok - MEN'
				description='Bejelentkezés | Miskolci Egyetemi Napok - MEN'
				openGraph={{
					title: "Bejelentkezés | Miskolci Egyetemi Napok - MEN",
					description: "Bejelentkezés | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<LoginComponent />
			<img
				className="mx-auto md:h-full md:w-2/5 lg:w-1/2 md:object-cover"
				src="/images/login.jpg"
				alt=""
			/>			 
		</div>
	);
}
