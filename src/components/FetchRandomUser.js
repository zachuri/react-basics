import React from "react";

export default class FetchRandomUser extends React.Component {
   state = {
      loading: true,
      // person: null,
      people: [],
   };

   async componentDidMount() {
      const url = "https://api.randomuser.me/?results=5";

      // This is asynchronous code
      const response = await fetch(url); // fetch allows us to get the http request from API
      const data = await response.json(); // returns the json data
      this.setState({ people: data.results, loading: false });
      // console.log(data.results[0]);
   }

   render() {
      if (this.state.loading) {
         return <div>loading...</div>;
      }

      // if (!this.state.person) {
      if (!this.state.people) {
         return <div>didn't get a person </div>;
      }

      // const peopleJsx = this.state.people.map((person) => (
      //    //Mapping over the datas
      //    //Need a unique key
      //    //<div key={'some-person-${i}'}> this is a last resort to create an id
      //    <div key={person.login.uuid}>
      //       <div>{person.name.title}</div>
      //       <div>{person.name.first}</div>
      //       <div>{person.name.last}</div>
      //       <img src={person.picture.large} alt="random user" />
      //    </div>
      // ));

      return (
         // <div>
         //    {this.state.loading || !this.state.person ? (
         //       <div>loading...</div>
         //    ) : (
         //       <div>
         //          <div>{this.state.person.name.title}</div>
         //          <div>{this.state.person.name.first}</div>
         //          <div>{this.state.person.name.last}</div>
         //          <img
         //             src={this.state.person.picture.large}
         //             alt="random user"
         //          />
         //       </div>
         //    )}
         // </div>

         <div>
            {this.state.people.map((person) => (
               //Mapping over the datas
               //Need a unique key
               //<div key={'some-person-${i}'}> this is a last resort to create an id
               <div key={person.login.uuid}>
                  <div>{person.name.title}</div>
                  <div>{person.name.first}</div>
                  <div>{person.name.last}</div>
                  <img src={person.picture.large} alt="random user" />
               </div>
            ))}
         </div>

         // <div>{peopleJsx}</div>
      );
   }
}
