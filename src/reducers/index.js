import { combineReducers, createStore } from 'redux'
import { ADD_TODO } from '../actions'

const initialToDoState = [
	{
		id: 0,
		item: '1st'
	},
	{
		id: 1,
		item: '2nd'
	},
	{
		id: 2,
		item: '3rd'
	}
]

function todos(state = initialToDoState, action) {
	switch (action.type) {
		case ADD_TODO:
			return [
		        ...state,
				{
					id: Date.now(),
					item: action.text
				}
      		]
		default:
			return state;
	}
}

const appStore = combineReducers({
	todos
})

let store = createStore(appStore)

export default store