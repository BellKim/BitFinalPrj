//login check

import axios from 'axios'
// import router from '../router'
import router from 'vue-router'


//domain info 
const DOMAIN = 'http://localhost:8080'
const UNAUTHORIZED = 401
const onUnauthorized = () => {
    router.push(`/login?rPath=${encodeURIComponent(location.pathname)}`)
}

const request = (method, url, data) => {
    return axios({
        method, 
        url:DOMAIN + url,
        data
    }).then(result =>{  console.log(result.data)
                        result.data})
    .catch(result => {
        const {status} = result.response
        if(status === UNAUTHORIZED) onUnauthorized()
        throw result.response
    })
}


export const setAuthInHeader = token =>{ //토큰값을 router 로 전달해주는 역할을 한다.
    // 토큰정보를 받아서 엑시오스 라이브리 안에다 추가할건데
    // 모든리퀘스트를 날리기 전에 해더값을 토큰정보로 설정하는 역할을 한다. 

    axios.defaults.headers.common['Authorization'] = token ? `${token}` : null;
}

const {token} = localStorage
if (token) setAuthInHeader(token)


export const board = {
    fetch(){
        return request('get', '/boards')
    }
}

export const auth = {
    login(id, password){
        return request('post', '/login', {id, password})
    }
}