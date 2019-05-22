import React, {Component} from 'react';
import './index.css';

import Name from './name';
import Items from './items';
import {checkbox, select} from './constans';
import Select from './select';
import Form from '../form';

interface IStringArray {
  values: string[];
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: IStringArray[];
}


interface Props {
  inputName: string;
  checkboxElementCheck: boolean;
}

export default class CreateForm extends Component<Props, State> {

  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

  changeName = (value: string) => {
    this.setState({
      formName: value,
    });
  };


  changeCheckbox = (value: Props): void => {
    const copyState = {...this.state};
    const {checkboxElementCheck, inputName} = value;
    if (checkboxElementCheck) {
      copyState.inputForms.push(inputName as never);
      this.setState({...copyState});
    } else {
      const index = copyState.inputForms.indexOf(inputName as never);
      copyState.inputForms.splice(index, 1);
      this.setState({...copyState});
    }
  };

  selectCheckbox = (value: Props): void => {
    const copyState = {...this.state};
    const {checkboxElementCheck, inputName} = value;
    if (checkboxElementCheck) {
      copyState.selectForms.push(inputName as never);
      this.setState({...copyState});
    } else {
      const index = copyState.selectForms.indexOf(inputName as never);
      copyState.selectForms.splice(index, 1);
      this.setState({...copyState});
    }
  };

  formItems = () => {
    return checkbox.map((item: string, index: number) => {
      return (
        <Items
          key={index}
          checkboxName={item}
          stateInputForms={this.state.inputForms}
          changeCheckbox={this.changeCheckbox}
        />
      );
    });
  };

  selectItems = () => (
    <div className="dropdown">
      <button className="mainmenubtn">Menu</button>
      {select.map((item: string, index: number) => (
        <Select
          key={index}
          selectName={item}
          stateSelectForms={this.state.selectForms}
          selectCheckbox={this.selectCheckbox}
        />
      ))}
    </div>
  );

  componentWillUpdate({}, nextState: State) {
    localStorage.setItem('build-form', JSON.stringify(nextState));
  }

  componentWillMount() {
    const localStorageObj = JSON.parse(localStorage.getItem('build-form') || 'null');
    if (localStorage.getItem('build-form')) {
      this.setState({...localStorageObj});
    }
  }

  render() {
    return (
      <div className="create-form">
        <div className="form">
          <div className="form-name">
            <Name
              changeName={this.changeName}
            />
          </div>
          <div className="form-input">
            {this.formItems()}
            <div className="select-menu">

              {this.selectItems()}

            </div>
          </div>
        </div>
        <Form
          allState={this.state}
        />
      </div>
    );
  }
}