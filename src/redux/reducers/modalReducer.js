import { OPEN_MODAL, CLOSE_MODAL } from "../types";

const initialState = {
    modal: false,
    card: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                modal: true,
                card: action.payload
            }
        case CLOSE_MODAL:
            return {
                ...state,
                modal: false,
                card: null
            }
        default:
            return state
    }
}


