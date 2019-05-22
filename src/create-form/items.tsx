import React, {Component, FormEvent} from 'react';
import './index.css';

interface Props {
  checkboxName: string;
  changeCheckbox: (value: IStringBooleanArray) => void;
  stateInputForms: string[];
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

  changeCheckbox = ({currentTarget}: FormEvent<HTMLInputElement>) => {
    const checkboxElementCheck = currentTarget.checked as boolean;
    const checkboxElementName = currentTarget.value as string;
    const arr: IStringBooleanArray = {
      inputName: '',
      checkboxElementCheck: false,
    };
    arr['inputName'] = checkboxElementName;
    arr['checkboxElementCheck'] = checkboxElementCheck;
    const copyState: State = {...this.state};
    copyState.inputForms.push(arr.inputName);
    this.props.changeCheckbox(arr);
  };

  checkInputCheck = (value: string, inputForms: string[]): boolean => {
    return inputForms.filter((item: string) => item === value).length > 0;
  };

  render() {
    const {checkboxName, stateInputForms} = this.props;
    return (
      <div
        className="form-input_checkbox"
      >
        <div className="form-input_checkbox--name">
          {checkboxName}
        </div>
        <div className="form-input_checkbox--input">
          <input
            value={checkboxName}
            type="checkbox"
            onChange={this.changeCheckbox}
            checked={this.checkInputCheck(checkboxName, stateInputForms)}
          />
        </div>
      </div>
    );
  }
}
