import React, { Component } from 'react';

import './create-form-name.css';

export default class CreateFormName extends Component{
  render(){
    return(
      <div className="create-name-form-label">
        <label>
          Введите назавание формы:
          <input className="create-name-form" placeholder="Введите название формы"/>
        </label>
      </div>
    )
  }
}