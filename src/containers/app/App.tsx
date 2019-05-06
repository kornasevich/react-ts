import React, { Component } from 'react';
import CreateForm from '../create-form/create-form';
import Header from '../header/header';

import './App.css';

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