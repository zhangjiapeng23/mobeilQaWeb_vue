import axios from 'axios';


export function request(config) {
    const instance = axios.create({
        url: 'http://127.0.0.1',
        timeout: 5000
    })

    instance.interceptors.request.use(config => {
        return config;
    }, err => {
        console.log(err)
    })

    instance.interceptors.response.use(res => {
        return res;
    }, err => {
        console.log(err)
    })

    return instance(config);
}