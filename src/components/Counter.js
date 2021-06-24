import React from "react";

// This works with class component not with function components

export default class Counter extends React.Component {
   // constructor(props) { // Constructor of class
   // 	super(props);

   // 	this.state = { // This is initializing the object of this state to zero
   // 		count: 0
   // 	};
   // }

   // ----- This is using a Class when you want to pass in props (Starts at what the props that is passed in)
   // constructor(props) { // Constructor of class
   // 	super(props);

   // 	this.state = { // This is initializing the object of this state to zero
   // 		count: props.initialCount
   // 	};
   // }

   // ^^^^^^
   //----------  this will be equivalent to the constructor if nothing else is used in it
   // 	state = { // This is initializing the object of this state to zero
   // 		count: 0
   // 	};

   // 	// ----- Want to use the other function so we can bind it with the object
   // 	// handleButtonClick() {
   // 	// 	console.log(this.state)
   // 	// 	console.log("button clicked");
   // 	// }

   // 	increment = () => {
   // 		// console.log(this.state);

   // 		this.setState ({
   // 			count: this.state.count + 1
   // 		});
   // 	};

   // 	decrement = () => {
   // 		// console.log(this.state);

   // 		this.setState ({
   // 			count: this.state.count - 1
   // 		});
   // 	};

   render() {
      console.log("render function called");

      return (
         <div>
            <div>count: {this.props.count}</div>
            <button onClick={this.props.increment}>increment</button>
            <button onClick={this.props.decrement}>decrement</button>
         </div>
      );
   }
}

// export default Header;
