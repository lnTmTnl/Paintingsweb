import {request} from "./request"

export function getUsers(userId){
  return request({
    url: '/profile',
    params: {
      userId
    }
  })
}

export class User{
  constructor(userInfo){
    this.userId = userInfo.userId,
    this.userAvatar = userInfo.userAvatar,
    this.password = userInfo.password,
    this.userName = userInfo.userName,
    this.introduce = userInfo.introduce,
    this.paintings = userInfo.paintings
  }
}