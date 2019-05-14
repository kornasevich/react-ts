import React, {Component} from 'react';

import './index.css';

interface Props {
  changeName: (arg: string) => void  ;
}

export default class Name extends Component<Props> {
  changeName = (event: any) => {
    this.props.changeName(event.target.value);
  };

  render() {
    return (
      <div className="create-name-form-label">
        <label>
          Введите назавание формы:
          <input
            className="create-name-form"
            placeholder="Введите название формы"
            onChange={this.changeName}
          />
        </label>
      </div>
    );
  }
}