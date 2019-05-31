export const changeName = (payload: string) => {
  return {type: 'CHANGE_NAME', payload};
};

export const handleChangeName =  (payload: string) => (dispatch: any) =>
  dispatch(changeName(payload));