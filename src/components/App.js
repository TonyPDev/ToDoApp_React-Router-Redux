import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
} from 'react-router-dom'
import AddToDoContainer from '../containers/AddToDoContainer';
import ToDoListContainer from '../containers/ToDoListContainer';
import HelloWorld from './HelloWorld'

class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<h1>Local To-Do</h1>
					<ul>
						<li><Link to="/">To Do</Link></li>
						<li><Link to="/hello">Hello World</Link></li>
					</ul>

					<hr/>

					<Route
						exact path="/"
						render={(routeProps) => (
							<AddToDoContainer {...routeProps} />
						)}
					/>
					<Route
						exact path="/"
						render={(routeProps) => (
							<ToDoListContainer {...routeProps} />
						)}
					/>
					<Route
						exact path="/hello"
						component={HelloWorld}
					/>
				</div>
			</Router>
		);
	}
}

export default App