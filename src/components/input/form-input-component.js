import React from "react";

const FormInput = ({
	value,
	name,
	id,
	onChangeFnc,
	type,
	placeholder,
	ready
}) => {
	return (
		<input 
			value={value}
			name={name}
			id={id}
			type={type}
			placeholder={placeholder}
			onChange={(e) => onChangeFnc(e.target.value)}
			className={!ready ? "appearance-none block w-full p-3 leading-5 text-coolGray-900 border border-coolGray-200 rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50" : "appearance-none block w-full p-3 leading-5 text-coolGray-900 border rounded-lg shadow-md placeholder-coolGray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 opacity-40 border-red-800 bg-red-800" }
		/>		
	);
};

export default FormInput;