import React from "react";
import axios from "axios";

class AddUser extends React.Component {
  state = {
    NewPerson: [],
  };

  handleChange = (event) => {
    this.setState({ NewPerson: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      NewPerson: this.state.NewPerson,
    };

    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then((res) => {
        console.log(res);
        console.log(res.data);
      });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddUser;
