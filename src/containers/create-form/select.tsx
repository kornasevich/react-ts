import React, {Component, FormEvent} from 'react';

import './index.css';
import {connect} from 'react-redux';
import { handleSelectInput } from '../actions/selectActions';

interface State {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

interface Props {
  selectName: string;
  selectInput: (value: string[]) => void;
  selectForms: string[];
  stateSelectForms: string[];
}

class Select extends Component<Props> {

  selectCheckbox = ({currentTarget: {value, checked}}: FormEvent<HTMLInputElement>) => {
    const {selectForms, selectInput} = this.props;
    const newInputForms = [...selectForms];
    if (checked) {
      newInputForms.push(value);
      selectInput(newInputForms);
    } else {
      const index = selectForms.indexOf(value);
      newInputForms.splice(index, 1);
      selectInput(newInputForms);
    }
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

const mapDispatchToProps = (dispatch: any) => {
  return {
    selectInput: (value: string[]) => dispatch(handleSelectInput(value)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Select);