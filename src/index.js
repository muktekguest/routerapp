import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { HashRouter as Router } from "react-router-dom";

class AppRouter extends React.Component {
  render() {
    return (
      <Router>
        <App />
      </Router>
    );
  }
}

ReactDOM.render(<AppRouter />, document.getElementById('root'));
