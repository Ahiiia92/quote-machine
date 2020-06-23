import React, { Component } from 'react';

import Quote from './Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Fuck it! Keep it up! You got this!"
      author: "Yoda"
    }
  }

  render() {
    return (
      <div className="card">
        <div id="quote-box">
          <Quote
            text={this.state.text}
            author={this.state.author}
          />
          <div className="btns">
            <a href="#" id="tweet-quote">TWEET THIS SHIT</a>
            <a href="#" id="new-quote">NEW QUOTE</a>
          </div>
        </div>
        <div className="footer">Licensed by Me, Myself and I</div>
      </div>
    );
  };
}

export default App;
