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

interface IStringBooleanArray {
  inputName: string;
  checkboxElementCheck: boolean;
}

export default class CreateForm extends Component<{}, State> {

  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

  changeName = (value: string) => {
    this.setState({
      ...this.state,
      formName: value,
    });
  };


  changeCheckbox = (value: IStringBooleanArray[]): void => {
    const copyState = {...this.state};
    if (value[0].checkboxElementCheck) {
      copyState.inputForms.push(value[0].inputName as never);
      this.setState({...copyState});
    } else {
      const index = copyState.inputForms.indexOf(value[0].inputName as never);
      const newArr = [...copyState.inputForms.slice(0, index), ...copyState.inputForms.slice(index + 1)];
      copyState.inputForms = [...newArr];
      this.setState({...copyState});
    }
  };

  selectCheckbox = (value: IStringBooleanArray[]): void => {
    const copyState = {...this.state};
    if (value[0].checkboxElementCheck) {
      copyState.selectForms.push(value[0].inputName as never);
      this.setState({...copyState});
    } else {
      const index = copyState.selectForms.indexOf(value[0].inputName as never);
      const newArr = [...copyState.selectForms.slice(0, index), ...copyState.selectForms.slice(index + 1)];
      copyState.selectForms = [...newArr];
      this.setState({...copyState});
    }
  };

  formItems = () => {
    return checkbox.map((item: string, index: number) => {
      return (
        <Items
          key={index}
          checkboxName={item}
          changeCheckbox={this.changeCheckbox}
        />
      );
    });
  };

  selectItems = () => {
    return select.map((item: string, index: number) => {
      return (
        <Select
          key={index}
          selectName={item}
          selectCheckbox={this.selectCheckbox}
        />
      );
    });
  };

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


  componentDidMount() {
    const checkboxes = document.querySelectorAll('.form-input_checkbox');
    const selectCheckboxes = document.querySelectorAll('.dropdown-childs');
    const lc = JSON.parse(localStorage.getItem('build-form') || 'null');
    if (!lc) {
      return;
    }

    lc.inputForms.forEach((item1: any) => {
      checkboxes.forEach((item2) => {
        if (item2.childNodes[0].textContent === item1) {
          (item2.childNodes[1].childNodes[0] as HTMLInputElement).checked = true;
        }
      });
    });

    lc.selectForms.forEach((item1: any) => {
      selectCheckboxes.forEach((item2: HTMLInputElement) => {
        if (item2.childNodes[0].textContent === item1) {
          (item2.childNodes[0].childNodes[1] as HTMLInputElement).checked = true;
        }
      });
    });
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
              <div className="dropdown">
                <button className="mainmenubtn">Menu</button>
                {this.selectItems()}
              </div>
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