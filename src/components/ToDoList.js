import React from 'react'
import ToDoItem from './ToDoItem'

const ToDoList = ({ todos }) => {
	const items = todos.map((todo) =>
		<ToDoItem key={todo.id} item={todo.item} />
	)

	return (
		<ul>
			{items}
		</ul>
	)
}

export default ToDoList;