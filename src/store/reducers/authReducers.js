import { updateObj } from '../utility' 
import * as actionTypes from '../actions/types/actionTypes'
const initialState = {
    logProccess: null,
    user: {},
    errMsg: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOG_PENDING:
            return updateObj(state ,{ logProccess: false })
            break;
        case actionTypes.LOG_SUCCESS:
            return updateObj(state ,{ logProccess: true , user: action.user })
            break;
        case actionTypes.LOG_OUT:
            return updateObj(state ,{ logProccess: null , user: {} })
            break;
        case actionTypes.LOG_FAILED:
            return updateObj(state ,{ logProccess: null , errMsg: action.err })
            break;
        default:
            break;
    }
    return state
}
export default authReducer