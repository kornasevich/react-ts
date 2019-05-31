const initialState = {
  inputForms: [],
  formName: '',
  selectForms: [],
};


interface ActionType {
  type: string;
  payload: string | string[];
}

const buildForm = localStorage.getItem('build-form');

const reducer = (
  state = buildForm ? JSON.parse(buildForm as string) : initialState ,
  action: ActionType) => {
  switch (action.type) {
    case 'CHECK_INPUT':
      const arrayCheck = Array.isArray(action.payload) ? [...action.payload] : [action.payload];
      return {
        ...state,
        inputForms: arrayCheck,
      };

    case 'SELECT_INPUT':
      const arraySelect = Array.isArray(action.payload) ? [...action.payload] : [action.payload];
      return {
        ...state,
        selectForms: arraySelect,
      };

    case 'CHANGE_NAME':
      return {
        ...state,
        formName: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;