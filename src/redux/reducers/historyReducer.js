//create a historyReducer
//
import { ADD_HISTORY, GET_HISTORY } from '../types';

const initialState = {
    history: []
}

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_HISTORY:
            return {
                ...state,
                history: [...state.history, action.payload]
            }
        case GET_HISTORY:
            return {
                ...state,
                history: action.payload
            }

        default:
            return state;
    }
}
