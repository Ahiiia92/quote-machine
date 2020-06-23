import React, { Component } from 'react';

class Quote extends Component {
  render() {
    return (
    <div id="quote-text">
      <span><i className="fas fa-quote-left"></i></span>
            Hello Marou! Keep up the good job!
      <p id="author">- Yoda</p>
    </div>
    );
  };
}

export default Quote;
