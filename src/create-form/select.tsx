import React, {Component, FormEvent} from 'react';

import './index.css';

interface IStringBooleanArray {
  inputName: string;
  checkboxElementCheck: boolean;
}

interface Props {
  selectCheckbox: (value: IStringBooleanArray) => void;
  selectName: string;
  stateSelectForms: string[];
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
    const checkboxElementCheck = currentTarget.checked as boolean;
    const checkboxElementName = currentTarget.value as string;
    const arr: IStringBooleanArray = {
      inputName: '',
      checkboxElementCheck: false
    };
    arr['inputName'] = checkboxElementName;
    arr['checkboxElementCheck'] = checkboxElementCheck;
    const copyState: State = { ...this.state };
    copyState.inputForms.push(arr.inputName);
    this.props.selectCheckbox(arr);
  };


  checkInputCheck = (value: string, inputForms: string[]): boolean => {
    return inputForms.filter((item: string) => item === value).length > 0;
  };

  render() {
    const { selectName, stateSelectForms } = this.props;
    return (
      <div
        className="dropdown-childs"
      >
        <label>
          {selectName}
          <input
            value={selectName}
            type="checkbox"
            onChange={this.selectCheckbox}
            checked={this.checkInputCheck(selectName, stateSelectForms)}
          />
        </label>
      </div>
    );
  }
};