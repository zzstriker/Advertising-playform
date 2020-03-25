import * as axios from 'axios'

axios.defaults.baseURL = 'http://195.203.26.189:8081'
axios.defaults.timeout = 100000
axios.defaults.headers.post['Content-Type'] = 'application/json'

axios.interceptors.response.use((response) => {
    if (response.status >= 400 && response.status < 500) {
        window.location.href = decodeURI(`${window.location.protocol}`)
    } else {
        return response
    }
}, (error) => {
    // 后面增加错误页面提示
    console.log('axios rejected: ' + error)
})

const get = function (url, params = {}) {
    return axios.get(url, {
        params: { ...params },
        validateStatus: (status) => {
            return status >= 200 && status < 300
        }
    }).then(response => {
        return response.data
    }).catch(error => {
        // 后面增加页面报错提示
        console.log('axios Get method exception: ' + url + ', error: ' + error)
    })
}

const post = function (url, params = {}) {
    // 后面增加页面提示开始加载转框
    return axios.post(url, params)
        .then(response => {
            return response.data
        }).catch(error => {
            // 后面增加页面报错提示
            console.log('axios Post method exception: ' + url + ', error: ' + error)
        })
}


export const http = {
    get, post
};