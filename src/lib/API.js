import wepy from 'wepy'
const BASE_URL = 'https://youjie.hustonline.net/api/v1/'
export default function Request (object, token) {
  return new Promise((res, rej) => {
    object.url = BASE_URL + object.url
    object.success = (data) => {
      res(data)
    }
    object.fail = (err) => {
      rej(err)
    }
    object.header['Content-Type'] = 'application/x-www-form-urlencoded'
    if (token) {
      object.header['token'] = token
    }
    wx.request(object))
  })
}
