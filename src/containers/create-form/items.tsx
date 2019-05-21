import React, {Component, FormEvent} from 'react';
import './index.css';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

interface Props {
  checkboxName: string;
<<<<<<< HEAD:src/create-form/items.tsx
  changeCheckbox: (value: IStringBooleanArray) => void;
  stateInputForms: string[];
}

interface IStringArray {
  values: string[];
=======
  checkInput: (value: any) => void;
  key: number;
  inputForms: string[];
>>>>>>> redux:src/containers/create-form/items.tsx
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

<<<<<<< HEAD:src/create-form/items.tsx
  changeCheckbox = ({currentTarget: {value, checked}}: FormEvent<HTMLInputElement>) => {
    const {changeCheckbox} = this.props;
    changeCheckbox({
      inputName: value,
      inputCheck: checked,
    });
=======
  changeCheckbox = ({ currentTarget }: FormEvent<HTMLInputElement>) => {
    const checkBoxElement = currentTarget.childNodes[1].childNodes[0] as HTMLInputElement;
    const inputName = currentTarget.childNodes[0].textContent as string;
    const checkboxElementCheck = checkBoxElement.checked as boolean;
    const arr: IStringBooleanArray[] = [];
    arr.push({ inputName, checkboxElementCheck });
    this.props.checkInput(arr[0].inputName);
>>>>>>> redux:src/containers/create-form/items.tsx
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
<<<<<<< HEAD:src/create-form/items.tsx
}
=======
}

const mapStateToProps = (state: State) => {
  return {
    inputForms: state.inputForms,
  };
};

export default connect(mapStateToProps, actions)(Items);
>>>>>>> redux:src/containers/create-form/items.tsx
