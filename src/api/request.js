import axios from 'axios';
import nprogress from "nprogress";
import store from '@/store'
let requests = axios.create({
    baseURL : '/api',
    timeout: 5000,
});

requests.interceptors.request.use(config=>{
    nprogress.start();
    if (store.state.detail.uuid_token) {
        config.headers.uesTempId = store.state.detail.uuid_token;
    }
    if (store.state.user.token) {
        config.headers.token = store.state.user.token;
    }
    return config
})

requests.interceptors.response.use(res=>{
    nprogress.done();
    const { data } = res;
    if(data?.code === 200){
        return res.data
    }
    // alert(`${data.message}`)
},error=>{
    alert(`服务器响应数据失败:${error}`)
})

export default requests;
