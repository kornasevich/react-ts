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
  inputCheck: boolean;
}

export default class CreateForm extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    if (localStorage.getItem('build-form')) {
      this.state = JSON.parse(localStorage.getItem('build-form') || 'null');
    }
  }

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


  changeCheckbox = ({inputCheck, inputName}: Props): void => {
    const copyInputForms = [...this.state.inputForms];
    if (inputCheck) {
      copyInputForms.push(inputName as never);
      this.setState({
        inputForms: copyInputForms
      });
    } else {
      const index = copyInputForms.indexOf(inputName as never);
      copyInputForms.splice(index, 1);
      this.setState({
        inputForms: copyInputForms
      });
    }
  };

  selectCheckbox = ({inputCheck, inputName}: Props): void => {
    const copySelectForms = [...this.state.selectForms];
    if (inputCheck) {
      copySelectForms.push(inputName as never);
      this.setState({
        selectForms: copySelectForms
      });
    } else {
      const index = copySelectForms.indexOf(inputName as never);
      copySelectForms.splice(index, 1);
      this.setState({
        selectForms: copySelectForms
      });
    }
  };

  formItems = () => {
    const { inputForms } = this.state;
    return checkbox.map((item: string, index: number) => {
      return (
        <Items
          key={index}
          checkboxName={item}
          stateInputForms={inputForms}
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

  shouldComponentUpdate(nextProps: Props, nextState: State) {
    localStorage.setItem('build-form', JSON.stringify(nextState));
    return true;
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