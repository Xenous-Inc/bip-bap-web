import { combineReducers } from 'redux';
import authReducer from '@store/reducers/auth';

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;
