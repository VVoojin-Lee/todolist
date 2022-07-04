import { SET_LOGIN_USER, SET_LOGOUT_USER } from '../_actions/user_action';
interface UserAction {
  type: string;
  payload: any;
}
const initialState = {
  loginUser: null,
};

export default function user_reducer(state = initialState, action: UserAction) {
  switch (action.type) {
    case SET_LOGIN_USER:
      return { ...state, loginUser: action.payload };
    case SET_LOGOUT_USER:
      return { ...state, loginUser: action.payload };
    default:
      return state;
  }
}
