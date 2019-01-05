//====================================================|
// REDUCERS: APP


//--------------------------| Default state

const initialState = {
  screenType: ''
};

const localState = JSON.parse(localStorage.getItem('lt_state'));
const appReducerDefaultState = localState && localState.page ? localState.page : initialState;


//--------------------------| Export

export default (state = appReducerDefaultState, { type, payload }) => {
  switch (type) {
    default:
      return state;

    case 'CHANGE_SCREEN_TYPE':
      return {
        ...state,
        screenType: payload
      };
  }
};
