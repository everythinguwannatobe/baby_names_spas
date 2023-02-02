import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BabyName from "./BabyName";

const NameList = (props) => {
	const [babyNames, setBabyNames] = useState([]);

	useEffect(() => {
		loadData();
	},[props.names]);

	const loadData = () => {
		let names = props.names;

		let sortedNames = names.sort((first, second) => first.name.localeCompare(second.name));

		setBabyNames(sortedNames);
	}

	const onDragEnd = (result) => {
		if (!result.destination) return;

		const items = Array.from(babyNames);
		const [reorderedItem] = items.splice(result.source.index, 1);
		items.splice(result.destination.index, 0, reorderedItem);

		setBabyNames(items);
	};

	return (
		<div>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId={babyNames}>
					{(provided) => (
						<div className="babyNames" ref={provided.innerRef} {...provided.droppableProps}>
							{babyNames.map((babyName, index) => (
								<Draggable
									key={babyName.id}
									draggableId={babyName.id.toString()}
									index={index}
								>
									{(provided) => (
										<div
											{...provided.draggableProps}
											{...provided.dragHandleProps}
											ref={provided.innerRef}
										>
											<BabyName name={babyName.name} />
										</div>
									)}
								</Draggable>
							))}
							{provided.placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default NameList;