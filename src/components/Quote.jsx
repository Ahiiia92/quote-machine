import React, { Component } from 'react';

class Quote extends Component {
  const contacts = ({ contacts }) => {
    return (
      <div>
        <h1>Contact List</h1>
        {contacts.map((contact) =>
          <div>
              {contact.name}
          </div>
        )}
      </div>
    )
  }

  render() {
    return (
    <div id="quote-text">
      {this.contacts}
      <span><i className="fas fa-quote-left"></i></span>
            {this.props.text}
      <p id="author">-- {this.props.author}</p>
    </div>
    );
  };
}

export default Quote;
