import * as React from 'react';
import { connect } from 'react-redux';
import { personAction } from '../actions/personAction';
import { facilityAction } from '../actions/facilityAction';
import { exposureAction } from '../actions/exposureAction';
import '../App.css'; 

class FormValuesSubmitForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
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
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
            <label>
                Insert number value that contains from 1 to 10 symbols:<br></br>
            </label>
            <input type="text" placeholder="Insert numeric value.." value={this.state.value} onChange={this.onChange} /> 
            <input type="submit" disabled ={!this.state.value} onClick={this.personAction} value="Submit"/>
            <pre>
              {JSON.stringify(this.props)}
            </pre>
        </form>
      );
    }
  }
  
  const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
    personAction: () => dispatch(personAction()),
    facilityAction: () => dispatch(facilityAction()),
    exposureAction: () => dispatch(exposureAction())
  });

  export default connect(mapStateToProps, mapDispatchToProps)(FormValuesSubmitForm);