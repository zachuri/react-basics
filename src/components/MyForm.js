import React from "react";

export default class MyForm extends React.Component {
   state = {
      name: "ben",
      favoritePet: "",
      remeberMe: true,
      title: "Miss.",
   };

   handleChange = (event) => {
      //console.log("event.target.value");
      this.setState({ name: event.target.value });
   };

   handleChangeFavoritePet = (event) => {
      //console.log("event.target.value");
      this.setState({ favoritePet: event.target.value });
   };

   handleCheck = (event) => {
      // console.log("called");
      this.setState({ remeberMe: event.target.checked }); // use check instead of value
   };

   handleSelect = (event) => {
      // console.log("called");
      this.setState({ title: event.target.value }); // use check instead of value
   };

   handleSubmit = () => {
      console.log(this.state);
   };

   render() {
      //console.log(this.state.name);
      return (
         <div>
            {/* input words */}
            <input value={this.state.name} onChange={this.handleChange} />

            {/* input textarea words */}
            <textarea
               value={this.state.favoritePet}
               onChange={this.handleChangeFavoritePet} // Listeners
            />

            {/* input that is a checkbox */}
            <input
               type="checkbox"
               checked={this.state.remeberMe}
               onChange={this.handleCheck} // Called Listeners
            />

            {/* select field */}
            <div>
               <select value={this.state.title} onChange={this.handleSelect}>
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
