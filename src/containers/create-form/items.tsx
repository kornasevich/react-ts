import React, { Component } from 'react';
import './index.css';

interface CreateFormItemsState {
  inputForms: {
    [key: string]: boolean;
  };
  formName: string;
  selectForms: {
    [key: string]: boolean;
  };
}

interface Props {
  changeCheckbox: (arg: {[key: string]: boolean}) => void;
  label: string;
}

export default class Items extends Component<Props> {
  state: CreateFormItemsState = {
    inputForms: {},
    formName: '',
    selectForms: {},
  };

  changeCheckbox = (event: any) =>  {
    const el = event.target.parentElement.innerText;
    const ch = event.target.checked;
    this.setState((state: CreateFormItemsState) => {
      const stateCopy = Object.assign({}, state);
      stateCopy.inputForms[el] = ch;
      this.props.changeCheckbox(stateCopy.inputForms);
      return {
        state: stateCopy,
      };
    });
  };

  render() {
    const { label } = this.props;
    return (
      <div className="input-block">
        <label>
          {label}
          <input
            onChange={this.changeCheckbox}
            className="input-form create-password-form"
            type="checkbox"
          />
        </label>
      </div>
    );
  }
}
