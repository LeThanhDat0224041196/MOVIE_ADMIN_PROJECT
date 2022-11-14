import { SET_ACCOUNT_USER, USER_ACCOUNT_KEY } from "../types/type";

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
        default:
            return state;
    }
};