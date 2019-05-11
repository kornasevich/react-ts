import React, { Component } from 'react';

import './create-form.css';
import CreateFormItems from '../create-form-items/create-form-items';
import CreateFormSelectItems from '../create-form-select-items/create-form-select-items';

export default class CreateForm extends Component<any,any>{
  state = {
    inputForms : {},
  };
  changeCheckbox = (value: any) => {
    this.setState((state: any) => {
      console.log(value);
      const st = Object.assign({}, state.inputForms);
      console.log(st);
      const mass = Object.assign(st, value);
      console.log(mass);
      return{
        inputForms: mass,
      };
    });
  };
  checkbox: string[] = [
    'Фамилия',
    'Имя',
    'Отчество',
    'День рождения',
    'Пол',
    'E-mail',
    'Телефон',
    'Город',
    'Адрес',
    'Логин',
    'Пароль'];

  select: string[] = [
    'item 1',
    'item 2',
    'item 3',
    'item 4',
    'item 5',
    'item 6',
    'item 7',
  ];
  render() {

    const inputCheckbox = this.checkbox.map((item:string, index: number) =>  {
      return(
        <CreateFormItems
          label={item}
          key={index}
          changeCheckbox={this.changeCheckbox}
        />
      );
    });

    const inputSelect = this.select.map((item:string, index: number) =>  {
      return(
        <CreateFormSelectItems
          selectLabel={item}
          key={index}
        />
      );
    });
    return (
      <div>
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
    );
  }
}
