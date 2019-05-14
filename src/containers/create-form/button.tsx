import React, {Component} from 'react';

import './index.css';

interface Props {
  createForm: () => void;
}

export default class Button extends Component<Props> {
  render() {
    return (
      <a
        href="#"
        className="button"
        onClick={this.props.createForm}
      > Создать
      </a>
    );
  }
};