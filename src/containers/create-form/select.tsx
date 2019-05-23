import React, {Component, FormEvent} from 'react';

import './index.css';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

/*interface IStringBooleanArray {
  inputName: string;
  checkboxElementCheck: boolean;
}

interface IStringArray {
  values: string[];
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: IStringArray[];
}*/
interface IStringBooleanArray {
  inputName: string;
  checkboxElementCheck: boolean;
}


interface State {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

interface Props {
  selectName: string;
  selectInput: (value: any) => void;
  selectForms: string[];
}

class Select extends Component<Props> {

  selectCheckbox = ({currentTarget: {value, checked}}: FormEvent<HTMLInputElement>) => {
    const { selectInput, selectForms } = this.props;
    const inputName = value as string;
    const checkboxElementCheck = checked as boolean;
    const arr: IStringBooleanArray[] = [];
    arr.push({inputName, checkboxElementCheck});
    console.log(arr);
    if (checkboxElementCheck) {
      selectForms.push(arr[0].inputName);
      selectInput(selectForms);
    } else {
      const index = selectForms.indexOf(inputName);
      selectForms.splice(index, 1);
      selectInput(selectForms);
    }
  };


  render() {
    const {selectName} = this.props;
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
          />
        </label>
      </div>
    );
  }
};

const mapStateToProps = (state: State) => {
  return {
    selectForms: state.selectForms,
  };
};

export default connect(mapStateToProps, actions)(Select);