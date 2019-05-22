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

  changeCheckbox = ({currentTarget}: FormEvent<HTMLInputElement>) => {
    const inputName = currentTarget.value as string;
    const checkboxElementCheck = currentTarget.checked as boolean;
    const arr: IStringBooleanArray[] = [];
    arr.push({inputName, checkboxElementCheck});
    this.props.checkInput(arr[0].inputName);
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