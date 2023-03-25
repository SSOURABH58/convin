import { CREATE_CARD, DELETE_CARD, EDIT_CARD, GET_CARD } from './../types';

export const addCard = (card) => {
    return {
        type: CREATE_CARD,
        payload: card,
    };
};

export const deleteCard = (card) => {
    return {
        type: DELETE_CARD,
        payload: card,
    };
};

export const editCard = (card) => {
    return {
        type: EDIT_CARD,
        payload: card,
    };
};

//create a getCard action
export const getCard = (card) => {
    return {
        type: GET_CARD,
        payload: card,
    };
};




