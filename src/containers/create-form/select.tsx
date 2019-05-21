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
  key: number;
  selectName: string;
  selectInput: (value: any) => void;
}

class Select extends Component<Props> {

  selectCheckbox = ({currentTarget}: FormEvent<HTMLInputElement>) => {
    const checkBoxElement = currentTarget.childNodes[0].childNodes[1] as HTMLInputElement;
    const inputName = currentTarget.childNodes[0].textContent as string;
    const checkboxElementCheck = checkBoxElement.checked as boolean;
    const arr: IStringBooleanArray[] = [];
    arr.push({ inputName, checkboxElementCheck });
    this.props.selectInput(arr[0].inputName);
  };


  render() {
    const {selectName} = this.props;
    return (
      <div
        className="dropdown-childs"
        onChange={this.selectCheckbox}
      >
        <label>
          {selectName}
          <input type="checkbox"/>
        </label>
      </div>
    );
  }
};

const mapStateToProps = (state: State) => {
  return {
    inputForms: state.selectForms,
  };
};

export default connect(mapStateToProps, actions)(Select);