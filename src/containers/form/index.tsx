import React, {Component} from 'react';

import Items from './items';
import './index.css';
import {connect} from 'react-redux';

import Select from './select';

interface Props {
  formName: string;
  inputForms: string[];
  selectForms: string[];
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

class Form extends Component<Props> {
  elements = () => {
    const { inputForms } = this.props;
    return inputForms.map((item, index) => {
      return (
        <Items
          key={index}
          label={item}
        />
      );
    });
  }

  selects = () => {
    const { selectForms } = this.props;
    return selectForms.map((item, index) => {
      return (
        <Select
          key={index}
          selectName={item}
        />
      );
    });
  }

  selectMenu = () => (
    <div
      className="select-menu">
      <div className="dropdown">
        <button className="mainmenubtn">Menu</button>
        {this.selects()}
      </div>
    </div>
  );

  render() {
    const lengthArray = this.props.selectForms.length;
    const { formName } = this.props;

    const {formName} = this.props.allState;
    return (
      <div className="created-forms">
        <div className="created-form_name">
          {formName}
        </div>
        <div className="created-form_input">
          {this.elements()}
          {lengthArray ?  this.selectMenu() : null}
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({formName, selectForms, inputForms}: State) => {
  return {
    formName,
    inputForms,
    selectForms,
  };
};

export default connect(mapStateToProps)(Form);
