import React from "react";

// Creating an object of initial state
const initialState = {
   name: "",
   email: "",
   password: "",
   nameError: "",
   emailError: "",
   passwordError: "",
};

export default class ValidationForm extends React.Component {
   state = initialState;

   handleChange = (event) => {
      const isCheckBox = event.target.type === "checkbox";
      this.setState({
         [event.target.name]: isCheckBox
            ? event.target.checked
            : event.target.value,
      });
   };

   validate = () => {
      let nameError = "";
      let emailError = "";
      let passwordError = "";

      if (!this.state.name) {
         nameError = "name cannont be blank";
      }

      if (!this.state.email.includes("@")) {
         emailError = "invalid email";
      }

      if (emailError || nameError) {
         this.setState({ emailError, nameError });
         return false;
      }

      return true;
   };

   handleSubmit = (event) => {
      event.preventDefault();
      const isValid = this.validate();
      if (isValid) {
         console.log(this.state);
         // clear form if user validated/submited
         this.setState(initialState);
      }
   };

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <div>
               <input
                  name="name"
                  placeholder="name"
                  value={this.state.name}
                  onChange={this.handleChange}
               />
               <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.nameError}
               </div>
            </div>

            <div>
               <input
                  name="email"
                  placeholder="email"
                  value={this.state.email}
                  onChange={this.handleChange}
               />
               <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.emailError}
               </div>
            </div>

            <div>
               <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={this.state.password}
                  onChange={this.handleChange}
               />
               <div style={{ fontSize: 12, color: "red" }}>
                  {this.state.passwordError}
               </div>
            </div>

            <button type="submit">submit</button>
         </form>
      );
   }
}
