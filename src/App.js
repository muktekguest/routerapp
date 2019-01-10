import React, { Component } from 'react';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

import routes from "./routes";

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="Container">
          <Sidebar />

          { routes }
        </div>
      </React.Fragment>
    );
  }
}

export default App;
