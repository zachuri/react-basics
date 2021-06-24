import React, { Component } from "react";
import "./App.css";
import Counter from "./components/Counter";

class App extends Component {
   state = {
      // This is initializing the object of this state to zero
      count: 0,
   };

   // ----- Want to use the other function so we can bind it with the object
   // handleButtonClick() {
   // 	console.log(this.state)
   // 	console.log("button clicked");
   // }

   increment = () => {
      // console.log(this.state);

      this.setState({
         count: this.state.count + 1,
      });
   };

   decrement = () => {
      // console.log(this.state);

      this.setState({
         count: this.state.count - 1,
      });
   };

   render() {
      return (
         <div className="App">
            <Counter
               count={this.state.count}
               decrement={this.decrement}
               increment={this.increment}
            />

            <Counter
               count={this.state.count}
               decrement={this.decrement}
               increment={this.increment}
            />
         </div>
      );
   }
}

export default App;
