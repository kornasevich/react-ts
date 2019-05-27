import React, {Component} from 'react';

import Items from './items';
import './index.css';
import {connect} from 'react-redux';
import * as actions from '../actions/actions';

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
    return this.props.inputForms.map((item, index) => {
      return (
        <Items
          key={index}
          label={item}
        />
      );
    });
  }

  selects = () => {
    return this.props.selectForms.map((item, index) => {
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

const mapStateToProps = (state: State) => {
  return {
    formName: state.formName,
    inputForms: state.inputForms,
    selectForms: state.selectForms,
  };
};

export default connect(mapStateToProps, actions)(Form);
