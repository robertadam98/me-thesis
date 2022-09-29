import React, { useState } from "react"; 
import {
	MdOutlineEmail,
	MdOutlinePhone,
	MdLocationOn,
	MdGroups
} from "react-icons/md";
import { NextSeo } from "next-seo";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { ClipLoader } from "react-spinners";

export default function Contact() {
	const [sent, setSent] = useState();
	const [isLoading, setIsLoading] = useState(false);

	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const onSubmit = async () => {
		setIsLoading(true);
		try {
			const res =  await fetch(
				`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/send-contact-email`,
				{
					method: "POST",
					body: JSON.stringify({
						email,
						message
					}),
					headers: {
						"Content-Type": "application/json",
					},
				}
			);

			const resData = await res.json();

			if(resData.success) {
				setSent("success");
			} else {
				setSent("failure");
			}
		} catch (error) {
			setSent("failure");
		}
		setIsLoading(false);
	};

	return (
		<div className="py-20 bg-white">
			<NextSeo
				title='Kapcsolat | Miskolci Egyetemi Napok - MEN'
				description='Kapcsolat | Miskolci Egyetemi Napok - MEN'
				openGraph={{
					title: "Kapcsolat | Miskolci Egyetemi Napok - MEN",
					description: "Kapcsolat | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<div className="container px-4 mx-auto">
				<div className="flex flex-wrap mb-24 lg:mb-18 justify-between items-center">
					<div className="w-full lg:w-1/2 mb-10 lg:mb-0">
						<span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl">
							Kapcsolat
						</span>
						<h3 className="mb-4 text-4xl md:text-5xl text-darkCoolGray-900 font-bold tracking-tighter leading-tight">
							Maradjunk kapcsolatban!
						</h3>
						<p className="text-lg md:text-xl text-coolGray-500 font-medium">
							Soha nem volt ilyen egyszerű felvenni a kapcsolatot.<br />
							Hívj minket, írj e-mailt, és a lehető leghamarabb válaszolunk!
						</p>
					</div>
				</div>
				<div className="flex flex-wrap -mx-4">
					<div className="w-full lg:w-1/2 px-4 mb-14 lg:mb-0">
						<div className="flex flex-wrap -mx-4">
							<div className="w-full md:w-1/2 px-4 mb-10">
								<div className="max-w-xs mx-auto">
									<div className="inline-flex mb-6 items-center justify-center w-12 h-12 text-white text-2xl bg-green-500 rounded-full">
										<MdOutlineEmail />
									</div>
									<h3 className="mb-4 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900">
										Email
									</h3>
									<a className="text-lg md:text-xl text-coolGray-500 hover:text-coolGray-600 font-medium" href="mailto:mehok@uni-miskolc.hu">
										mehok@uni-miskolc.hu
									</a>
								</div>
							</div>
							<div className="w-full md:w-1/2 px-4 mb-10">
								<div className="max-w-xs mx-auto">
									<div className="inline-flex mb-6 items-center justify-center w-12 h-12 text-white text-2xl bg-green-500 rounded-full">
										<MdOutlinePhone />
									</div>
									<h3 className="mb-4 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900">
										Telefon
									</h3>
									<p className="text-lg md:text-xl text-coolGray-500 font-medium">
										+36 70 809 0100
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 px-4 mb-10 md:mb-0">
								<div className="max-w-xs mx-auto">
									<div className="inline-flex mb-6 items-center justify-center w-12 h-12 text-white text-2xl bg-green-500 rounded-full">
										<MdLocationOn />
									</div>
									<h3 className="mb-4 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900">
										Helyszín
									</h3>
									<p className="text-lg md:text-xl text-coolGray-500 font-medium">
										Miskolc, Egyetemváros
									</p>
								</div>
							</div>
							<div className="w-full md:w-1/2 px-4">
								<div className="max-w-xs mx-auto">
									<div className="inline-flex mb-6 items-center justify-center w-12 h-12 text-white text-2xl bg-green-500 rounded-full">
										<MdGroups />
									</div>
									<h3 className="mb-9 text-2xl md:text-3xl font-bold leading-9 text-coolGray-900">
										Közösségi média
									</h3>
									<a
										href='https://www.facebook.com/MiskolciEgyetemiNapok/'
										target='_blank'
										className="inline-block mr-8 text-green-500 hover:text-green-600 text-3xl" rel="noreferrer"
									>
										<BsFacebook />
									</a>
									<a
										href='https://www.instagram.com/me__hok/'
										target='_blank' className="inline-block mr-8 text-green-500 hover:text-green-600 text-3xl" rel="noreferrer"
									>
										<BsInstagram />
									</a>
								</div>
							</div>
						</div>
					</div>
					<div className="w-full lg:w-1/2 px-4">
						<div className="px-4 py-8 md:p-6 bg-coolGray-50 rounded-md">
							<div className="mb-6">
								<input
									className="block w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
									type="Email"
									placeholder="Email"
									value={email}
									onChange={(e) => setEmail(e.target.value)}
								/>
							</div>
							<div className="mb-6">
								<textarea
									className="block h-32 md:h-52 w-full py-2 px-3 appearance-none border border-coolGray-200 rounded-lg shadow-md text-coolGray-500 leading-6 focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 placeholder-coolGray-200 resize-none"
									type="text"
									placeholder="Ide írd üzeneted..."
									value={message}
									onChange={(e) => setMessage(e.target.value)}
								/>
							</div>
							<button
								onClick={email === "" || message === "" ? null : onSubmit}
								className="flex items-center justify-center w-full py-4 px-6 text-lg leading-6 text-coolGray-50 font-medium text-center bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm h-[45px]"
								style={{ cursor: email === "" || message === "" ? "not-allowed" : "pointer" }}
							>
								{isLoading ? <ClipLoader color="white" size={20} /> : "Küldés"}
							</button>
							{sent === "success" && (
								<p className="mt-5 text-xl">
									E-mail elküldve.
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
			 
		</div>
	);
}
