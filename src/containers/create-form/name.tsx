import React, {Component, ChangeEvent} from 'react';
import {changeName} from '../actions/actions';

import './index.css';
import {connect} from 'react-redux';

interface Props {
  changeName: (arg: string) => void;
}

interface MapStateToProps {
  inputForms: string[];
  formName: string;
  selectForms: string[];
}

class Name extends Component<Props> {

  changeFormName = ({target: {value}}: ChangeEvent<HTMLInputElement>) => {
    const {changeName} = this.props;
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

const mapStateToProps = ({formName}: MapStateToProps) => {
  return {
    formName,
  };
};

export default connect(mapStateToProps, {changeName})(Name);