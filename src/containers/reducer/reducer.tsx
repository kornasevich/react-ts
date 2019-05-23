const reducer = (
  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  }
  , action: any) => {
  switch (action.type) {
    case 'CHECK_INPUT':
      const newArrCheck = [...action.payload];
      return {
        ...state,
        inputForms: newArrCheck,
      };

    case 'SELECT_INPUT':
      const newArrSelect = [...action.payload];
      return {
        ...state,
        selectForms: newArrSelect,
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