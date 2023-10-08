import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { loginReducer, registerReducer, logoutReducer } from "@/redux/reducers/authReducer";
import { authCheckReducer } from '@/redux/reducers/userReducer';

const reducer = combineReducers({
  user: loginReducer,
  userRegister: registerReducer,
  userLogout: logoutReducer,
  authCheck: authCheckReducer,
});

let initialState = {};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
