import React, { Component } from 'react';
import './index.css';

import Name from './name';
import Items from './items';
<<<<<<< HEAD:src/create-form/index.tsx
import { checkbox, select, defaultSettings } from './constans';
=======
import { checkbox, select } from './constans';
>>>>>>> redux:src/containers/create-form/index.tsx
import Select from './select';
import Form from '../form';

/*interface IStringArray {
  values: string[];
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: IStringArray[];
}

<<<<<<< HEAD:src/create-form/index.tsx
interface Props {
  inputName: string;
  inputCheck: boolean;
}

export default class CreateForm extends Component<Props, State> {

  constructor(props: Props) {
    super(props);
    const buildForm = localStorage.getItem('build-form') as string;
    const savedSettings = buildForm ? JSON.parse(buildForm) : {};
    this.state = {
      ...defaultSettings,
      ...savedSettings,
    }
  }
=======
/!*interface IStringBooleanArray {
  inputName: string;
  checkboxElementCheck: boolean;
}*!/*/

export default class CreateForm extends Component {
>>>>>>> redux:src/containers/create-form/index.tsx

/*  changeName = (value: string) => {
    this.setState({
      formName: value,
    });
  };

<<<<<<< HEAD:src/create-form/index.tsx

  changeCheckbox = ({inputCheck, inputName}: Props): void => {
    const copyInputForms = [...this.state.inputForms];
    if (inputCheck) {
      copyInputForms.push(inputName as never);
      this.setState({
        inputForms: copyInputForms
      });
=======
  changeCheckbox = (value: IStringBooleanArray[]): void => {
    const copyState = {...this.state};
    if (value[0].checkboxElementCheck) {
      copyState.inputForms.push(value[0].inputName as never);
      this.setState({...copyState});
>>>>>>> redux:src/containers/create-form/index.tsx
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
  };*/

  formItems = () => {
    const {inputForms} = this.state;
    return checkbox.map((item: string, index: number) => {
      return (
        <Items
          key={index}
          checkboxName={item}
<<<<<<< HEAD:src/create-form/index.tsx
          stateInputForms={inputForms}
          changeCheckbox={this.changeCheckbox}
=======
          /*changeCheckbox={this.changeCheckbox}*/
>>>>>>> redux:src/containers/create-form/index.tsx
        />
      );
    });
  }

  selectItems = () => {
<<<<<<< HEAD:src/create-form/index.tsx
    const {selectForms} = this.state;
    return (
      <div className="dropdown">
        <button className="mainmenubtn">Menu</button>
        {select.map((item: string, index: number) => (
          <Select
            key={index}
            selectName={item}
            stateSelectForms={selectForms}
            selectCheckbox={this.selectCheckbox}
          />
        ))}
      </div>
    );
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    localStorage.setItem('build-form', JSON.stringify(this.state));
  }
=======
    return select.map((item: string, index: number) => {
      return (
        <Select
          key={index}
          selectName={item}
          /*selectCheckbox={this.selectCheckbox}*/
        />
      );
    });
  }

/*  componentWillUpdate({}, nextState: State) {
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
  }*/
>>>>>>> redux:src/containers/create-form/index.tsx

  render() {
    return (
      <div className="create-form">
        <div className="form">
          <div className="form-name">
            <Name
              /*changeName={this.changeName}*/
            />
          </div>
          <div className="form-input">
            {this.formItems()}
            <div className="select-menu">

              {this.selectItems()}

            </div>
          </div>
        </div>
        <Form/>
      </div>
    );
  }
}
