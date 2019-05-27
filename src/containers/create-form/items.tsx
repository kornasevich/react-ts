import React, {Component, FormEvent} from 'react';
import './index.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

interface Props {
  checkboxName: string;
  checkInput: (value: any) => void;
  key: number;
  inputForms: string[];
<<<<<<< HEAD
  changeCheckbox: (value: IStringBooleanArray) => void;
=======
  stateInputForms: string[];
>>>>>>> redux-build-form
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

interface IStringBooleanArray {
  inputName: string;
  inputCheck: boolean;
}

class Items extends Component<Props, State> {

  changeCheckbox = ({currentTarget: {value, checked}}: FormEvent<HTMLInputElement>) => {
<<<<<<< HEAD
    const {changeCheckbox} = this.props;
    changeCheckbox({
      inputName: value,
      inputCheck: checked,
    });
  };

  checkInputRender = (value: string, inputForms: string[]): boolean => {
    return inputForms.includes(value);
=======
    const {inputForms, checkInput} = this.props;
    const inputName = value as string;
    const checkboxElementCheck = checked as boolean;
    const arr: IStringBooleanArray[] = [];
    arr.push({inputName, checkboxElementCheck});
    if (checkboxElementCheck) {
      inputForms.push(arr[0].inputName);
      checkInput(inputForms);
    } else {
      const index = inputForms.indexOf(inputName);
      inputForms.splice(index, 1);
      checkInput(inputForms);
    }
>>>>>>> redux-build-form
  };

  checkInputRender = (value: string, inputForms: string[]): boolean => {
    return inputForms.includes(value);
  };

  render() {
<<<<<<< HEAD
    const {checkboxName, inputForms} = this.props;
=======
    const {checkboxName, stateInputForms} = this.props;
>>>>>>> redux-build-form
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
<<<<<<< HEAD
            checked={this.checkInputRender(checkboxName, inputForms)}
=======
            checked={this.checkInputRender(checkboxName, stateInputForms)}
>>>>>>> redux-build-form
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({inputForms}: State) => {
  return {
      inputForms,
  };
};

export default connect(mapStateToProps, actions)(Items);
