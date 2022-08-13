/**
 * @param {string} url
 * @returns {Object}
 */
function param2Obj(url) {
  const search = decodeURIComponent(url.split('?')[1]).replace(/\+/g, ' ')
  if (!search) {
    return {}
  }
  const obj = {}
  const searchArr = search.split('&')
  searchArr.forEach(v => {
    const index = v.indexOf('=')
    if (index !== -1) {
      const name = v.substring(0, index)
      const val = v.substring(index + 1, v.length)
      obj[name] = val
    }
  })
  return obj
}

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
function deepClone(source) {
  if (!source && typeof source !== 'object') {
    throw new Error('error arguments', 'deepClone')
  }
  const targetObj = source.constructor === Array ? [] : {}
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === 'object') {
      targetObj[keys] = deepClone(source[keys])
    } else {
      targetObj[keys] = source[keys]
    }
  })
  return targetObj
}
function randArr (arr) {
  if (typeof arr === 'number') {
      let newArr = []
      for (let i = 0; i < arr; i++){
          newArr.push(i)
      }
      for (let k = 0; k < newArr.length; k++) {
          let randNum = parseInt(Math.random() * newArr.length)
          let medi = newArr[k]
          newArr[k] = newArr[randNum]
          newArr[randNum] = medi
      }
      return newArr
  }else {
      for (let i = 0; i < arr.length; i++) {
          let randNum = parseInt(Math.random() * arr.length)
          let medi = arr[i]
          arr[i] = arr[randNum]
          arr[randNum] = medi
      }
      return arr
  }
}
module.exports = {
  param2Obj,
  deepClone,
  randArr
}
