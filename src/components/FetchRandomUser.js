import React from "react";

export default class FetchRandomUser extends React.Component {
   state = {
      loading: true,
      person: null,
   };

   async componentDidMount() {
      const url = "https://api.randomuser.me/";

      // This is asynchronous code
      const response = await fetch(url); // fetch allows us to get the http request from API
      const data = await response.json(); // returns the json data
      this.setState({ person: data.results[0], loading: false });
      console.log(data.results[0]);
   }

   render() {
      // if (this.state.loading) {
      //    return <div>loading...</div>;
      // }

      // if (!this.state.person) {
      //    return <div>didn't get a person </div>;
      // }

      return (
         <div>
            {this.state.loading || !this.state.person ? (
               <div>loading...</div>
            ) : (
               <div>
                  <div>{this.state.person.name.title}</div>
                  <div>{this.state.person.name.first}</div>
                  <div>{this.state.person.name.last}</div>
                  <img
                     src={this.state.person.picture.large}
                     alt="random user"
                  />
               </div>
            )}
         </div>

         /* <div>
            <div>{this.state.person.name.title}</div>
            <div>{this.state.person.name.first}</div>
            <div>{this.state.person.name.last}</div>
            <img
               src={this.state.person.picture.large}
               alt="random user"
            />
         </div> */
      );
   }
}
