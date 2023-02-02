import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import axios from "axios";
import NameList from "./NameList";

const BabyDashboard = (props) => {

	const [fullName, setFullName] = useState("");
	const [names, setNames] = useState([]);

	const loadData = () => {
		let namesData = props.names;
		setNames(namesData);
	};

	useEffect(() => loadData(), [props.names]);

	const [searchParams] = useSearchParams();
	const list_id = searchParams.get("list_id");

	const handleChange = (event) => {
		event.preventDefault();

		let inputName = event.target.value;

		setFullName(inputName);
	};

	const trimSpaces = fullName => {
		let babyName = fullName.trim();
		let names = babyName.split(" ");
		let name = names[0] + " " + names[1];
		return name;
	};

	const isOnlyLettersAndSpaces = fullName => {
		return /^[A-Za-z\s]*$/.test(fullName);
	};

	const hanldeSubmit = (event) => {
		event.preventDefault();
		if (isOnlyLettersAndSpaces(fullName)) {
			let name = trimSpaces(fullName);
			axios
			.post('babies/create', {name: name, list_id: list_id})
			.then(({data}) => {
				alert(data.name+" has been successfully registered!");
				setFullName("");
			})
			.catch(e => console.log(e));
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

export default BabyDashboard;