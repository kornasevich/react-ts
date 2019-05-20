import React, {Component, FormEvent} from 'react';

import './index.css';

interface IStringBooleanArray {
  inputName: string;
  checkboxElementCheck: boolean;
}

interface Props {
  selectCheckbox: (value: IStringBooleanArray[]) => void;
  selectName: string;
}

interface IStringArray {
  values: string[];
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: IStringArray[];
}

export default class Select extends Component<Props, State> {
  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

  selectCheckbox = ({currentTarget}: FormEvent<HTMLInputElement>) => {
    const checkBoxElement = currentTarget.childNodes[0].childNodes[1] as HTMLInputElement;
    const inputName = currentTarget.childNodes[0].textContent as string;
    const checkboxElementCheck = checkBoxElement.checked as boolean;
    const arr: IStringBooleanArray[] = [];
    arr.push({ inputName, checkboxElementCheck });
    const copyState: State = { ...this.state };
    copyState.inputForms.push(arr[0].inputName);
    this.props.selectCheckbox(arr);
    this.setState((state: State): any => {
      return {
        state: copyState,
      };
    });
  };

  render() {
    const {selectName} = this.props;
    return (
      <div
        className="dropdown-childs"
        onChange={this.selectCheckbox}
      >
        <label>
          {selectName}
          <input type="checkbox"/>
        </label>
      </div>
    );
  }
};