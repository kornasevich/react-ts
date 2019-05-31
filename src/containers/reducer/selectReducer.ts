const initialState: string[] = [];


interface ActionType {
  type: string;
  payload: string[];
}

const buildForm = localStorage.getItem('build-form');

export const selectForms = (
  state = buildForm ? (JSON.parse(buildForm as string)).selectForms : initialState ,
    action: ActionType) => {
  switch (action.type) {
    case 'SELECT_INPUT':
      return [
        ...action.payload
      ];

    default:
      return state;
  }
};