export const checkInput = (payload: string[]) => {
  return {type: 'CHECK_INPUT', payload};
};

export const handleCheckInput = (payload: string[]) => (dispatch: any) =>
  dispatch(checkInput(payload));