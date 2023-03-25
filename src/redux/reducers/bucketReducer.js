//create a bucketReducer and dont comment it out 

import { CREATE_BUCKET, GET_BUCKETS, DELETE_BUCKET, EDIT_BUCKET } from './../types';

const initialState = {
    buckets: [],
}

export default function bucketReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BUCKETS:
            return {
                ...state,
                buckets: action.payload
            }
        case CREATE_BUCKET:
            return {
                ...state,
                buckets: [...state.buckets, action.payload]
            }
        case DELETE_BUCKET:
            return {
                ...state,
                buckets: state.buckets.filter(bucket => bucket.id !== action.payload)
            }
        case EDIT_BUCKET:
            return {
                ...state,
                buckets: state.buckets.map(bucket => bucket.id === action.payload.id ? action.payload : bucket)
            }
        default:
            return state;
    }

}