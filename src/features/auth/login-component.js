import React, { useState } from "react"; 
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import { ClipLoader } from "react-spinners";
import Link from "next/link";

import FormInput from "../../components/input/form-input-component";

const LoginComponent = () => {

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const router = useRouter();
	const [checkReady, setCheckReady] = useState(false);
	const [loading, setLoading] = useState("");
	const [error, setError] = useState("");

	const ready = email !== "" && password !== "";

	async function submitHandler(event) {
		setLoading(true);
		event.preventDefault();

		try {
			const result = await signIn("credentials", {
				redirect: false,
				email: email,
				password: password
			});


			if (!result.error) {
				// set some auth state
				setError();
				router.replace("/profile");
			}
			else {
				setError(result.error);
			}
		} catch (error) {
			setError(error.message);
		}
		setLoading(false);
	}

	return(
		<div className="w-full md:w-3/5 lg:w-1/2">
			<div className="max-w-sm mx-auto">
				<div className="mb-6 text-center">
					<h3 className="mb-4 text-2xl md:text-3xl font-bold">
						Bejelentkezés
					</h3>
					{error && (
						<p className="mt-4 text-red-800 text-sm font-bold">
							{error}
						</p>
					)}
				</div>
				<form onSubmit={submitHandler}>
					<div className="mb-6">
						<FormInput
							value={email}
							onChangeFnc={setEmail} 
							type="text" 
							placeholder="E-mail"
							name="email"
							id="email"
							ready={checkReady && email === ""}
						/>
					</div>
					<div className="mb-4">
						<FormInput 
							value={password}
							onChangeFnc={setPassword} 
							type="password" 
							placeholder="Jelszó"
							name="password"
							id="password"
							ready={checkReady && password === ""}
						/>
					</div>
					<button
						type={ready ? "submit" : "button" }
						onClick={() => !ready && setCheckReady(true)}
						className="flex items-center justify-center py-3 px-7 mb-6 w-full text-base text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm h-[40px]" 
					>
						{loading ? <ClipLoader color="white" size={20} /> : "Bejelentkezés"}
					</button>
					<p className="text-lg text-center font-medium text-black mb-5">
						Ha problémád akad a bejelentkezéssel, kérlek <Link href='/contact' passHref>
							<a className='text-green-500 hover:text-green-600 hover:underline'>
								írj nekünk.
							</a>
						</Link>
					</p>
					<p className="text-center">
						<span className="text-lg font-medium">
							Nincs még fiókod?
						</span>
						<Link href="/register" passHref >
							<a className="inline-block text-lg ml-3 font-medium text-green-500 hover:text-green-600 hover:underline">
							Regisztrálj
							</a>
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default LoginComponent;