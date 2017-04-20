import React, { Component } from 'react';
import {form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import axios from 'axios';
import './index.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      hours: ''
    }
    this.messageLocation = this.messageLocation.bind(this);
  }

  messageLocation(e){
    console.log("hello world")
    e.preventDefault();

    console.log(this.state);

    axios.post('/location', {
      location: this.state.location,
      hours: this.state.hours
    })
    .then(function(res) {
      console.log(res);
    })
    .catch(function(e){
      console.log(e);
    });
  }

  render() {
    return (
      <div style={{"padding-top":"10px"}}>
        <div style={{"margin": "auto", "width":"50%", "border": "3px solid blue", "padding": "10px", "text-align": "center"}}>
          <h1 style={{"font-size": "40px", "padding":"5px"}}>Tuml</h1>
          <h3>Find parking anywhere</h3>
          <form style={{"padding-bottom":"10px"}}>
            <FormGroup style={{"padding":"10px"}}>
              <ControlLabel style={{"font-size":"16px"}}>Location: </ControlLabel>
              <FormControl
                type="text"
                placeholder="Enter location"
                onChange={(event)=> {
                    this.setState({location: event.target.value})
                    console.log("Location: " + this.state.location);
                  }
                }
              />
            </FormGroup>
            <FormGroup controlId="formControlsSelect">
              <ControlLabel>Number of Hours: </ControlLabel>
              <FormControl 
                componentClass="select" 
                placeholder="select"
                onChange={(event)=> {
                  this.setState({hours: event.target.value});
                  console.log("Hours: " + this.state.hours);
                }}
              >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </FormControl>
            </FormGroup>
          </form>
          <Button
              style={{"background-color":"#4885ed", "color":"white", "border":"none", "padding": "15px 32px", "font-size":"16px", "text-decoration":"none"}}
              onClick={(e)=> this.messageLocation(e)}
            >
             Submit
          </Button>
        </div>
      </div>
    );
  }
}

export default App;
