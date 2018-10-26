import axios from 'axios'
const baseUrl = 'http://gateway.fangkuaiyi.com/'
let filterUrl = (_url) => {
  if (_url && _url.startsWith('http')) {
    return _url;
  }
  return baseUrl + _url;
}


export default {
  get(_url, _params = {}) {
    let now = Date.now();
    _params = Object.assign(_params,{token:'',
    demandcartkey:'', 
    cartkey: '',
    provinceid: 20,
    province: 20,
    provincename: '广东',
    tradername: 'yw_app',
    trader: 'h5',
    closesignature: 'yes',
    signature_method: 'md5',
    signature: '****',
    siteid: 9,
    timestamp: now});
    return new Promise((resolve, reject) => {
      axios({
        url: filterUrl(_url),
        method: 'get',
        params: _params
      }).then((res) => {
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      })
    })
  },
  post(_url, _params = {}) {
    let now = Date.now();
    _params = Object.assign(_params,{token:'',
    demandcartkey:'', 
    cartkey: '',
    provinceid: 20,
    province: 20,
    provincename: '广东',
    tradername: 'yw_app',
    trader: 'h5',
    closesignature: 'yes',
    signature_method: 'md5',
    signature: '****',
    siteid: 9,
    timestamp: now,});
    return new Promise((resolve, reject) => {
      axios({
        url: filterUrl(_url),
        method: 'post',
        data: _params,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        transformRequest: [function (data) {
          let ret = ''
          for (let it in data) {
            ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
          }
          return ret
        }],
      }).then((res) => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}