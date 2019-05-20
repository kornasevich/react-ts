import React, {Component, FormEvent} from 'react';

import './index.css';

interface Props {
  selectName: string;
  changeSelect: (arg: {
    [key: string]: boolean;
  }) => void;
}

interface State {
  inputForms: {
    [key: string]: boolean;
  };
  formName: string;
  selectForms: {
    [key: string]: boolean;
  };
}

export default class Select extends Component<Props, State> {
  state = {
    inputForms: {},
    formName: '',
    selectForms: {},
  };

  changeSelect = ({currentTarget}: FormEvent<HTMLLabelElement>): void => {
    this.setState((state: State): any => {
      const stateCopy = Object.assign({}, state);
      const check = currentTarget.childNodes[1] as HTMLInputElement;
      const name = currentTarget.textContent as string;
      stateCopy.selectForms[name] = check.checked;
      this.props.changeSelect(stateCopy.selectForms);
      return {
        ...stateCopy,
      };
    });
  };

  render() {
    const {selectName} = this.props;
    return (
      <div
        className="dropdown-child"
      >
        <label
          onChange={this.changeSelect}
        >
          {selectName}
          <input type="checkbox"/>
        </label>
      </div>
    );
  }
};