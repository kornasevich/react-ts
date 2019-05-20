import React, { Component } from 'react';

import './index.css';

interface Props {
  selectItems: any;
  inputSelect: any;
}

export default class SelectItems extends Component<Props> {
  render() {
    const {
      selectItems,
    } = this.props;

    const lengthArray = selectItems.length;

    const style = {
      display: lengthArray ? 'block' : 'none',
    };
    return (
      <nav style={style} className="menu">
        <ul>
          <li><a href="#">Выберите</a>
            <ul>
              {selectItems}
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}
