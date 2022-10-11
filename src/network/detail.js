import {request} from "./request"

export function getDetail(iid){
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export class Uploader{
  constructor(uploaderInfo){
    this.name = uploaderInfo.name,
    this.avatar = uploaderInfo.avatar,
    this.introduce = uploaderInfo.introduce
  }
}