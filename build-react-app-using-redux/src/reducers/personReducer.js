import initialState from './initialStates';

export default function personReducer(state = initialState.person, action) {
    switch(action.type) {
        case 'PERSON_VALUE_ACTION':
        return {
            result: action.person
        } 
        default: 
            return state;
    }
} 