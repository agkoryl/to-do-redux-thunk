import { ADD_TODO } from './constants';
import { POPULATE_TODOS } from './constants';


export const addNewToDo = (todo) => {
    return (dispatch) => {
    fetch('https://isajfdzl2.firebaseio.com/todos.json', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(todo)
    })
    .then(response => {
        if(response.status === 200) {
            return dispatch(fetchToDos())
        }
    })
    }
}



export const populateToDos = (todolist) => ({
    type: POPULATE_TODOS,
    todolist
})

const mapEntries = (data) => {
    return Object.entries(data || {}).map(elem => {
        return {
          id: elem[0],
          ...elem[1]
        };
})}

export const fetchToDos = () => {
    return (dispatch) => {
        fetch('https://isajfdzl2.firebaseio.com/todos.json')
        .then(response => response.json())
        .then(data => {
          const toDoList = mapEntries(data)
          dispatch(populateToDos(toDoList))
          })
        }
    }