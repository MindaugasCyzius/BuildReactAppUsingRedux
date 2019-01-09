import initialState from './initialStates';

export default function exposureReducer(state = initialState.exposure, action) {
    switch(action.type) {
        case 'EXPOSURE_VALUE_ACTION':
            return {
                result: action.exposure
            }
        default:  
            return state;
    }
} 