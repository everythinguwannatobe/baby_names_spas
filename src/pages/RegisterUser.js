import React, { useState } from "react";

import { addUser } from "../apis/userApi";

const RegisterUser = ({ getUserId }) => {
	const { REACT_APP_BASE_URL } = process.env;

	const [fullName, setFullName] = useState("");

	const handleChange = (event) => {
		event.preventDefault();

		setFullName(event.target.value);
	};

	const handleRegister = (event) => {
		event.preventDefault();
		(async () => {
			const listId = addUser(REACT_APP_BASE_URL+"/users/create", {name: fullName});
			getUserId(listId);
		})();
	};

	return (
		<div>
			<div>
			<div className="flex justify-center my-60">
				<input
					type="text"
					placeholder="Register your name first..."
					className="p-5 shadow-md w-96 rounded-2xl shadow-purple-400"
					onChange={handleChange}
					value={fullName} />
			</div>
			<div className="flex justify-center">
				<button
					className="w-40 p-5 bg-purple-500 rounded-full shadow-md text-slate-50 shadow-green-300"
					onClick={handleRegister}
				>
					Register
				</button>
			</div>
		</div>
		</div>
	);
};

export default RegisterUser;