import { ADD_TODO } from './constants';


export const addNewToDo = (todo) => ({
    type: ADD_TODO,
    todo
})

