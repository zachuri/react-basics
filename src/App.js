import React, { Component } from "react";
import './App.css';
import ImageSlider from "./components/ImageSlider";
import Counter from "./components/Counter"

class App extends Component {

  state = {
    visible: true
  }

  render() {

    // ------ Option with if /else statements
    // if (!this.state.visible) {
    //   return (
    //     <div>display nothing</div>
    //   );
    // } 

    // ------ Another Option with if / else statments
    let slider = this.state.visible ? (
      <ImageSlider /> 
    ) : (
      <Counter />
    ); 

    // ------- Set variables
    const buttonText = this.state.visible ? 'hide' : 'show';

    // const slider = this.state.visible ? (
    //   <ImageSlider /> 
    // ) : (
    //   <Counter />
    // );

    return (
      <div className="App">
      {/* Display the variables */}
        {slider}  
        <button 
          onClick={() => {
            this.setState({visible: !this.state.visible });
          }}
        >
          {/* Display the variables */}
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;