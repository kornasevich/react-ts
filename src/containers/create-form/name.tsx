import React, { Component } from 'react';

import './index.css';
/*
interface Props {
  changeName: (arg: string) => void;
}*/

<<<<<<< HEAD:src/create-form/name.tsx
export default class Name extends Component<Props> {
  changeFormName = ({ target:{ value } }: ChangeEvent<HTMLInputElement>) =>{
    const { changeName } = this.props;
    changeName(value);
  };
=======
export default class Name extends Component/*<Props>*/ {
/*  changeFormName = ({ target }: ChangeEvent<HTMLInputElement>) =>{
    const { changeName } = this.props;
    changeName(target.value);
  };*/
>>>>>>> redux:src/containers/create-form/name.tsx

  render() {
    return (
      <div className="form-name_input">
        <label>
          Введите название формы:
          <input
            className="create-name-form"
            placeholder="Введите название формы"
            /*onChange={this.changeFormName}*/
          />
        </label>
      </div>
    );
  }
}