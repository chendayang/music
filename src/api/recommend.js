import jsonp from 'common/js/jsonp'
import {commonParams, options} from './config'
export function getRecommend () {
  const url = 'http://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    platform: 'h5',
    uin: 0,
    neddNewCode: 1
  })
  return jsonp(url, data, options)
}