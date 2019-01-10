import React, { Component } from "react";

class Home extends Component {
  componentDidMount = () => {
    fetch("https://restcountries.eu/rest/v2/alpha/co")
      .then(response => response.json())
      .then(data => console.log(data));
  }

  render() {
    return (
      <div className="View Home">
        <strong>Hi, all countries here. Check on each one to read more about it.</strong>
      </div>
    );
  }
}

export default Home;
