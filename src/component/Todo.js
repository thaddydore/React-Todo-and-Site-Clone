import React, {Component} from 'react';
import Header from './Header';
import TodoItems from './TodoItems';

class Todo extends Component {
	state = {
		todoItems: [],
		newTodo: ""
	};
	handleChange = e => {
		this.setState({ newTodo: e.target.value });
	};
	handleSubmit = e => {
		e.preventDefault();
		this.setState(prevState => {
      if (prevState.todoItems.includes(prevState.newTodo)){}
      else{
			  return {
			  	todoItems: [...prevState.todoItems, this.state.newTodo],
			  	newTodo: (prevState.newTodo = "")
			}}
		});
	};
	componentDidUpdate(prevProps, prevState) {
		if (prevState.todoItems.length !== this.state.todoItems.length) {
			const jsonState = JSON.stringify(this.state.todoItems);
			localStorage.setItem("todoItems", jsonState);
		}
	}
	componentDidMount() {
		const itemsFromLocalStorage = localStorage.getItem("todoItems");
		const todoItems = JSON.parse(itemsFromLocalStorage);
		if (todoItems){
			this.setState(() => ({
			todoItems
			
			}));
		}
	}
	handleRemoveOneItem =(individualItem)=>{
		this.setState((prevState)=>{
			return {todoItems: prevState.todoItems.filter(items=>items !== individualItem)
		}
		})
	}
	render() {
		return (
			<div>
				<h1 className='jude'>
					{" "}<TodoItems />{" "}
				</h1>
				<Header title='my_todo_app' />
				<h1>welcome to my Todo Appooooo</h1>
				{this.state.todoItems.map(items => 
					<TodoItems items={items}  />
				)}
				<form onSubmit={this.handleSubmit}>
					<label htmlFor="">Todoitems</label>
					<input
						type="text"
						value={this.state.newTodo}
						onChange={this.handleChange}
					/>
					<input type="submit" />
				</form>
				{this.state.todoItems.map(items => (
					<TodoItems individualItems={items} handleRemoveOneItem={this.handleRemoveOneItem}/>
				))}
			</div>
		);
	}
}

export default Todo;