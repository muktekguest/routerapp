import React, { Component } from "react";

class Country extends Component {
  state = {
    country: {}
  };

  componentDidMount = () => {
    const { countryName } = this.props.match.params;

    fetch(`https://restcountries.eu/rest/v2/alpha/${ countryName }`)
      .then(response => response.json())
      .then(data => {
        const { name, alpha2Code, callingCodes, region, subregion, population, latlng, flag } = data;

        this.setState({
          country: {
            name,
            alpha2Code,
            callingCodes,
            region,
            subregion,
            population,
            latlng,
            flag
          }
        });
      });
  }

  componentDidUpdate = (prev) => {
    const { countryName } = this.props.match.params;

    if (countryName !== prev.match.params.countryName) {
      fetch(`https://restcountries.eu/rest/v2/alpha/${ countryName }`)
        .then(response => response.json())
        .then(data => {
          const { name, alpha2Code, callingCodes, region, subregion, population, latlng, flag } = data;

          this.setState({
            country: {
              name,
              alpha2Code,
              callingCodes,
              region,
              subregion,
              population,
              latlng,
              flag
            }
          });
        });
    }
  }

  render() {
    const { country } = this.state;

    return (
      <div className="View Code">
        <pre>{ JSON.stringify(country, null, 2) }</pre>
        <img src={ country.flag } className="Flag" />
      </div>
    );
  }
}

export default Country;
