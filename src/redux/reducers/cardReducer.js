import { CREATE_CARD, EDIT_CARD, DELETE_CARD, GET_CARDS, MOVE_CARD } from "../types";

const initialState = {
    cards: [],
};

export default function cardReducer(state = initialState, action) {
    switch (action.type) {
        case CREATE_CARD:
            return {
                ...state,
                cards: [...state.cards, action.payload],
            };
        case EDIT_CARD:
            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.payload.id ? action.payload : card
                ),
            };
        case DELETE_CARD:
            return {
                ...state,
                cards: state.cards.filter((card) => card.id !== action.payload),
            };
        case GET_CARDS:
            return {
                ...state,
                cards: action.payload,
            };
        case MOVE_CARD:
            return {
                ...state,
                cards: state.cards.map((card) =>
                    card.id === action.payload.id ? action.payload : card
                ),
            };

        default:
            return state;
    }
}