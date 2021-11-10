// import React from "react";
// import { PropTypes } from "prop-types";

// export const Drag = props => {
// 	const dragStart = e => {
// 		const target = e.target;
// 		e.dataTransfer.setData("card_id", target.id);

// 		setTimeout(() => {
// 			target.style.display = "none";
// 		}, 0);
// 	};
// 	const dragOver = e => {
// 		e.stopPropagation();
// 	};
// 	return (
// 		<div
// 			id={props.id}
// 			className={props.className}
// 			draggable={props.draggable}
// 			onDragStart={dragStart}
// 			onDragOver={dragOver}>
// 			{props.childern}
// 		</div>
// 	);
// };
// Drag.prototype = {
// 	id: PropTypes.number,
// 	className: PropTypes.string,
// 	draggable: PropTypes.boolean,
// 	children: PropTypes.element.isRequired
// };
