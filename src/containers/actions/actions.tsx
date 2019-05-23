export const checkInput = (payload: any) => {
  return {type: 'CHECK_INPUT', payload};
};

export const selectInput = (payload: any) => {
  return {type: 'SELECT_INPUT', payload};
};

export const changeName = (payload: string) => {
  return {type: 'CHANGE_NAME', payload};
};