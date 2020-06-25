import {combineReducers} from "redux";
import gymReducer from "./gymReducer";
import gymsReducer from "./gymsReducer";
import reviewReducer from "./reviewReducer";



export default combineReducers({gymsReducer, gymReducer,reviewReducer})