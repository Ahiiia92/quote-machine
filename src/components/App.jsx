import React, { Component } from 'react';

import Quote from './Quote';

class App extends Component {
  render() {
    return (
      <div className="card">
        <div id="quote-box">
          <Quote />
          <div className="btns">
            <a href="#" id="tweet-quote">TWEET THIS SHIT</a>
            <a href="#" id="new-quote">NEW QUOTE</a>
          </div>
        </div>
      </div>
    );
  };
}

export default App;
