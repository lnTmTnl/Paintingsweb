import axios from 'axios'

export function request(config){
  const instance = axios.create({
    baseURL: 'https://www.fastmock.site/mock/722ee6dc9d60ebb199fff616e5993ccf/0',
    timeout: 5000
  })

  //拦截器
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    console.log(err);
  })
  instance.interceptors.response
  
  //发送网络请求
  return instance(config)
}

/*export function request(config){
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })
  
    instance(config)
    .then(res => {
      resolve(res)
    })
    .catch(err => {
      reject(err)
    })
  })
}*/

/*export function request(config, success, failure){
  const instance = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })

  instance(config)
  .then(res => {
    success(res)
  })
  .catch(err => {
    failure(err)
  })
}*/
