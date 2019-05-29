import React, { Component } from 'react';

import './index.css';

interface Props {
  label: string;
}

export default class Items extends Component<Props> {
  render() {
    const { label } = this.props;
    return (
      <div className="input-form-created">
        <div>{label}</div>
        <input type="text"/>
      </div>
    );
  }
};