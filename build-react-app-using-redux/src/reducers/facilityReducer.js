import initialState from './initialStates';

export default function facilityReducer(state = initialState.facility, action) {
    switch(action.type) {
        case 'FACILITY_VALUE_ACTION':
        return {
            result: action.facility
        } 
        default: 
            return state;
    }
}