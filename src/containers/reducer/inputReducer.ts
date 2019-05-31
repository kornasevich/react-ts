const initialState: string[] = [];


interface ActionType {
  type: string;
  payload: string[];
}

const buildForm = localStorage.getItem('build-form');

export const inputForms = (
  state = buildForm ? (JSON.parse(buildForm as string)).inputForms : initialState,
  action: ActionType) =>{
  switch (action.type) {
    case 'CHECK_INPUT':
      return [
        ...action.payload,
      ];
    default:
      return state;
  }
};