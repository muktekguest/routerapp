import React, { Component } from "react";

import { Link } from "react-router-dom";

class Sidebar extends Component {
  constructor() {
    super();

    this.state = {
      countries: []
    };
  }

  componentDidMount = () => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(response => response.json())
      .then(data => this.setState({ countries: data }));
  }

  render() {
    const { countries } = this.state;

    return (
      <aside className="Sidebar">
        <ul className="Project-List">
          { countries.map(c => {
            return (
              <li key={ c.alpha2Code } className="Project-Item">
                <Link to={`/country/${ c.alpha3Code.toLowerCase() }`}>{ c.name }</Link>
              </li>
            );
          }) }
        </ul>
      </aside>
    );
  }
}

export default Sidebar;
