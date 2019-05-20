import React, { Component, FormEvent } from 'react';
import './index.css';

interface Props {
  checkboxName: string;
  changeCheckbox: (value: IStringBooleanArray[]) => void;
}

interface IStringArray {
  values: string[];
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: IStringArray[];
}

interface IStringBooleanArray {
  inputName: string;
  checkboxElementCheck: boolean;
}

export default class Items extends Component<Props, State> {
  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

  changeCheckbox = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const checkBoxElement = currentTarget.childNodes[1].childNodes[0] as HTMLInputElement;
    const inputName = currentTarget.childNodes[0].textContent as string;
    const checkboxElementCheck = checkBoxElement.checked as boolean;
    const arr: IStringBooleanArray[] = [];
    arr.push({ inputName, checkboxElementCheck });
    const copyState: State = { ...this.state };
    copyState.inputForms.push(arr[0].inputName);
    this.props.changeCheckbox(arr);
    this.setState((state: State): any => {
      return {
        state: copyState,
      };
    });
  };

  render() {
    const { checkboxName } = this.props;
    return (
      <div
        className="form-input_checkbox"
        onChange={this.changeCheckbox}
      >
        <div className="form-input_checkbox--name">
          {checkboxName}
        </div>
        <div className="form-input_checkbox--input">
          <input
            type="checkbox"
          />
        </div>
      </div>
    );
  }
}
