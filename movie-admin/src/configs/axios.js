import axios from "axios";
import { USER_INFO_KEY, TOKEN_CYBERSOFT, BASE_URL} from "../constants/common,js";


export const request = axios.create({
    baseURL: BASE_URL,
    headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
    }
})

request.interceptors.request.use((config)=>{
    let userInfo = localStorage.getItem(USER_INFO_KEY);
    if(userInfo){
        userInfo = JSON.parse(userInfo);
        config.headers.Authorization = `Bearer ${userInfo.accessToken}`
    }
    return config
})

request.interceptors.response.use((response)=>{
    return response
})
