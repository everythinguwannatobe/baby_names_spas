import React, { useState } from "react";
import NameList from "./NameList";

const BabyDashboard = () => {
	const names = ["A", "B", "C", "D", "E", "F", "G"];

	const [fullName, setFullName] = useState("");

	const handleChange = (event) => {
		event.preventDefault();

		setFullName(event.target.value);

		console.log(fullName);
	};

	const hanldeSubmit = (event) => {
		event.preventDefault();

		console.log(fullName);
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

export default BabyDashboard;