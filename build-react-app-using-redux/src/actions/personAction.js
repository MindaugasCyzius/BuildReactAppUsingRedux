import MockApi from "../api/MockApi";

export const personAction = () => dispatch => {
    dispatch({
     type: 'PERSON_VALUE_ACTION',
     person: 'val1 = 2 val2 = 3'
    })
   }

export function loadPerson(input) {
    return function(dispatch) {
        dispatch();
        return MockApi.get(input).then(person => {
            dispatch(person);
        });
    };
}