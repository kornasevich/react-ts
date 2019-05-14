import React, {Component} from 'react';

import './index.css';
import Items from './items';
import SelectItems from './select-items';
import {checkbox, select} from './constans';
import Name from './name';
import Form from '../form';

interface State {
  inputForms: {
    [key: string]: boolean;
  };
  formName: string;
  selectForms: {
    [key: string]: boolean;
  };
}


export default class CreateForm extends Component <{}, State> {

  state = {
    inputForms: {},
    formName: '',
    selectForms: {},
  };

  changeCheckbox = (value: object) => {
    this.setState((state) => {
      const mass = Object.assign({}, state.inputForms, value);
      return {
        inputForms: mass,
      };
    });
  };

  changeName = (value: string) => {
    this.setState((state: State) => {
      return {
        ...state,
        formName: value,
      };
    });
  };

  changeSelect = (value: object) => {
    this.setState((state: State) => {
      const mass = Object.assign({}, state.selectForms, value);
      return {
        selectForms: mass,
      };
    });
  };

  render() {

    const inputCheckbox = checkbox.map((item: string, index: number) => {
      return (
        <Items
          label={item}
          key={index}
          changeCheckbox={this.changeCheckbox}
        />
      );
    });

    const inputSelect = select.map((item: string, index: number) => {
      return (
        <SelectItems
          selectLabel={item}
          key={index}
          changeSelect={this.changeSelect}
        />
      );
    });

    const newState = Object.assign({}, this.state);
    return (
      <div className="form-all">
        <div className="form-one">
          <Name
            changeName={this.changeName}
          />
          <h3 className="titleInput">Выберите поля для формы:</h3>
          <div className="form-builder">
            {inputCheckbox}
            <div className="input-block">
              <nav className="menu">
                <ul>
                  <li><a href="#">Выберите</a>
                    <ul>
                      {inputSelect}
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
        <div className="form-two">
          <Form
            createForm={newState}
          />
        </div>
      </div>
    );
  }
}
