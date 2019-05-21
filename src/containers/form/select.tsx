import React, { Component } from 'react';

import './index.css';

<<<<<<< HEAD:src/form/select.tsx
interface Props {
  selectName: IStringArray;
}

interface IStringArray {
  values: string[];
}
=======
/*interface Props {
  selectName: string;
}*/
>>>>>>> redux:src/containers/form/select.tsx

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