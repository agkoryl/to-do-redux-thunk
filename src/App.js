import React, { Component } from 'react';
import './App.css';
import { addNewToDo } from './store/actions';

import { connect } from 'react-redux';

class App extends Component {


  state = {
    name: ""
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
          <table>
            <tbody>
              {this.props.todo.map(todo => {
                return <tr key={todo.id}><td>{todo.name}</td></tr>
              })}
            </tbody>
          </table>
        </div>
        <form onSubmit={this.handleSubmit} id="form">
          <h2>Add a new todo</h2>
          <input type="text" name="name" onChange={this.handleChange}>
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
  addToDo: (todo) => dispatch(addNewToDo(todo))
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
