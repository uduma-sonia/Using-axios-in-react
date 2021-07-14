import React from "react";
import axios from "axios";

class User extends React.Component {
  state = {
    persons: [],
  };

  componentDidMount() {
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <>
        {this.state.persons.map((person) => (
          <div style={{ borderBottom: "1px solid black" }}>
            <p>NAME - {person.name}</p>
            <p>USERNAME - {person.username}</p>
          </div>
        ))}
      </>
    );
  }
}

export default User;
