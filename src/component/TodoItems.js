import React from 'react';

const TodoItems = (props)=>{
  return (
		<div>
			<h1>{props.items}</h1>
			<button onClick={props.handleRemoveOneItem}>
			  	Remove
			</button>
		</div>
	);
}
export default TodoItems;
