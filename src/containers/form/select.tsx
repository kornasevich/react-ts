import React, { Component } from 'react';

import './index.css';

interface Props {
  selectName: IStringArray;
}

interface IStringArray {
  values: string[];
}

export default class Select extends Component/*<Props>*/ {
  render() {

   /* const { selectName } = this.props;*/
    return (
      <div
        className="dropdown-child"
      >
        <label>
         {/* {selectName}*/}
          <input type="checkbox"/>
        </label>
      </div>
    )
  }
}