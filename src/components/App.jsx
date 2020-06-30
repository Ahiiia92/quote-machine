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
      text: "You need a quote? Click on 'Next Quote'",
      author: "Yoda",
    }
  }

  nextQuote = () => {
    console.log('We are in the nextQuote Function');
    const url = `https://programming-quotes-api.herokuapp.com/quotes/random`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        text: data.en,
        author: data.author
      })
      console.log(data);
    })
    .catch((error) => {
      this.setState({
        text: "Oups... Seems we hava an issue",
        author: "Marou"
      })
    });
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
        <div className="footer">Made by <a href="https://github.com/Ahiiia92" target="_blank" rel="noopener">Ahiiia92</a></div>
      </div>
    );
  };
}

export default App;
