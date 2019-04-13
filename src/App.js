import React, { Component } from 'react';
import './App.css';
import { addNewToDo, fetchToDos } from './store/actions';

import { connect } from 'react-redux';

class App extends Component {


  state = {
    name: ""
  }

  componentDidMount() {
    this.props.fetchToDos();
  }

  handleChange = (element) => {
    this.setState({ [element.target.name]: element.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addToDo(this.state);
    document.getElementById("form").reset();
  }

  render() {
    return (
      <div className="app-container">
        <div>
          <div>
            <div>
              {this.props.todo.map(todo => {
                return <div key={todo.id}><div>{todo.text}</div><button type="button">x</button></div>
              })}
            </div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit} id="form">
          <h2>Add a new todo</h2>
          <input type="text" name="text" onChange={this.handleChange}>
          </input>
          <input type="submit" value="ADD"></input>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  todo: state.todo
})

const mapDispatchToProps = dispatch => ({
  addToDo: (todo) => dispatch(addNewToDo(todo)),
  fetchToDos: () => dispatch(fetchToDos())
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
