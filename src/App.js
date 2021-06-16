import React, { Component } from "react";
import './App.css';
import Body, { Body3, Body2} from './components/Body' // Export default --> Body // Export --> Body3, Body2
import Counter from "./components/Counter";
// import Header  from './components/Header' // Can rename your export Header --> MyHeader but with the same file location
import MyHeader  from './components/Header'

// --------------------------------------------------
// NOTE: all of these function are the same for components
//

// When passing into a function instead of a class, u just have to
//    pass in props instead of this.props.parameter_name
// const Body = (props) => (
//   <div>
//     <p className="App-intro">
//         Edit <code>src/App.js</code> and save to reload.
//     </p>

//     {/* Passing in Paramters like the class  */}
//     <h1>{props.text}</h1>
//     <h1>{props.text2}</h1>
//     <h1>{props.myFuncMult(1,2)}</h1>
//   </div>
// ); 

// const Body = () => {
//  return (
//   <p className="App-intro">
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//  );
// };

// function Body() {
//  return (
//   <p className="App-intro">
//     Edit <code>src/App.js</code> and save to reload.
//   </p>
//  );
// }
// --------------------------------------------------

// class Header extends Component {
//   render() {
//     return (
//       <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             {/* Added Learned about passing in parameters (strings)*/}
//             Edit <code>src/App.js</code> and save to reload. ({this.props.title})
//           </p>
          
//           {/* Added Learned about passing in parameters (numbers)*/}
//           <div>{this.props.num}</div>

//           {/* Added Learned about passing in parameters (Objects)*/}
//           <div>{this.props.myObj.a}</div>
//           <div>{this.props.myObj.b}</div>

//           {/* Added Learned about passing in parameters (Turn Objects into Strings)*/}
//           <div>{JSON.stringify(this.props.myObj.b)}</div>

//           {/* Added Learned about passing in parameters (Get Arrays)*/}
//           <div>{this.props.myArr[0]}</div>
//           <div>{this.props.myArr[1]}</div>
//           <div>{this.props.myArr[2]}</div>


//           {/* Added Learned about passing in parameters (Passing in functions)*/}
//           <div>{this.props.myFuncAdd(10,12)}</div>
//           <div>{this.props.myFuncSub(12,10)}</div>
//           <div>{this.props.myFuncMult(2,2)}</div>

//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//     )
//   }
// }


class App extends Component {


  // Create a multiply function outside of render (Useless for now)
  mult(a,b) {
      return a * b;
  }

  render() {

    // Creating a lambda function 
    const add = (a,b) => a + b;

    

    return (
      <div className="App">

        {/* Learning how to pass data to a class component */}
        <MyHeader 
          title={"Hello from App"} 
          num={5} 
          myObj={{a: 6, b: 7}} 
          myArr={[10,2,3]}
          // Pass inside as function
          myFuncAdd={add}

          // Pass inside parameters the algorithm
          myFuncSub={(a, b) => a - b}

          // Passing in the function multi with its own parameters
          myFuncMult={this.mult}
        />

        <Body 
          myFuncMult={this.mult}
          text="I am cool" 
          text2="I am cool too"
        />

        <Body2/>
        <Body3/>

        {/*Props are a way of passing data into your own custom components*/}

        <Counter/>
        <Counter initialCount={0}/>
        <Counter initialCount={10}/>

      </div>
    );
  }
}

export default App;