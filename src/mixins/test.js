import wepy from 'wepy'

const BASE_URL = 'https://youjie.hustonline.net/api/v1/'
export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap () {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
    Request (object, token) {
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
  }

  onShow() {
    console.log('mixin onShow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }
}
