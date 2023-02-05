import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";

import NameList from "../components/NameList";
import { isOnlyLettersAndSpaces, cleanupSpaces } from '../utils/validateString';
import { addBaby } from "../apis/userApi";

const RegisterBaby = ({ names }) => {
	const { REACT_APP_BASE_URL } = process.env;

	const [fullName, setFullName] = useState("");

	const [searchParams] = useSearchParams();
	const listId = searchParams.get("list_id");

	const handleChange = (event) => {
		event.preventDefault();

		const inputName = event.target.value;

		setFullName(inputName);
	};

	const hanldeSubmit = (event) => {
		event.preventDefault();
		if (isOnlyLettersAndSpaces(fullName)) {
			(async () => {
				const name = cleanupSpaces(fullName);
				const newBaby = addBaby(REACT_APP_BASE_URL+"/babies/create", {name, listId});
				alert(newBaby + " has been successfully registered!");
				setFullName("");
			})();
		}
		else {
			alert("Names must consist of only letters.")
		}
	};

	return (
		<>
			<div className="flex justify-center my-20">
				<h1 className="text-5xl text-pink-600">WELCOME TO BABY NAME REGISTER PAGE!</h1>
			</div>
			<form>
				<div className="box-border flex justify-center mx-10 my-20">
					<input
						type="text"
						name="fullName"
						placeholder="Enter your baby's full name..."
						className="p-5 rounded-md shadow-md shadow-slate-500 lg:w-80 md:w-full sm:w-full "
						onChange={handleChange}
						value={fullName}
						 />
				</div>
				<div className="flex justify-center">
					<button
						className="w-32 p-5 bg-pink-500 rounded-full shadow-md shadow-slate-500 text-green-50"
						onClick={hanldeSubmit}
					>
						Submit
					</button>
				</div>
			</form>
			<div className="flex justify-center my-20">
				<NameList names={names} />
			</div>
		</>
		);
};

export default RegisterBaby;