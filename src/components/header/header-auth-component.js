import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";

const HeaderAuth = ({ session, loading }) => {
	function logoutHandler() {
		signOut();
	}

	let Content;

	if (session) {
		Content=(
			<div className="hidden xl:flex justify-end flex-row items-center space-x-5 w-full">
				<p>
    				Üdv, {session.user.name}
				</p>
				<button 
					onClick={logoutHandler}
					className="py-1 px-2 bg-red-800 hover:opacity-80 transition-all duration-200 text-white rounded-lg"
				>
                    Kijelentkezés
				</button>
			</div>
		);
	} else if (!session && !loading) {
		Content=(
			<div className="hidden xl:flex items-center justify-end">
				<Link href="/login" passHref >
					<a className="inline-block py-2 px-4 mr-2 leading-5 text-coolGray-500 hover:text-coolGray-900 bg-transparent font-medium rounded-md" >
								Bejelentkezés
					</a>
				</Link>
				<Link href="/register" passHref >
					<a className="inline-block py-2 px-4 text-sm leading-5 text-green-50 bg-green-500 hover:bg-green-600 font-medium focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md" >
									Regisztráció
					</a>
				</Link>
			</div>
		);
	}
	return (
		<div className="w-1/2 xl:w-1/5">
			{Content}
		</div>
        
	);
};

export default HeaderAuth;