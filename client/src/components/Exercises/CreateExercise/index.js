import React, { Component } from 'react';
import axios from 'axios';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { TextField, InputAdornment, Button, MenuItem } from '@mui/material';
import { DatePicker, LocalizationProvider } from '@mui/lab';

class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      description: '',
      duration: 0,
      date: new Date(),
      users: [],
    };
  }

  componentDidMount() {
    axios.get('/users').then((response) => {
      if (response.data.length > 0) {
        this.setState({
          users: response.data.map((user) => user.username),
          username: response.data[0].username,
        });
      }
    });
  }

  onChangeUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };

  onChangeDescription = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  onChangeDuration = (event) => {
    this.setState({
      duration: event.target.value,
    });
  };

  onChangeDate = (date) => {
    this.setState({
      date: date,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    window.location = '/';
    console.log(exercise);

    axios
      .post('http://localhost:3001/exercises/add', exercise)
      .then((res) => console.log(res.data));
  };

  render() {
    const { username, users, description, duration, date } = this.state;

    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <TextField
            id="username"
            select
            label="Username: "
            value={username}
            onChange={this.onChangeUsername}
          >
            {users.map(function (user) {
              return (
                <MenuItem key={user} value={user}>
                  {user}
                </MenuItem>
              );
            })}
          </TextField>
          <TextField
            id="description"
            label="Description: "
            multiline
            rows={3}
            value={description}
            onChange={this.onChangeDescription}
          />
          <TextField
            label="Duration (in minutes): "
            id="duration"
            value={duration}
            onChange={this.onChangeDuration}
            InputProps={{
              endAdornment: <InputAdornment position="end">min</InputAdornment>,
            }}
          />
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              id="date"
              label="Date"
              value={date}
              onChange={this.onChangeDate}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <Button type="submit" variant="contained">
            Create Exercise Log
          </Button>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
