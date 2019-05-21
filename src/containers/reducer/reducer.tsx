const reducer = (
  state = {
    inputForms: [],
    formName: '',
    selectForms: [],
  }
  , action: any) => {
  switch (action.type) {
    case 'CHECK_INPUT':
      const newArrCheck = [...state.inputForms, action.payload];
      return {
        ...state,
        inputForms: newArrCheck,
      };

    case 'SELECT_INPUT':
      const newArrSelect = [...state.selectForms, action.payload];
      return {
        ...state,
        selectForms: newArrSelect,
      };

    default:
      return state;
  }
};

export default reducer;