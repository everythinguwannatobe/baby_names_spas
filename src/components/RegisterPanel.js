import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import BabyDashboard from "./BabyDashboard";

const RegisterPanel = () => {
	const [fullName, setFullName] = useState("");

	const [listId, setListId] = useState("");
	const [babyNames, setBabyNames] = useState([]);
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();
	let list_id = searchParams.get("list_id");

	const handleChange = (event) => {
		event.preventDefault();

		setFullName(event.target.value);
	};

	const handleRegister = (event) => {
		event.preventDefault();

		axios
			.post("/users/create", {name: fullName})
			.then(({data}) => {
				list_id = data.list_id;
				navigate('/?list_id='+list_id);
				setListId(list_id);
			}).catch(err => console.log(err));
	};

	useEffect(() => {
		if (list_id) {
			axios
			.post("babies", {list_id: list_id})
			.then(({data}) => {
				setListId(list_id);
				setBabyNames(data);
			}).catch(e => console.log(e));

		}
	}, []);

	const layouts = !listId ? 
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
	:
	<BabyDashboard names={babyNames}  />
	;

	return (
		<div>
			{layouts}
		</div>
	);
};

export default RegisterPanel;