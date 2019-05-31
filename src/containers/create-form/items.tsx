import React, {Component, FormEvent} from 'react';
import './index.css';
import {connect} from 'react-redux';
import { handleCheckInput } from '../actions/inputActions';

interface Props {
  checkboxName: string;
  checkInput: (value: string[]) => void;
  key: number;
  inputForms: string[];
  stateInputForms: string[];
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

class Items extends Component<Props> {

  changeCheckbox = ({currentTarget: {value, checked}}: FormEvent<HTMLInputElement>) => {
    const {inputForms, checkInput} = this.props;
    const newInputForms = [...inputForms];
    if (checked) {
      newInputForms.push(value);
      checkInput(newInputForms);
    } else {
      const index = inputForms.indexOf(value);
      newInputForms.splice(index, 1);
      checkInput(newInputForms);
    }
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

const mapStateToProps = ({inputForms}: State) => {
  return {
    inputForms,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    checkInput: (value: string[]) => dispatch(handleCheckInput(value)),
  };
};


export default connect(mapStateToProps, mapDispatchToProps )(Items);
