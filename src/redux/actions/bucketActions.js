//create the action for bucketReducer
// Path: convin\src\redux\actions\bucketActions.js
import { CREATE_BUCKET, GET_BUCKETS, DELETE_BUCKET, EDIT_BUCKET } from './../types';
import axios from 'axios';

const url = "http://localhost:3030/bucket"

export const getBuckets = () => async dispatch => {
    const res = await axios.get(url);
    console.log('getBuckets action', res.data);
    dispatch({
        type: GET_BUCKETS,
        payload: res.data
    });
}

export const createBucket = (bucket) => async dispatch => {
    console.log('createBucket action', bucket);
    const res = await axios.post(url, bucket);
    console.log('createBucket action', res.data);
    dispatch({
        type: CREATE_BUCKET,
        payload: res.data
    });
}

export const deleteBucket = (id) => async dispatch => {
    await axios.delete(`${url}/${id}`);
    console.log('deleteBucket action', id);
    dispatch({
        type: DELETE_BUCKET,
        payload: id
    });
}

export const editBucket = (bucket) => async dispatch => {
    const res = await axios.put(`${url}/${bucket.id}`, bucket);
    console.log('editBucket action', res.data);
    dispatch({
        type: EDIT_BUCKET,
        payload: res.data
    });
}
