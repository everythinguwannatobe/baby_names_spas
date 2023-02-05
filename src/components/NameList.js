import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import BabyName from "./BabyName";
import { generateDroppableId } from "../utils/generateDroppableId";

const NameList = ({ names }) => {
	const [ babyNames, setBabyNames ] = useState([]);

	useEffect(() => {
		const sortedNames = names.sort(( first, second ) => first.name.localeCompare( second.name ));

		setBabyNames( sortedNames );
	}, [ names ]);

	const onDragEnd = ( result ) => {
		if ( !result.destination ) return;

		const reorderedNames = Array.from( babyNames );
		const [ reorderedName ] = reorderedNames.splice( result.source.index, 1 );
		reorderedNames.splice( result.destination.index, 0, reorderedName );

		setBabyNames( reorderedNames );
	};

	return (
		<div>
			<DragDropContext onDragEnd={ onDragEnd }>
				<Droppable droppableId={generateDroppableId(babyNames)} >
					{( provided ) => (
						<div className="babyNames" ref={ provided.innerRef } { ...provided.droppableProps }>
							{babyNames.map(( babyName, index ) => (
								<Draggable
									key={ babyName.id }
									draggableId={ babyName.id.toString() }
									index={ index }
								>
									{( provided ) => (
										<div
											{ ...provided.draggableProps }
											{ ...provided.dragHandleProps }
											ref={ provided.innerRef }
										>
											<BabyName name={ babyName.name } />
										</div>
									)}
								</Draggable>
							))}
							{ provided.placeholder }
						</div>
					)}
				</Droppable>
			</DragDropContext>
		</div>
	);
};

export default NameList;