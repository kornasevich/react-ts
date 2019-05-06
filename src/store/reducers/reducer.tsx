const reducer = (
  state = {
    form: JSON.parse(localStorage.getItem('Tasks') as string) || [],
  },
    action: any) => {
  switch (action.type) {
    case 'CREATE_FORM':
      const newArr = [...state.form, action.payload];
      return {
        ...state,
        form: newArr,
      }

    default:
      return state;
  }
};

export default reducer;