export default (state = {}, action) => {
    switch (action.type) {
     case 'PERSON_VALUE_ACTION':
      return {
       values: action.payload
      }
      case 'FACILITY_VALUE_ACTION':
      return {
       values: action.payload
      }
      case 'EXPOSURE_VALUE_ACTION':
      return {
       values: action.payload
      }
     default:
      return state
    }
   }