import { SET_ACCOUNT_USER } from "../types/type"

const setAccountUser = (data)=>{
    return {
        type: SET_ACCOUNT_USER,
        payload: data,
    };
}

export {setAccountUser}