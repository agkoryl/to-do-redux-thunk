import { ADD_TODO } from './constants';
import { POPULATE_TODOS } from './constants';


export const addNewToDo = (todo) => ({
    type: ADD_TODO,
    todo
})


export const populateToDos = (todolist) => ({
    type: POPULATE_TODOS,
    todolist
})

const mapEntries = (data) => {
    return Object.entries(data).map(elem => {
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