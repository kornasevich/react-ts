import React, {Component, FormEvent} from 'react';

import './index.css';

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

export default class Select extends Component<Props, State> {
  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

  selectCheckbox = ({currentTarget:{value, checked}}: FormEvent<HTMLInputElement>) => {
    const { selectCheckbox } = this.props;
    const checkboxElementCheck = checked as boolean;
    const checkboxElementName = value as string;
    selectCheckbox({
      inputName: checkboxElementName,
      inputCheck: checkboxElementCheck,
    });
  };


  checkInputRender = (value: string, inputForms: string[]): boolean => {
    return inputForms.filter((item: string) => item === value).length > 0;
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