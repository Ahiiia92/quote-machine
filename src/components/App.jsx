import React, { Component } from 'react';

import Quote from './Quote';
import quotes from '../../data/quotes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "YALLLLLLLLAH!",
      author: "Yoda",
    }
  }

  nextQuote = () => {
    this.setState({
      text: "Next Quote",
      author: "Moi"
    })
  }

  handleClick = () => {
    if (this.nextQuote) {
      return this.nextQuote()
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
            <a href="#" id="new-quote" onClick={this.handleClick}>NEW QUOTE</a>
          </div>
        </div>
        <div className="footer">Licensed by Me, Myself and I</div>
      </div>
    );
  };
}

export default App;
