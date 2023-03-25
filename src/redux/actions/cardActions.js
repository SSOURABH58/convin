import { CREATE_CARD, DELETE_CARD, EDIT_CARD, GET_CARDS, MOVE_CARD } from './../types';
import axios from 'axios';
import { rootUrl } from './../../utils/urls';

// const url = "http://localhost:3030/card"\
const url = `${rootUrl}/card`

export const getCards = () => async dispatch => {
    const res = await axios.get(url);
    console.log('getCards action', res.data);
    dispatch({
        type: GET_CARDS,
        payload: res.data
    });
}

export const createCard = (card) => async dispatch => {
    console.log('createCard action', card);
    const res = await axios.post(url, card);
    console.log('createCard action', res.data);
    dispatch({
        type: CREATE_CARD,
        payload: res.data
    });
}

export const deleteCard = (id) => async dispatch => {
    await axios.delete(`${url}/${id}`);
    console.log('deleteCard action', id);
    dispatch({
        type: DELETE_CARD,
        payload: id
    });
}

export const editCard = (card) => async dispatch => {
    const res = await axios.put(`${url}/${card.id}`, card);
    console.log('editCard action', res.data);
    dispatch({
        type: EDIT_CARD,
        payload: res.data
    });
}

export const moveCard = (card) => async dispatch => {
    const res = await axios.put(`${url}/${card.id}`, card);
    console.log('moveCard action', res.data);
    dispatch({
        type: MOVE_CARD,
        payload: res.data
    });
}




