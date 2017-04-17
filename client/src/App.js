import React, { Component } from 'react';
import {form, FormGroup, FormControl, ControlLabel, Button} from 'react-bootstrap';
import axios from 'axios';

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
    var self;

    console.log("hello world")
    e.preventDefault();
    self = this;

    console.log(this.state);

    axios.post('/location', {
      location: this.state.location
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
      <div>
        <form>
          <FormGroup>
            <ControlLabel>Location: </ControlLabel>
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
          <Button 
            onClick={(e)=> this.messageLocation(e)}
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default App;
