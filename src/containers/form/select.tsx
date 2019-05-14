import React, {Component} from 'react';

import './index.css';

export default class SelectItems extends Component<any> {
  render() {
    const dis = this.props.selectItems.length;

    const style = {
      display: dis ? 'block' : 'none',
    };
    return (
      <nav style={style} className="menu">
        <ul>
          <li><a href="#">Выберите</a>
            <ul>
              {this.props.selectItems}
            </ul>
          </li>
        </ul>
      </nav>
    );
  }
}
