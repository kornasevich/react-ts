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
  state =  {
    inputForms: {},
    formName: '',
    selectForms: {},
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState((state) => {
      return nextProps.createForm;
    });
  }

  componentWillUpdate({}, nextState: State) {
    localStorage.setItem('build-form', JSON.stringify(nextState));
  }

  componentWillMount() {
    if (localStorage.getItem('build-form')) {
      this.setState((state: State): any => {
        return JSON.parse(localStorage.getItem('build-form') || 'null');
      });
    }
  }

  render() {
    const elements = Object.entries(this.state.inputForms).map((item, index) => {
      if (item[1]) {
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
      return null    ///для того ,чтобы ошибки не было
    });

    const inputElements = Object.entries(this.state.selectForms).map((item, index) => {
      if (item[1]) {
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
      return null; ///для того ,чтобы ошибки не было
    });

    return (
      <div className="created-forms">
        <div className="form-name">{this.state.formName}</div>
        {elements}
        <div className="input-block">
          <SelectItems
            selectItems={inputElements}
            inputSelect={this.state.selectForms}
          />
        </div>
      </div>
    );
  }
}
