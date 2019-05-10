import React, {Component} from 'react';
import './create-form-items.css';

export default class CreateFormItems extends Component<any> {
  state = {
    inputForms : {},
  };
  changeCheckbox = (event: any) => {
    const el = event.target.parentElement.innerText;
    const ch = event.target.checked;
    this.setState((state: any) => {
      state.inputForms[el] = ch;
      this.props.changeCheckbox(this.state.inputForms);
    });

  };
  render() {
    const { label } = this.props;
    return (
      <div className="input-block">
        <label>
          {label}
          <input onChange={this.changeCheckbox} className="input-form create-password-form" type="checkbox"/>
        </label>
      </div>
    );
  }
}