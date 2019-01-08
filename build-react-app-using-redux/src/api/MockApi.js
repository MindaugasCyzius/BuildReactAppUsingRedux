import { Component } from 'react'; 

const person = 
{ 
  val1: '2',
  val2: '3'
};

const facility = 
{ 
  val3: '4',
  val4: '5'
};

const exposure = 
{ 
  val5: '6'
};

class MockApi extends Component {
  static get(input) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, person));
      }, 1000);
    });
  } 
  static get(val1) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, facility));
      }, 1000);
    });
  }
  static get(val2) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign({}, exposure));
      }, 1000);
    });
  }
}

export default MockApi;