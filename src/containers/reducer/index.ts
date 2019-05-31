import { combineReducers } from 'redux';

import { inputForms } from './inputReducer';
import { formName } from './nameReducer';
import { selectForms } from './selectReducer';

export default combineReducers({
  inputForms,
  formName,
  selectForms
})