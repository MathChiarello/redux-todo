import { combineReducers } from 'redux';

type ActionType = {
  type: string;
  email: string;
}

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case 'ADD_EMAIL':
      return {
        ...state,
        email: action.email,
      };
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  reducer
})

export default rootReducer;
