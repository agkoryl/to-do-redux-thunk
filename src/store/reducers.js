
import { ADD_TODO } from './constants';

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
            default:
            return state;
    }
}


