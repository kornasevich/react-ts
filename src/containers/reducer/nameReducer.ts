const initialState: string = '';


interface ActionType {
  type: string;
  payload: string;
}

const buildForm = localStorage.getItem('build-form');

export const formName = (
  state = buildForm ? (JSON.parse(buildForm as string)).formName : initialState ,
    action: ActionType) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return action.payload;

    default:
      return state;
  }
};
