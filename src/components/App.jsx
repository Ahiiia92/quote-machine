import React, { Component } from 'react';

// get our fontawesome imports
import '../fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Quote from './Quote';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "Welcome beautiful Sunshine! Click on 'Next Quote'. Wanna share? Click on the icon ;)",
      author: "Yours"
    }
  }

  nextQuote = () => {
    // const url = `http://quotes.rest/qod.json?category=inspire`;
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = () => {
      if (this.readyState == 4 && this.status == 200) {
        // Access the result here
        alert(this.responseText);
      }
    };
    xhttp.open("GET", "http://quotes.rest/qod.json", true);
    console.log(url);
    // xhttp.setRequestHeader("X-Theysaidso-Api-Secret", "YOUR API HERE");
    xhttp.setRequestHeader("Access-Control-Allow-Origin" , "*");
    xhttp.setRequestHeader("Access-Control-Expose-Headers", "Access-Control-Allow-Origin");
    xhttp.setRequestHeader("Access-Control-Allow-Methods", "GET");
    xhttp.setRequestHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin-Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin, X-Access-Token, XKey, Authorization");
    xhttp.setRequestHeader("Content-type", "application/json");
    xhttp.send();

    const url = "http://quotes.rest/qod.json";
    fetch(url)
    .then(response => response.json())
    .then((data) => {
      console.log(data);
      console.log(data.contents.quotes[0].quote);
      this.setState({
        text: data.contents.quotes[0].quote,
        author: data.contents.quotes[0].author
      })
    })
    .catch((error) => {
      this.setState({
        text: "Oups... Seems we have an issue",
        author: "Marou"
      })
    });
  }

  // nextSong = () => {
  //   console.log("We're in next Song Function");
  //   const url = `https://api.spotify.com/v1/tracks/`;
  //   console.log(url);
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer 1631f68e18754d02b1e970657c598bda`
  //     }
  //   })
  //   .then(response => response.json())
  //   .then((result) => {
  //     this.setState({
  //       song: result[0]
  //     })
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     this.setState({
  //       text: "Oups... Seems we hava an issue",
  //       author: "Marou"
  //     })
  //   });
  // }

  handleClick = () => {
    console.log("we're in the handleClick function");
    const setBg = () => {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      document.getElementById('root').style.backgroundColor = "#" + randomColor;
      document.getElementById('new-quote').style.backgroundColor = "#" + randomColor;
      document.getElementById('tweet-quote').style.backgroundColor = "#" + randomColor;
      document.body.style.color = "#" + randomColor;
    };
    if (this.nextQuote) {
      setBg();
      return (
        this.nextQuote()
        );
    };
  }

  render() {
    return (
      <div className = "container" >
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6" style={{ boxShadow: '0px 70px 40px -32px rgba(0, 0, 0, 0.2)' }}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Circle-icons-quote.svg/512px-Circle-icons-quote.svg.png" alt="logo" id="logo"/>
            <div className="card">
              <div id="quote-box" className="w-100">
                <img src="https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="background image" />
                <Quote
                  text={this.state.text}
                  author={this.state.author}
                />
                <div className="btns">
                  <a href={`https://twitter.com/intent/tweet?text=Quote of The Day: "${this.state.text}"+ – +${this.state.author}`} id="tweet-quote">
                    <FontAwesomeIcon icon={['fab', 'twitter']}  style={{ fontSize: '1.5em'}}/>
                  </a>
                  <a href="#" id="new-quote" onClick={this.handleClick}><FontAwesomeIcon icon={['fa', 'angle-double-right']} style={{ fontSize: '2em' }} /></a>
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
