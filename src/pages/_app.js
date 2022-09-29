import React from "react";
import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "../redux/store";
import { DefaultSeo } from "next-seo";
import Head from "next/head";

import Header from "../components/header/header-component";
import Footer from "../components/footer/footer-component";

function MyApp({ Component, pageProps }) {
	const SEO = {
		title: "Miskolci Egyetemi Napok - MEN",
		description: "A Miskolci Egyetemi Napok Északkelet-Magyarország legnagyobb hallgatói rendezvénye.",
		canonical: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
		openGraph: {
			type: "website",
			locale: "de_DE",
			url: process.env.NEXT_PUBLIC_NEXTAUTH_URL,
			site_name: "Miskolci Egyetemi Napok - MEN",
			images: [
				{
					url: "/logos/men-logo.png",
					width: 800,
					height: 600,
					alt: "Logo",
					type: "image/png",
				}
			],
		}
	};
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<SessionProvider session={pageProps.session}>
					<div className="flex flex-col">
						<DefaultSeo {...SEO} />
						<Head>
							<link rel="icon" href='/favicon.ico' />
						</Head>
						<Header />
						<div className="min-h-[90vh]">
							<Component {...pageProps} />
						</div>
						<Footer />
					</div>
				</SessionProvider>
			</PersistGate>
		</Provider>
	);
}

export default MyApp;
