import { combineReducers } from 'redux';
import bucketReducer from './bucketReducer';
import cardReducer from './cardReducer';
import modalReducer from './modalReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
    cards: cardReducer,
    bucket: bucketReducer,
    modal: modalReducer,
    history: historyReducer,
});

export default rootReducer;