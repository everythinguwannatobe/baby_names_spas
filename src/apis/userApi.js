import axios from "axios";

const getBabyNames = async (url,listInfo) => {
	const { data } = await axios.post(url, listInfo);
	return data;
};

const addUser = async (url, userName) => {
	const { data } = await axios.post(url, userName);
	return data.list_id;
};

const addBaby = async (url,babyName) => {
	const { data } = await axios.post(url, babyName);
	return data;
};

export {
	getBabyNames,
	addUser,
	addBaby
};