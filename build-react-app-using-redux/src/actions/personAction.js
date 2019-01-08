export const personAction = () => dispatch => {
    dispatch({
     type: 'PERSON_VALUE_ACTION',
     payload: 'val1 = 2 val2 = 3'
    })
   }