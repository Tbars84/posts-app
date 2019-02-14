import { combineReducers } from "redux"
import authReducer from "./authReducer"
import { firebaseReducer } from 'react-redux-firebase'
import dataReducer from "./dataReducer"
const rootReducer = combineReducers({
  auth: authReducer,
  firebase: firebaseReducer,
  data: dataReducer
});

export default rootReducer


