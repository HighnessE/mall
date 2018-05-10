import axios from 'axios'
/**
 * axios配置默认地址以及处理默认返回值 
 * axios每次返回一个promise
 */
axios.defaults.baseURL = 'https://www.easy-mock.com/mock/5ae18618ebc6c061022b9ac9/example'
axios.interceptors.response.use((res)=>{
    return res.data.data
})
/**
 * fetch mockData form easy-mock
 */
export let getMockProject = () =>{
    return axios.get('/mock')
}
export let getMockList = () =>{
    return axios.get('/listArray')
}
export let getMockBanner = () =>{
    return axios.get('/banner')
}
export let getMockMilk = () =>{
    return axios.get('/milkList')
}
export let getMockFruit = () =>{
    return axios.get('/fruitList')
}