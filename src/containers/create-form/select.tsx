import React, {Component, FormEvent} from 'react';

import './index.css';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

interface IStringBooleanArray {
  inputName: string;
  inputCheck: boolean;
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

<<<<<<< HEAD
=======
interface Props {
  selectName: string;
  selectInput: (value: string[]) => void;
  selectForms: string[];
  stateSelectForms: string[];
}
>>>>>>> refactoring task4redux


<<<<<<< HEAD
class Select extends Component<Props, State> {
  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

  selectCheckbox = ({currentTarget:{value, checked}}: FormEvent<HTMLInputElement>) => {
    const { selectCheckbox } = this.props;
    selectCheckbox({
      inputName: value ,
      inputCheck: checked,
    });
=======
  selectCheckbox = ({currentTarget: {value, checked}}: FormEvent<HTMLInputElement>) => {
    const {selectInput, selectForms} = this.props;
    const inputName = value as string;
    const checkboxElementCheck = checked as boolean;
    const arr: IStringBooleanArray[] = [];
    arr.push({inputName, checkboxElementCheck});
    if (checkboxElementCheck) {
      selectForms.push(arr[0].inputName);
      selectInput(selectForms);
    } else {
      const index = selectForms.indexOf(inputName);
      selectForms.splice(index, 1);
      selectInput(selectForms);
    }
>>>>>>> refactoring task4redux
  };

  checkInputRender = (value: string, inputForms: string[]): boolean => {
    return inputForms.includes(value);
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
            checked={this.checkInputRender(selectName, stateSelectForms)}
          />
        </label>
      </div>
    );
  }
};

const mapStateToProps = ({selectForms}: State) => {
  return {
    selectForms,
  };
};

export default connect(mapStateToProps, actions)(Select);