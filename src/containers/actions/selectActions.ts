export const selectInput = (payload: string[]) => {
  return {type: 'SELECT_INPUT', payload};
};

export const handleSelectInput =  (payload: string[]) => (dispatch: any) =>
  dispatch(selectInput(payload));