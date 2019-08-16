import {
    GET_WELCOME_FETCHING, GET_WELCOME_SUCCESS, GET_WELCOME_FAILURE
} from '../actions'; 

const initialState = {
    message: "", 
    fetchingWelcome: false, 
    fetchingWelcomeError: "", 
}; 

const apiRunningReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_WELCOME_FETCHING:
            return {
                ...state, 
                fetchingWelcome: true,
                fetchingWelcomeError: ''
            };
        case GET_WELCOME_SUCCESS:
            return {
                ...state,
                fetchingWelcome:false,
                fetchingWelcomeError: ''
            };
        case GET_WELCOME_FAILURE:
            return {
                ...state, 
                fetchingWelcome: false,
                fetchingWelcomeError: action.payload
            }
        default:
            return state; 
        
        
    }
}

export default apiRunningReducer; 