import axios from 'axios';
import nprogress from "nprogress";

let requests = axios.create({
    baseURL : '/api',
    timeout: 5000,
});

requests.interceptors.request.use(config=>{
    nprogress.start();
    return config
})

requests.interceptors.response.use(res=>{
    nprogress.done();
    return res.data
},error=>{
    alert(`服务器响应数据失败:${error}`)
})

export default requests;