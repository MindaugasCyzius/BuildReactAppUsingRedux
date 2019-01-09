import MockApi from "../api/MockApi";

export const exposureAction = () => dispatch => {
    dispatch({
        type: 'EXPOSURE_VALUE_ACTION',
        exposure: 'val5 = 6'
    })
}

export function loadExposure(val2) {
    return function(dispatch) {
        dispatch('BEGIN');
        return MockApi.get(val2).then(exposure => {
            dispatch(exposure);
        });
    };
}