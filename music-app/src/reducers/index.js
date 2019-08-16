import { combineReducers } from "redux"; 
import getUsersReducer from './usersReducer';
import apiRunningReducer from './apiRunningReducer'; 


export default combineReducers({
    getUsersReducer, apiRunningReducer
}); 

