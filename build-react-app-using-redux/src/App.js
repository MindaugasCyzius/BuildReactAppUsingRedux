import React, { Component } from 'react'; 
import logo from './logo.svg';
import './App.css'; 
import NumericValuesSubmitForm from './components/NumericValuesSubmitForm';

class App extends Component { 
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header>
        <body>
          <h3>Simple application using Redux</h3>
          <br></br>
          <NumericValuesSubmitForm></NumericValuesSubmitForm>
        </body>
      </div>
    );
  }
}
 
export default App;