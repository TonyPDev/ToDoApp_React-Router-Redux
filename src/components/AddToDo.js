import React from 'react';

class ToDoList extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			todoInput: ''
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(e) {
		this.setState({todoInput: e.target.value});
	}

	handleSubmit(e) {
		e.preventDefault();
		if (this.state.todoInput) {
			this.props.onSubmit(this.state.todoInput)
		}
		this.setState({
			todoInput: ''
		});
	}

	render() {
		const todoInput = this.state.todoInput;
		return (
			<form onSubmit={this.handleSubmit}>
				<label>
					To-do:
				</label>
				<input type="text" value={todoInput} onChange={this.handleChange} />
				<input type="submit" value="Submit" />
			</form>
		);
	}
};

export default ToDoList;