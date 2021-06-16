import React from 'react' // We are using JSX so we need to import react

// These cannont have states because of function components not Class Components

//const Body = (props) => (
export default props => (
  <div>
    <p className="App-intro">
        Edit <code>src/App.js</code> and save to reload.
    </p>

    {/* Passing in Paramters like the class  */}
    <h1>{props.text}</h1>
    <h1>{props.text2}</h1>
    <h1>{props.myFuncMult(1,2)}</h1>
  </div>
); 

export const Body2 = () => (
	<div>
		<div>
			hi
		</div>
	</div>
);

export const Body3 = () => (
	<div>
		<div>
			hi
		</div>
	</div>
);

//export default Body;

