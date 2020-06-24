import React, { Component } from 'react';

// get our fontawesome imports
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <a href="#" id="tweet-quote">
              <FontAwesomeIcon
                icon={['fab', 'twitter']}
                style={{
                  fontSize: '1.5em'
                }}
              />
            </a>
            <a href="#" id="new-quote" onClick={this.handleClick}>NEW QUOTE</a>
          </div>
        </div>
        <div className="footer">Licensed by Me, Myself and I</div>
      </div>
    );
  };
}

export default App;
