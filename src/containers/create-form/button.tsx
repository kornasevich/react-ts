import React, {Component} from 'react';

import './index.css';

interface Props {
  createForm: () => void;
}

export default class Button extends Component<Props> {
  render() {
    const {
      createForm,
    } = this.props;
    return (
      <a
        href="#"
        className="button"
        onClick={createForm}
      >
        Создать
      </a>
    );
  }
};