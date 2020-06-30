import React, { Component } from 'react';

// get our fontawesome imports
import '../fontawesome';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Quote extends Component {
  render() {
    return (
      <div id="text" className="">
        <span>
          <FontAwesomeIcon
            icon={['fa', 'quote-left']}
            style={{
              fontSize: '2em',
              paddingRight: '5%'
            }}
          />
        </span>
        {this.props.text}
        <p id="author">- {this.props.author}</p>
      </div>
    );
  };
}

export default Quote;
