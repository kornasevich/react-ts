import React, { Component } from 'react';

/*import Items from './items';*/
import './index.css';
/*import Select from './select';*/

/*interface Props {
  allState: {
    inputForms: IStringArray[];
    formName: string;
    selectForms: IStringArray[];
  };
}

interface IStringArray {
  values: string[];
}

<<<<<<< HEAD:src/form/index.tsx
export default class Form extends Component<Props> {
  elements = () => {
    const {inputForms} = this.props.allState;
    return inputForms.map((item: IStringArray, index: number) => {
=======
interface State {
  inputForms: IStringArray[];
  formName: string;
  selectForms: IStringArray[];
}*/

export default class Form extends Component {
/*  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  };

  componentWillReceiveProps(nextProps: Props) {
    this.setState({ ...nextProps.allState });
  }

  componentWillUpdate({}, nextState: State) {
    localStorage.setItem('build-form', JSON.stringify(nextState));
  }

  componentWillMount() {
    if (localStorage.getItem('build-form')) {
      this.setState((state: State): any => {
        return JSON.parse(localStorage.getItem('build-form') || 'null');
      });
    }
  }*/

 /* elements = () => {
    return this.state.inputForms.map((item, index) => {
>>>>>>> redux:src/containers/form/index.tsx
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
<<<<<<< HEAD:src/form/index.tsx
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
    const lengthArray = this.props.allState.selectForms.length;
=======
  }*/

  render() {
   /* const lengthArray = this.state.selectForms.length;

    const style = {
      display: lengthArray ? 'block' : 'none',
    };*/
>>>>>>> redux:src/containers/form/index.tsx

    const {formName} = this.props.allState;
    return (
      <div className="created-forms">
        <div className="created-form_name">
<<<<<<< HEAD:src/form/index.tsx
          {formName}
        </div>
        <div className="created-form_input">
          {this.elements()}
          {lengthArray ?  this.selectMenu() : null}
=======
          {/*{this.state.formName}*/}
        </div>
        <div className="created-form_input">
          {/*{this.elements()}*/}
          <div
            /*style={style}*/
            className="select-menu">
            <div className="dropdown">
              <button className="mainmenubtn">Menu</button>
              {/*{this.selects()}*/}
            </div>
          </div>
>>>>>>> redux:src/containers/form/index.tsx
        </div>
      </div>
    );
  }
}
