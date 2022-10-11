import {request} from './request.js'

export function getHomeMultidata(){
  return request({
    url: '/home'
  })
}

export function getHomeGoods(type, page){
  return request({
    url: '/home',
    pramas: {
      page,
      type
    }
  })
}