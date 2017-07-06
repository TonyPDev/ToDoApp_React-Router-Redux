export const ADD_TODO = 'ADD_TODO'

export const addToDo = text => {
	return {
		type: ADD_TODO,
		text
	}
}