import React, { Component } from 'react';
import CreateForm from '../../create-form/index';
import Header from '../header/header';

import './index.css';

export default class App extends Component {

  render() {
    return (
      <div className="form-build">
          <Header/>
          <CreateForm/>
      </div>
    );
  }
}