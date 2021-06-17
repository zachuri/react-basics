import React from "react";

export default class MyForm extends React.Component {
   state = {
      name: "ben",
      favoritePet: "",
      rememberMe: true,
      title: "Miss.",
   };

   handleChange = (event, fieldName, isCheckBox) => {
      //console.log("event.target.value");
      // this.setState({ name: event.target.value });

      //console.log("event.target.fieldName");
      this.setState({
         [fieldName]: isCheckBox ? event.target.checked : event.target.value,
      });
   };

   handleSubmit = () => {
      console.log(this.state);
   };

   render() {
      //console.log(this.state.name);
      return (
         <div>
            {/* input words */}
            <input
               value={this.state.name}
               onChange={(event) => this.handleChange(event, "name")}
            />

            {/* input textarea words */}
            <textarea
               value={this.state.favoritePet}
               onChange={(event) => this.handleChange(event, "favoritePet")}
               //onChange={this.handleChangeFavoritePet} // Listeners
            />

            {/* input that is a checkbox */}
            <input
               type="checkbox"
               checked={this.state.rememberMe}
               // onChange={this.handleCheck} // Called Listeners
               onChange={
                  (event) => this.handleChange(event, "rememberMe", true) // This one will have 3 parameters/ others will be undefined
               }
            />

            {/* select field */}
            <div>
               {/* <select value={this.state.title} onChange={this.handleSelect}> */}
               <select
                  value={this.state.title}
                  onChange={(event) => this.handleChange(event, "title")}
               >
                  <option>Mr.</option>
                  <option>Miss.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
               </select>
            </div>

            {/* submit everything in the state */}
            <button onClick={this.handleSubmit}>submit</button>
         </div>
      );
   }
}
