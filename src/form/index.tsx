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

interface State {
  inputForms: IStringArray[];
  formName: string;
  selectForms: IStringArray[];
}

export default class Form extends Component<Props, State> {
  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState({...nextProps.allState});
  }


  /*componentWillReceiveProps(nextProps: Props) {
    this.setState((state) => {
      return nextProps.createForm;
    });
  }*/

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
  elements = () => {
    return this.state.inputForms.map((item, index) => {
      return (
        <Items
          key={index}
          label={item}
        />
      )
    });
  };

  selects = () => {
    return this.state.selectForms.map((item, index) => {
      return (
        <Select
          key={index}
          selectName={item}
        />
      )
    });
  };



  render() {
    const lengthArray = this.state.selectForms.length;

    const style = {
      display: lengthArray ? 'block' : 'none',
    };

    return (
      <div className="created-forms">
        <div className="created-form_name">
          {this.state.formName}
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