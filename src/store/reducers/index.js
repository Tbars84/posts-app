import { combineReducers } from "redux"
import authReducer from './authReducers'

 
const reducers = combineReducers({
    auth: authReducer
});
  
export default reducers