import { OPEN_MODAL, CLOSE_MODAL } from "../types";

export const openModal = (card) => (dispatch) => {
    dispatch({
        type: OPEN_MODAL,
        payload: card
    })
}

export const closeModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_MODAL
    })
}

