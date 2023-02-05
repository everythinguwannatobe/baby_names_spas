const generateDroppableId = babyData => {
	const droppableIds = [];
	let droppableId;

	for (let babyId = babyData.length - 1; babyId >= 0; babyId--) {
		droppableId = babyData[babyId].id + babyData[babyId].name;
		droppableIds.push(droppableId);
	}

	return droppableIds;
};

export { generateDroppableId };