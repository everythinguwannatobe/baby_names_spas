import React from "react";

const BabyName = ({ name }) => {
	return (
		<div className="p-5 mx-32 my-3 text-center text-purple-600 rounded-lg shadow-md bg-purple-50 w-80 shadow-slate-300">
			{ name }
		</div>
	);
};

export default BabyName;