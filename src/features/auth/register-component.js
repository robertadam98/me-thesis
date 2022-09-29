import React, { useState, useRef } from "react"; 
import { useRouter } from "next/router";
import Link from "next/link";
import { ClipLoader } from "react-spinners";

import FormInput from "../../components/input/form-input-component";

import { createUser } from "../../lib/auth";

// register flow
// fill input data (this file) -> click on register button (this file) -> calls createUser function (this file) -> createUser function (/lib/auth.js) calls signup API endpoint -> insert user to database (/api/auth/signup.js) -> return message (this file) -> redirect to Login page

const RegisterComponent = () => {
	const router = useRouter();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [name, setName] = useState("");
	const [checkReady, setCheckReady] = useState(false);
	const [loading, setLoading] = useState("");
	const [error, setError] = useState("");
	
	const ready = email !== "" && password !== "" && name !== "";

	async function submitHandler(event) {
		setLoading(true);
		event.preventDefault();

		try {
			const result = await createUser(email, password, name);
			setError("");

			if(result.message === "Felhasználó létrehozva!") {
				router.replace("/login");
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
						Regisztráció
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
							value={name}
							onChangeFnc={setName} 
							type="text" 
							placeholder="Név"
							name="name"
							id="name"
							ready={checkReady && name === ""}
						/>						
					</div>					
					<div className="mb-6">
						<FormInput
							value={email}
							onChangeFnc={setEmail} 
							type="email" 
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
						className="flex items-center justify-center py-3 px-7 mb-6 w-full text-lg text-green-50 font-medium text-center leading-6 bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 rounded-md shadow-sm h-[40px]" 
					>
						{loading ? <ClipLoader color="white" size={20} /> : "Regisztráció"}
					</button>
					<p className="text-center">
						<span className="text-lg font-medium mr-3">
							Van már fiókod?
						</span>
						<Link href="/login" passHref >
							<a className="inline-block text-lg font-medium text-green-500 hover:text-green-600 hover:underline" >
							Bejelentkezés
							</a>
						</Link>
					</p>
				</form>
			</div>
		</div>
	);
};

export default RegisterComponent;