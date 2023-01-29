import React from "react";
import BabyName from "./BabyName";

const NameList = (props) => {
	const babyNames = props.names;
	const nameList = babyNames.map(
		(babyName) => 
			<BabyName className="block" name={babyName} />
		);

	return (
		<div>
			{nameList}
		</div>
	);
};

export default NameList;