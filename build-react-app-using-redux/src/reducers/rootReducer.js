import { combineReducers } from 'redux';
import facility from './facilityReducer';
import exposure from './exposureReducer';
import person from './personReducer'; 

const rootReducer = combineReducers({ 
    person,
    facility,
    exposure 
});

export default rootReducer;