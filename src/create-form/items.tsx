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
  inputCheck: boolean;
}

export default class Items extends Component<Props, State> {
  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

  changeCheckbox = ({currentTarget: {value, checked}}: FormEvent<HTMLInputElement>) => {
    const {changeCheckbox} = this.props;
    changeCheckbox({
      inputName: value,
      inputCheck: checked,
    });
  };

  checkInputRender = (value: string, inputForms: string[]): boolean => {
    return inputForms.includes(value);
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
            checked={this.checkInputRender(checkboxName, stateInputForms)}
          />
        </div>
      </div>
    );
  }
}