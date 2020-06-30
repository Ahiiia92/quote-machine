import React, { Component } from 'react';

// get our fontawesome imports
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Quote from './Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "You need a quote? Click on 'Next Quote'. Wanna share? Click on the icon ;)",
      author: "Yoda",
    }
  }

  nextQuote = () => {
    const url = `https://programming-quotes-api.herokuapp.com/quotes/random`;
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        text: data.en,
        author: data.author
      })
    })
    .catch((error) => {
      this.setState({
        text: "Oups... Seems we hava an issue",
        author: "Marou"
      })
    });
  }

  handleClick = (element) => {
    const setBg = () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById('root').style.backgroundColor = "#" + randomColor;
      document.getElementById('new-quote').style.backgroundColor = "#" + randomColor;
      document.getElementById('tweet-quote').style.backgroundColor = "#" + randomColor;
      document.body.style.color = "#" + randomColor;
    };
    if (this.nextQuote) {
      setBg();
      return this.nextQuote();
    };
  }

  render() {
    return (
      <div className = "container" >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card">
              <div id="quote-box" className="w-100">
                <Quote
                  text={this.state.text}
                  author={this.state.author}
                />
                <div className="btns">
                  <a href={`https://twitter.com/intent/tweet?text=${this.text}.+ ++author:+ +${this.author}`} id="tweet-quote">
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
          </div>
        </div>
      </div>
    );
  };
}

export default App;
