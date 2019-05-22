import React, {Component, FormEvent} from 'react';

import './index.css';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

/*interface IStringBooleanArray {
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
}*/
interface IStringBooleanArray {
  inputName: string;
  checkboxElementCheck: boolean;
}


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