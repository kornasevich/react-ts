import React, {Component} from 'react';
import SelectItems from './select';

import './index.css';

interface Props {
  createForm: {
    inputForms: {
      [key: string]: boolean;
    },
    formName: string,
    selectForms: {
      [key: string]: boolean;
    };
  };
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

export default class Form extends Component<Props, State> {
  state: State = {
    inputForms: {},
    formName: '',
    selectForms: {},
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState((state: State) => {
      return nextProps.createForm;
    });
  }

  render() {
    const elements = Object.entries(this.state.inputForms).map((item, index) => {
      if (item[1] === true) {
        return (
          <div
            key={index}
            className="form-input"
          >
            <div className="form-name-input">{item[0]}:</div>
            <input className="form-item-input"/>
          </div>
        );
      }
    });

    const inputElements = Object.entries(this.state.selectForms).map((item, index) => {
      if (item[1] === true) {
        return (
          <li key={index}>
            <div>
              <label>
                {item[0]}
                <input
                  className="input-form-menu create-login-form"
                  type="checkbox"
                />
              </label>
            </div>
          </li>
        );
      }
    });

    return (
      <div className="created-forms">
        <div className="form-name">{this.state.formName}</div>
        {elements}
        <div className="input-block">
         <SelectItems
           selectItems={inputElements}
         />
        </div>
      </div>
    );
  }
}
