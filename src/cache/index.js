function CACHE() {
  let catchDic = {}
  return function (key, value = null) {
    if (catchDic[key] && !value) {
      return [true, catchDic[key]]
    }
    if (key === 'clearCache') {
      catchDic = null
      catchDic = {}
    } else {
      if (value) {

        catchDic[key] = value
      }
    }
    return [false, catchDic[key]]
  }
}
export default {
  instance: CACHE(),
  //注册插件
  install(Vue) {
    Vue.prototype.CACHE = this.instance;
  }
}