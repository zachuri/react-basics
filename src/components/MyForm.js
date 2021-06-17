import React from "react";

export default class MyForm extends React.Component {
   state = {
      name: "ben",
      favoritePet: "",
      rememberMe: true,
      title: "Miss.",
   };

   handleChange = (event) => {
      //console.log("event.target.value");
      // this.setState({ name: event.target.value });

      //console.log("event.target.fieldName");
      // this.setState({
      //    [fieldName]: isCheckBox ? event.target.checked : event.target.value,
      // });

      const isCheckBox = event.target.type === "checkbox";
      console.log(event.target.name);
      this.setState({
         [event.target.name]: isCheckBox
            ? event.target.checked
            : event.target.value,
      });
   };

   handleSubmit = (event) => {
      event.preventDefault(); // Stop it from refreshing
      console.log(this.state);
   };

   render() {
      //console.log(this.state.name);
      return (
         //<div> instead of a div user FORM tag (press enter to submit instead of button)
         <form onSubmit={this.handleSubmit}>
            {/* input words */}
            <input
               name="name"
               value={this.state.name}
               onChange={this.handleChange}
            />

            {/* input textarea words */}
            <textarea
               name="favoritePet"
               value={this.state.favoritePet}
               onChange={this.handleChange}
               //onChange={this.handleChangeFavoritePet} // Listeners
            />

            {/* input that is a checkbox */}
            <input
               name="rememberMe"
               type="checkbox"
               checked={this.state.rememberMe}
               // onChange={this.handleCheck} // Called Listeners
               onChange={
                  this.handleChange // This one will have 3 parameters/ others will be undefined
               }
            />

            {/* select field */}
            <div>
               {/* <select value={this.state.title} onChange={this.handleSelect}> */}
               <select
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
               >
                  <option>Mr.</option>
                  <option>Miss.</option>
                  <option>Ms.</option>
                  <option>Mrs.</option>
               </select>
            </div>

            {/* submit everything in the state */}
            {/* <button onClick={this.handleSubmit}>submit</button> */}
            <button type="submit">submit</button>
         </form>
         // </div>
      );
   }
}
