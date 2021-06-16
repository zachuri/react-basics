import React from 'react' // We are using JSX so we need to import react
// import React, {Component} from 'react' // can use this format to import componenet 
import logo from '../logo.svg';

//class Header extends React.Component { // Or used the React Object with Component Method (preference)
export default class Header extends React.Component { // Or used the React Object with Component Method (preference)
	render() {
	  return (
	    <header className="App-header">
		<img src={logo} className="App-logo" alt="logo" />
		<p>
		  {/* Added Learned about passing in parameters (strings)*/}
		  Edit <code>src/App.js</code> and save to reload. ({this.props.title})
		</p>
		
		{/* Added Learned about passing in parameters (numbers)*/}
		<div>{this.props.num}</div>
      
		{/* Added Learned about passing in parameters (Objects)*/}
		<div>{this.props.myObj.a}</div>
		<div>{this.props.myObj.b}</div>
      
		{/* Added Learned about passing in parameters (Turn Objects into Strings)*/}
		<div>{JSON.stringify(this.props.myObj.b)}</div>
      
		{/* Added Learned about passing in parameters (Get Arrays)*/}
		<div>{this.props.myArr[0]}</div>
		<div>{this.props.myArr[1]}</div>
		<div>{this.props.myArr[2]}</div>
      
      
		{/* Added Learned about passing in parameters (Passing in functions)*/}
		<div>{this.props.myFuncAdd(10,12)}</div>
		<div>{this.props.myFuncSub(12,10)}</div>
		<div>{this.props.myFuncMult(2,2)}</div>
      
		<a
		  className="App-link"
		  href="https://reactjs.org"
		  target="_blank"
		  rel="noopener noreferrer"
		>
		  Learn React
		</a>
	      </header>
	  )
	}
      }
    
// export default Header;