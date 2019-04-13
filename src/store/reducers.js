
import { ADD_TODO, POPULATE_TODOS } from './constants';

const INITIAL_STATE = []

let counter = 0;

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_TODO:
        const newToDo = {
            ...action.todo,
            id: counter++
        }
            return [
                ...state,
                newToDo
            ]
        case POPULATE_TODOS:
        return  action.todolist;
        default:
        return state;
    }
}


