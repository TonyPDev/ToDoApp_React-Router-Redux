import { connect } from 'react-redux'
import ToDoList from '../components/ToDoList'

const mapStateToProps = (state, ownProps) => {
	return {
		todos: state.todos
	}
}

const ToDoListContainer = connect(
	mapStateToProps,
	null
)(ToDoList)

export default ToDoListContainer