import { combineReducers } from 'redux';
import user_reducer from './user_reducer';
const rootReducer = combineReducers({ user_reducer });
export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
