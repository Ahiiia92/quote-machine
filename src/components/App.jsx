import React, { Component } from 'react';

import Quote from './Quote';

// $.ajax({
//   type: "GET",
//   url: "https://api.paperquotes.com/apiv1/quotes/",
//   beforeSend: function (xhr) { xhr.setRequestHeader('Authorization', 'Token {c57d9cff7d1bd57563db6c04c61449845079013b}'); },
//   success: function (result) {
//     console.log(result.results);
//   },
//   error: function (result) {
//     //handle the error
//   }
// });

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "YALLLLLLLLAH!",
      author: "Yoda",
      contact: []
    }
  }

  // componentDidMount() {
  //   fetch('http://jsonplaceholder.typicode.com/users')
  //     .then(res => res.json())
  //     .then((data) => {
  //       this.setState({ contact: data})
  //     })
  //     .catch(console.log)
  // }

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
