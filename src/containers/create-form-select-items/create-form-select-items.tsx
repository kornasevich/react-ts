import React, {Component} from 'react';

import './create-form-select-items.css';

export default class CreateFormSelectItems extends Component<any> {


  render() {
    const {selectLabel} = this.props;
    return (
      <li>
        <div>
          <label>
            {selectLabel}
            <input className="input-form-menu create-login-form" type="checkbox"/>
          </label>
        </div>
      </li>
    );
  }
};