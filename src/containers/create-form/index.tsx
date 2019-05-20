import React, {Component} from 'react';

import './index.css';
import Items from './items';
import {checkbox, select} from './constans';
import Select from './select';
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

  changeCheckbox = (value: {
    [key: string]: boolean;
  }) => {
    const mass = Object.assign({}, this.state.inputForms, value);
    this.setState({
      inputForms: mass,
    });
  };

  changeName = (value: string) => {
    this.setState({
      ...this.state,
      formName: value,
    });
  };

  changeSelect = (value: {
    [key: string]: boolean;
  }) => {
    const mass = Object.assign({}, this.state.selectForms, value);
    this.setState({
      selectForms: mass,
    });
  };

  inputCheckbox = () => {
    return checkbox.map((item: string, index: number) => {
      return (
        <Items
          label={item}
          key={index}
          changeCheckbox={this.changeCheckbox}
        />
      );
    });
  };

  selectItems = () => {
    return select.map((item: string, index: number) => {
      return (
        <Select
          key={index}
          selectName={item}
          changeSelect={this.changeSelect}
        />
      );
    });
  };

  componentWillUpdate({}, nextState: State) {
    localStorage.setItem('build-form', JSON.stringify(nextState));
  }

  componentWillMount() {
    if (localStorage.getItem('build-form')) {
      this.setState((state: State): any => {
        return JSON.parse(localStorage.getItem('build-form') || 'null');
      });
    }
  }

  componentDidMount() {
    const checkboxes = document.querySelectorAll('.create-input-form');
    const selectCheckboxes = document.querySelectorAll('.dropdown-child');
    const lc = JSON.parse(localStorage.getItem('build-form') || 'null');
    Object.entries(lc.inputForms).forEach((item1) => {
      checkboxes.forEach((item2) => {
        if (item2.childNodes[0].textContent === item1[0]) {
          if (item1[1]) {
            (item2.childNodes[0].childNodes[1] as HTMLInputElement).checked = true;
          }
        }
      });
    });

    Object.entries(lc.selectForms).forEach((item1) => {
      selectCheckboxes.forEach((item2: HTMLInputElement) => {
        if (item2.childNodes[0].textContent === item1[0]) {
          if (item1[1]) {
            (item2.childNodes[0].childNodes[1] as HTMLInputElement).checked = true;
          }
        }
      });
    });
  }

  render() {
    const newState = {...this.state};
    return (
      <div className="form">
        <div className="form-all">
          <div className="form-one">
            <Name
              changeName={this.changeName}
            />
            <h3 className="titleInput">Выберите поля для формы:</h3>
            <div className="form-builder">
              {this.inputCheckbox()}
              <div className="input-block">
                <div className="select-menu">
                  <div className="dropdown">
                    <button className="mainmenubtn">Menu</button>
                    {this.selectItems()}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-two">
            <Form
              createForm={newState}
            />
          </div>
        </div>
      </div>
    );
  }
}
