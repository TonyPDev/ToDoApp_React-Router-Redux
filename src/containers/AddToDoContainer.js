import { connect } from 'react-redux'
import { addToDo } from '../actions'
import AddToDo from '../components/AddToDo'

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: value => {
			dispatch(addToDo(value))
		}
	}
}

const AddToDoContainer = connect(
	null,
	mapDispatchToProps
)(AddToDo)

export default AddToDoContainer