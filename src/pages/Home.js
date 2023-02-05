import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import RegisterUser from "./RegisterUser";
import RegisterBaby from "./RegisterBaby";
import { getBabyNames } from "../apis/userApi";

const Index = () => {
	const { REACT_APP_BASE_URL } = process.env;

	const [listId, setListId] = useState("");
	const [babyNames, setBabyNames] = useState([]);

	const [searchParams] = useSearchParams();
	let listIdParam = searchParams.get("list_id");

	const navigate = useNavigate();

	const getUserId = (listId) => {
		listIdParam = listId;
		setListId(listIdParam);
		navigate("/?list_id=" + listIdParam);
	};

	useEffect(() => {
		if (listIdParam) {
			getBabyNameList();
		}
	}, [listIdParam]);

	const getBabyNameList = async () => {
			const data = await getBabyNames(REACT_APP_BASE_URL+"/babies",{list_id: listIdParam});
			
			setListId(listIdParam);
			setBabyNames(data);
		}

	const content = !listId ? <RegisterUser getUserId={getUserId} /> : <RegisterBaby names={babyNames} />

	return (
		<div>
			{content}
		</div>
	);

};

export default Index;