import React, {Component, FormEvent} from 'react';
import './index.css';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

interface Props {
  checkboxName: string;
  checkInput: (value: any) => void;
  key: number;
  inputForms: string[];
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

interface IStringBooleanArray {
  inputName: string;
  checkboxElementCheck: boolean;
}

class Items extends Component<Props, State> {

  changeCheckbox = ({currentTarget:{value, checked}}: FormEvent<HTMLInputElement>) => {
    const { inputForms, checkInput } = this.props;
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
  };

  render() {
    const {checkboxName} = this.props;
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
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: State) => {
  return {
    inputForms: state.inputForms,
  };
};

export default connect(mapStateToProps, actions)(Items);