import React, {Component, FormEvent} from 'react';

import './index.css';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

/*interface IStringBooleanArray {
  inputName: string;
  inputCheck: boolean;
}

<<<<<<< HEAD:src/create-form/select.tsx
interface Props {
  selectCheckbox: (value: IStringBooleanArray) => void;
  selectName: string;
  stateSelectForms: string[];
}

=======
>>>>>>> redux:src/containers/create-form/select.tsx
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


<<<<<<< HEAD:src/create-form/select.tsx
export default class Select extends Component<Props, State> {
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
  };


  checkInputRender = (value: string, inputForms: string[]): boolean => {
    return inputForms.includes(value);
  };

=======
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


>>>>>>> redux:src/containers/create-form/select.tsx
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

const mapStateToProps = (state: State) => {
  return {
    inputForms: state.selectForms,
  };
};

export default connect(mapStateToProps, actions)(Select);