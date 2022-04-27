import React, { Component } from 'react';
import axios from 'axios';
import { TextField, Button } from '@mui/material';

class CreateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const user = {
      username: this.state.username,
    };

    console.log(user);

    axios.post('/users/add', user).then((res) => console.log(res.data));

    this.setState({
      username: '',
    });
  };

  render() {
    return (
      <div>
        <h3>Create New User</h3>
        <form onSubmit={this.onSubmit}>
          <TextField
            id="username"
            label="Username: "
            value={this.state.username}
            onChange={this.onChangeUsername}
          ></TextField>
          <Button type="submit" variant="contained">
            Create Exercise Log
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateUser;
