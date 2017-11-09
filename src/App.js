import React, { Component } from 'react';
import {FormGroup, ControlLabel, FormControl} from "react-bootstrap";
import marked from "marked";
import './App.css';

class App extends Component {
  constructor(props){
      super(props);
      this.state = {
        text: ""
      }
  }

  render() {
    let markdown = this.state.text;

    return (
      <div className="App container"> 
       
        <div> {/* input start */}
          <h2>Markdown input</h2>
          <FormGroup controlId="TextArea">
            {<ControlLabel>Input area</ControlLabel>}
            <FormControl 
              componentClass="textarea" 
              placeholder="input markdown"
              value={markdown}
              onChange={(event)=>this.setState({text: event.target.value})}
            >

            </FormControl>
          </FormGroup>
        </div> {/* input end */}

        {/* Ouput start */}
        <div>
          <h2>Markdown output</h2>
          <div dangerouslySetInnerHTML={{__html: marked(markdown)}}>

          </div>
        </div>
        {/* Ouput end */}


      </div>
    )
  }
}

export default App;
