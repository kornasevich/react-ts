import React, {Component} from 'react';

import './index.css';

interface Props {
  label: string;
}

export default class Items extends Component<Props> {
  render() {
    return (
      <div className="input-form-created">
        <div>{this.props.label}</div>
        <input type="text"/>
      </div>
    );
  }
};