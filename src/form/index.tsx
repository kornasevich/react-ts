import React, {Component} from 'react';

import Items from './items';
import './index.css';
import Select from './select';

interface Props {
  allState: {
    inputForms: IStringArray[];
    formName: string;
    selectForms: IStringArray[];
  };
}

interface IStringArray {
  values: string[];
}

export default class Form extends Component<Props> {
  elements = () => {
    const {inputForms} = this.props.allState;
    return inputForms.map((item: IStringArray, index: number) => {
      return (
        <Items
          key={index}
          label={item}
        />
      );
    });
  }

  selects = () => {
    const {selectForms} = this.props.allState;
    return selectForms.map((item: IStringArray, index: number) => {
      return (
        <Select
          key={index}
          selectName={item}
        />
      );
    });
  }

  render() {
    const lengthArray = this.props.allState.selectForms.length;

    const style = {
      display: lengthArray ? 'block' : 'none',
    };
    const { formName } = this.props.allState;
    return (
      <div className="created-forms">
        <div className="created-form_name">
          {formName}
        </div>
        <div className="created-form_input">
          {this.elements()}
          <div
            style={style}
            className="select-menu">
            <div className="dropdown">
              <button className="mainmenubtn">Menu</button>
              {this.selects()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
