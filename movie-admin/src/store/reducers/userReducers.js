import { GET_INFO_USER, GET_LIST_USER, SET_ACCOUNT_USER, USER_ACCOUNT_KEY } from "../types/type";

let userAccount = localStorage.getItem(USER_ACCOUNT_KEY)

if(userAccount){
    userAccount = JSON.parse(userAccount)
}

const DEFAULT_STATE = {
    userAccount: userAccount,
    userListInfo: [],
    userTakeInfo: []
};

export const userReducer = (state = DEFAULT_STATE, {type, payload})=>{
    switch(type){
        case  SET_ACCOUNT_USER: {
            state.userAccount = payload;
            return {...state};
        }
        case GET_LIST_USER: {
            state.userListInfo = payload;
            return {...state};
        }
        case GET_INFO_USER: {
            state.userTakeInfo = payload;
            return {...state};
        }
        default:
            return state;
    }
};