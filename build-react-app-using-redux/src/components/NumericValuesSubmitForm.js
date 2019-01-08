import * as React from 'react';
import '../App.css'; 

class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
      this.onChange = this.onChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
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
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Insert number value that contains from 1 to 10 symbols:<br></br>
            <input type="text" value={this.state.value} onChange={this.onChange}/>
          </label>
          <button class="button-submit" disabled ={!this.state.value} value="Submit">Submit</button>
        </form>
      );
    }
  }
  
export default Form;