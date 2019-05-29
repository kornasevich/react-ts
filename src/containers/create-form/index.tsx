import React, {Component} from 'react';
import './index.css';
import { connect } from 'react-redux';

import Name from './name';
import Items from './items';
import {checkbox, select} from './constans';
import Select from './select';
import Form from '../form';

interface State {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

interface Props {
  inputForms: string[];
  selectForms: string[];
}

class CreateForm extends Component<Props> {

  formItems = () => {
    const { inputForms } = this.props;
    return checkbox.map((item: string, index: number) => {
      return (
        <Items
          key={index}
          checkboxName={item}
          stateInputForms={inputForms}
        />
      );
    });
  }

  selectItems = () => {
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
              <div className="dropdown">
                <button className="mainmenubtn">Menu</button>
                {this.selectItems()}
              </div>
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