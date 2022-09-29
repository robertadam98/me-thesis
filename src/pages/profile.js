import React, { useEffect, useState } from "react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { getSession, signOut } from "next-auth/react";
import { HashLoader, ClipLoader } from "react-spinners";

// szerver oldalon futtat lekerdezest -> azelott teszi, hogy rendelrelne az oldal -> tudsz foglalkozni az adott adatokkal
export async function getServerSideProps(context) {
	// megnezi be vagy e jelentkezve
	const session = await getSession(context);

	if(session) {
		// megkapod a felhasznalo email cimet
		const email = session.user.email;
		// email alapjan lekerdezes a rendelesektre
		const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/orders/get-orders/${email}`);

		// JSON-na (obejtukmma) konvertalas (fontos, mert ezt tudja kezelni a React)
		const resData = await res.json();

		// tovabbitas a Profil oldal komponensnek
		return {
			props: {
				orders: resData.orders
			}
		};
	}

	return {
		props: {}
	};
}

// itt kapja meg a rendeleseket a getServerSideProps-tol
export default function Profile({ orders }) {
	const router = useRouter();
	const [isPageLoading, setIsPageLoading] = useState(true);
	const [isLoading, setIsLoading] = useState(false);
	const [user, setUser] = useState();
	
	// felhasznalo torlese
	const deleteUser = async () => {
		setIsLoading(true);

		// torles vegpont email alapjan
		const res = await fetch(`${process.env.NEXT_PUBLIC_NEXTAUTH_URL}/api/auth/delete-user/${user.email}`, {
			method: "DELETE"
		});

		const data = await res.json();

		if(data.message === "Felhasználó törölve!") {
			setIsLoading(false);
			signOut();
		}
		
		setIsLoading(false);
	};

	// lifecycle metodus (keress ra) -> rendereles elott futt
	useEffect(() => {
		// megnezi be van e jelentkezve
		getSession().then((session) => {
			if (!session) {
				// ha nem, atiranyit a bejelentekezesre
				router.replace("/login");
			} else {
				// ha igen, akkor beallitod a felhasznalot
				setUser(session.user);
				setIsPageLoading(false);
			}
		});
	}, [router]); // ha a router valtozik (URL) -> ujra lefut
  
	// toltes komponens - ha tolt az oldal (isPageLoading === true)
	if (isPageLoading) {
		return <div className="flex items-center justify-center min-h-[80vh] w-screen">
			<HashLoader color='green' />
		</div>;
	}

	// visszateresi ertek -> amit latsz a kepernyon
	return(
		<div className="container mx-auto px-4 w-full h-full flex flex-row justify-center space-x-28 mt-20">
			{/* SEO -> google keresomotoroknak stb... */}
			<NextSeo
				title='Profil | Miskolci Egyetemi Napok - MEN'
				description='Profil | Miskolci Egyetemi Napok - MEN'
				// facebook, twitter stb megosztasnal
				openGraph={{
					title: "Profil | Miskolci Egyetemi Napok - MEN",
					description: "Profil | Miskolci Egyetemi Napok - MEN"
				}}
			/>
			<div className="flex flex-col items-start w-1/3">
				<h2 className="text-4xl font-bold font-heading">
                    Profil
				</h2>
				<p className="text-5xl my-10">
					{user.name}
				</p>
				<button 
				/* itt hivod meg a felhasznalo torlese metodust */
					onClick={deleteUser}
					className="flex items-center justify-center py-3 px-7 mb-6 text-base text-red-50 font-medium text-center leading-6 bg-red-500 hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 rounded-md shadow-sm h-[40px] w-1/2"
				>
					{isLoading ? <ClipLoader color="white" size={20} /> : "Fiók törlése"}
				</button>
			</div>
			<div className="flex flex-col items-start w-1/3">
				<p className="text-4xl mb-4">
					Vásárlások {orders.length > 0 && `(${orders.length})`}
				</p>
				<div className="flex flex-col items-start w-full">
					{/* kiiratod a felhasznalo rendeleseit */}
					{orders.length > 0 ? orders.map(order => order.map(({name, price, quantity}, index) => (
						<div
							key={index}
							className="text-2xl flex flex-row w-full justify-between items-center mb-4"
						>
							<div>
								{name} ({quantity}db)
							</div>
							<div>
								{price} Ft
							</div>
						</div>
					))
					) : 
						{/* ha nincs kiiratod hogy nincs */}
						(
							<div className="text-2xl mt-5">
							Még nem vásárolt jegyet.
							</div>
						)}
				</div>
			</div>
		</div>
	);
}