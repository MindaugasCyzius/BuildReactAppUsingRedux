import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { personAction } from './actions/personAction';
import { facilityAction } from './actions/facilityAction';
import { exposureAction } from './actions/exposureAction';

class App extends Component {

  constructor(props) {
		super(props);
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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <button onClick={this.personAction}>Test person action</button> 
            <button onClick={this.facilityAction}>Test facility action</button> 
            <button onClick={this.exposureAction}>Test exposure action</button> 
            <pre>
              {JSON.stringify(this.props)}
            </pre>
          </p>
        </header>
      </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);