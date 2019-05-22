import React, {ChangeEvent, Component} from 'react';

import './index.css';

interface Props {
  changeName: (arg: string) => void;
}

export default class Name extends Component<Props> {
  changeFormName = ({ target:{ value } }: ChangeEvent<HTMLInputElement>) =>{
    const { changeName } = this.props;
    changeName(value);
  };

  render() {
    return (
      <div className="form-name_input">
        <label>
          Введите название формы:
          <input
            className="create-name-form"
            placeholder="Введите название формы"
            onChange={this.changeFormName}
          />
        </label>
      </div>
    );
  }
}