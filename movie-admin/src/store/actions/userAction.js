import { GET_INFO_USER, GET_LIST_USER, SET_ACCOUNT_USER } from "../types/type"

const setAccountUser = (data)=>{
    return {
        type: SET_ACCOUNT_USER,
        payload: data,
    };
}
// const getListUser = (data)=>{
//     return {
//         type: GET_LIST_USER,
//         payload: data,
//     }
// }
// const getInfoUser = ()=>{
//     return {
//         type: GET_INFO_USER,
//     }
// }
export {setAccountUser}