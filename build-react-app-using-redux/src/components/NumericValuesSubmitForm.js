import * as React from 'react';
import { connect } from 'react-redux';
import { personAction, loadPerson } from '../actions/personAction';
import { facilityAction, loadFacility } from '../actions/facilityAction';
import { exposureAction, loadExposure } from '../actions/exposureAction'; 
import '../App.css'; 

class FormValuesSubmitForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: '',
        formData: Object.assign({}, this.props.formData)
      };
      this.onChange = this.onChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this); 
      this.personAction = this.personAction.bind(this); 
      this.facilityAction = this.facilityAction.bind(this); 
      this.exposureAction = this.exposureAction.bind(this);
    }

 
    personAction() {
      this.props.personAction();
    };
    facilityAction() {
      this.props.facilityAction();
    };
    exposureAction() {
      this.props.exposureAction();
    };

    save(input) {
      return function(dispatch, getState) {
          return Promise.all([
              dispatch(loadPerson(input)),
              dispatch(loadFacility(getState().person.val1)),
              dispatch(loadExposure(getState().person.val2))
              ]).then(() => {
                  dispatch('SUCCESFULL');
              }).catch(error => {
                  throw(error);
              });
      };
  }
    onChange(e){
      const re = /^[0-9]{1,10}$/;
      if (e.target.value === '' || re.test(e.target.value) ) { 
         this.setState({value: e.target.value})
      }
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) { 
      alert('val3 * val5 = 24');
      event.preventDefault();
    } 

    success() {
      const {facility, exposure} = this.props; 
      alert('The result of multiplying val3 with val5 is: ' + facility.val3 * exposure.val5); 
  }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Insert number value that contains from 1 to 10 symbols:<br></br>
            </label>
            <input type="text" placeholder="Insert numeric value.." value={this.state.value} onChange={this.onChange} /> 
            <input type="submit" disabled ={!this.state.value} onClick={this.exposureAction} value="Submit"/>
            <pre>
              {JSON.stringify(this.props)}
            </pre>
        </form>
      );
    }
  }
  
  function mapStateToProps(state) {
 
    return { person: state.person, facility: state.facility, exposure: state.exposure };
}
  
  const mapDispatchToProps = dispatch => ({
    personAction: () => dispatch(personAction()),
    facilityAction: () => dispatch(facilityAction()),
    exposureAction: () => dispatch(exposureAction())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(FormValuesSubmitForm);