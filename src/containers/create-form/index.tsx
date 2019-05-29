import React, {Component} from 'react';
import './index.css';
import { connect } from 'react-redux';

import Name from './name';
import Items from './items';
<<<<<<< HEAD
import { checkbox, select, defaultSettings } from './constans';
=======
import {checkbox, select} from './constans';
>>>>>>> redux-build-form
import Select from './select';
import Form from '../form';

interface State {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

interface Props {
<<<<<<< HEAD
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

/*  changeName = (value: string) => {
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
  };*/

  formItems = () => {
    const {inputForms} = this.state;
=======
  inputForms: string[];
  selectForms: string[];
}

class CreateForm extends Component<Props> {

  formItems = () => {
    const { inputForms } = this.props;
>>>>>>> redux-build-form
    return checkbox.map((item: string, index: number) => {
      return (
        <Items
          key={index}
          checkboxName={item}
          stateInputForms={inputForms}
<<<<<<< HEAD
          changeCheckbox={this.changeCheckbox}
=======
>>>>>>> redux-build-form
        />
      );
    });
  }

  selectItems = () => {
<<<<<<< HEAD
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
=======
    const { selectForms } = this.props;
    return select.map((item: string, index: number) => {
      return (
        <Select
          key={index}
          selectName={item}
          stateSelectForms={selectForms}
        />
      );
    });
>>>>>>> redux-build-form
  }

  render() {
    return (
      <div className="create-form">
        <div className="form">
          <div className="form-name">
            <Name/>
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

const mapStateToProps = ({inputForms, selectForms} :State) => {
  return {
    inputForms,
    selectForms,
  };
};

export default connect(mapStateToProps)(CreateForm);