import { combineReducers } from 'redux';
import authReducer from '@store/reducers/auth';
import sensorsReducer from '@store/reducers/sensors';

const rootReducer = combineReducers({
    auth: authReducer,
    sensors: sensorsReducer,
});

export default rootReducer;
