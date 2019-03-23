// import React, { Component } from 'react';
import React from 'react';

// class App extends Component {
//  render() {
//    return( 
//    <React.Fragment>
//    <label htmlFor="bar">bar</label>
//    <input type="text" onChange={() => {console.log("I am changed!")}} /> 
//    </React.Fragment>
//    )
//  }
//}

const App = () => {
 return (
 <div>
  <Cat /> 
  <Cat /> 
  <Cat /> 
  <Cat /> 
 Meow!5
 </div>
 )
}
const Cat = () => {
 return <div>Meow!</div>
}

export default App;
