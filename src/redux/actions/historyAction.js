//create history actions
//
import { ADD_HISTORY, GET_HISTORY } from '../types';
import axios from 'axios';
import { rootUrl } from './../../utils/urls';

// const url = 'http://localhost:3030/history';
const url = `${rootUrl}/history`;

export const getHistory = () => async dispatch => {
    const res = await axios.get(url);
    console.log('getHistory action', res.data);
    dispatch({
        type: GET_HISTORY,
        payload: res.data
    });
}

export const addHistory = (history) => async dispatch => {
    console.log('addHistory action', history);
    const res = await axios.post(url, history);
    console.log('addHistory action', res.data);
    dispatch({
        type: ADD_HISTORY,
        payload: res.data
    });
}
