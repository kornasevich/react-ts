import React, {Component} from 'react';

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
  selectLabel: string;
  changeSelect: (arg: {[key: string]: boolean}) => void;
}

export default class SelectItems extends Component<Props> {
  state: State = {
    inputForms: {},
    formName: '',
    selectForms: {},
  };

  changeSelect = (event: any) => {
    const el = event.target.parentElement.innerText;
    const ch = event.target.checked;
    this.setState((state: State) => {
      const stateCopy = Object.assign({}, state);
      stateCopy.selectForms[el] = ch;
      this.props.changeSelect(stateCopy.selectForms);
      return {
        state: stateCopy,
      };
    });
  };

  render() {
    const { selectLabel } = this.props;
    return (
      <li>
        <div>
          <label>
            {selectLabel}
            <input
              className="input-form-menu create-login-form"
              type="checkbox"
              onChange={this.changeSelect}
            />
          </label>
        </div>
      </li>
    );
  }
};