import MockApi from "../api/MockApi";

export const facilityAction = () => dispatch => {
    dispatch({
     type: 'FACILITY_VALUE_ACTION',
     facility: 'val3 = 4 val4 = 5'
    })
   }


export function loadFacility(val1) {
    return function(dispatch) {
        dispatch();
        return MockApi.get(val1).then(facility => {
            dispatch(facility);
        });
    };
}