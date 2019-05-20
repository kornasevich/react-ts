import React, { ChangeEvent, Component } from 'react';
import './index.css';

interface State {
  inputForms: {
    [key: string]: boolean;
  };
  formName: string;
  selectForms: {
    [key: string]: boolean;
  };
}

interface Props {
  changeCheckbox: (arg: { [key: string]: boolean }) => void;
  label: string;
}

export default class Items extends Component<Props, State> {
  state =  {
    inputForms: {},
    formName: '',
    selectForms: {},
  };

  changeCheckbox = ({ currentTarget, target }: ChangeEvent<HTMLInputElement>) => {
    this.setState((state: State):any => {
      const stateCopy = Object.assign({}, state);
      stateCopy.inputForms[currentTarget.childNodes[0].textContent as string] = target.checked;
      this.props.changeCheckbox(stateCopy.inputForms);
      return {
        state: stateCopy,
      };
    });
  };

  render() {
    const { label } = this.props;
    return (
      <div
        className="input-block create-input-form"
        onChange={this.changeCheckbox}
      >
        <label>
          {label}
          <input
            className="input-form"
            type="checkbox"
          />
        </label>
      </div>
    );
  }
}
