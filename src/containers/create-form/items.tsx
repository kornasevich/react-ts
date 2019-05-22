import React, {Component, FormEvent} from 'react';
import './index.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

interface Props {
  checkboxName: string;
  checkInput: (value: any) => void;
  key: number;
  inputForms: string[];
  changeCheckbox: (value: IStringBooleanArray) => void;
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
    const {checkboxName, inputForms} = this.props;
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
            checked={this.checkInputRender(checkboxName, inputForms)}
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
