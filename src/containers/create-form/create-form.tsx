import React, {Component} from 'react';

import './create-form.css';

export default class CreateForm extends Component<any> {
  public render() {
    return (
      <div className="form-builder">
        <div>
          <label className="create-name-form-label">
            Введите назавание формы:
            <input className="create-name-form" placeholder="Введите название формы"/>
          </label>
        </div>

        <h3>Выберите поля для формы:</h3>
        <div className="input-forms">
          <div className="input-block">
            <label>
              Фамилия
              <input className="input-form create-lastName-form" type="checkbox"/>
            </label>
          </div>

          <div className="input-block">
            <label>
              Имя
              <input className="input-form create-firstName-form" type="checkbox"/>
            </label>
          </div>

          <div className="input-block">
            <label>
              Отчество
              <input className="input-form create-thirdName-form" type="checkbox"/>
            </label>
          </div>

          <div className="input-block">
            <label>
              День рождения
              <input className="input-form create-thirdName-form" type="checkbox"/>
            </label>
          </div>

          <div className="input-block">
            <label>
              Пол
              <input className="input-form create-sex-form" type="checkbox"/>
            </label>
          </div>

          <div className="input-block">
            <label>
              E-mail
              <input className="input-form create-mail-form" type="checkbox"/>
            </label>
          </div>

          <div className="input-block">
            <label>
              Телефон
              <input className="input-form create-phone-form" type="checkbox"/>
            </label>
          </div>

          <div className="input-block">
            <label>
              Город
              <input className="input-form create-city-form" type="checkbox"/>
            </label>
          </div>

          <div className="input-block">
            <label>
              Адрес
              <input className="input-form create-address-form" type="checkbox"/>
            </label>
          </div>

          <div className="input-block">
            <label>
              Логин
              <input className="input-form create-login-form" type="checkbox"/>
            </label>
          </div>


          <nav className="menu">
             <ul>
             <li><a href="#">Выберите</a>
                <ul>
                  <li><div>
            <label>
              item 1
              <input className="input-form-menu create-login-form" type="checkbox"/>
            </label>
          </div></li>
                  <li><div>
            <label>
              item 2
              <input className="input-form-menu create-login-form" type="checkbox"/>
            </label>
          </div></li>
                  <li><div>
            <label>
              item 3
              <input className="input-form-menu create-login-form" type="checkbox"/>
            </label>
          </div></li>
                  <li>
                    <div>
            <label>
              item 4
              <input className="input-form-menu create-login-form" type="checkbox"/>
            </label>
          </div>
          </li>

          <li>
                    <div>
            <label>
              item 5
              <input className="input-form-menu create-login-form" type="checkbox"/>
            </label>
          </div>
          </li>



          <li>
                    <div>
            <label>
              item 6
              <input className="input-form-menu create-login-form" type="checkbox"/>
            </label>
          </div>
          </li>

          <li>
                    <div>
            <label>
              item 7
              <input className="input-form-menu create-login-form" type="checkbox"/>
            </label>
          </div>
          </li>

                </ul>
              </li>
            </ul>
          </nav>

          <div className="input-block">
            <label>
              Пароль
              <input className="input-form create-password-form" type="checkbox"/>
            </label>
          </div>
        </div>

        

        <a href="#" className="button" >Создать</a>

      </div>
    );
  }
}
