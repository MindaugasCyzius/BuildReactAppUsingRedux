export const personAction = () => dispatch => {
    dispatch({
     type: 'PERSON_VALUE_ACTION',
     person: 'val1 = 2 val2 = 3'
    })
   }