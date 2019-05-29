export const checkInput = (payload: string[]) => {
  return {type: 'CHECK_INPUT', payload};
};

export const selectInput = (payload: string[]) => {
  return {type: 'SELECT_INPUT', payload};
};

export const changeName = (payload: string) => {
  return {type: 'CHANGE_NAME', payload};
};