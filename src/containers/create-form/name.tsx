import React, {Component, ChangeEvent} from 'react';
import * as actions from '../actions/actions';

import './index.css';
import {connect} from 'react-redux';

interface Props {
  changeName: (arg: string) => void;
}

interface State {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

class Name extends Component<Props> {
  changeFormName = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
    const { changeName } = this.props;
    changeName(value);
  };


  render() {
    return (
      <div className="form-name_input">
        <label>
          Введите название формы:
          <input
            className="create-name-form"
            placeholder="Введите название формы"
            onChange={this.changeFormName}
          />
        </label>
      </div>
    );
  }
}

const mapStateToProps = ({formName}: State) => {
  return {
    formName,
  };
};

export default connect(mapStateToProps, actions)(Name);