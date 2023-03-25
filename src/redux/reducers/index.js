import { combineReducers } from 'redux';
import bucketReducer from './bucketReducer';
import cardReducer from './cardReducer';

const rootReducer = combineReducers({
    cards: cardReducer,
    bucket: bucketReducer,
    // history: historyReducer,
});

export default rootReducer;