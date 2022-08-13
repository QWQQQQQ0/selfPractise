
// 对象转换成查询字符串
function queryStringify(obj) {
    let str = ''
    for (let k in obj) str += k + '=' + obj[k] + '&'
    return str.slice(0, -1)
}

// 查询字符串解析成对象

function parseQueryString(s) {
    let obj = {}
    s.split('&').forEach(item => {
        let t = item.split('=')
        obj[t[0]] = t[1]
    })

    return obj
}

//ajax封装


// option = {} 表明传入的参数是个对象，如果没有的话内部语句会变成undefind.xxx会报错
function ajax(option = {}) {

    //1. 检验参数设置
if (!option.url){
    throw new Error('url为必填参数，未发现参数')
}
if (!(option.method === undefined ||/^(get|post)$/i.test(option.method)))
    throw new Error('目前只接受GET或者POST请求或不填写')

if (!(option.async === undefined ||/^(true|false)$/i.test(option.async)))
    throw new Error('async参数只接受布尔类型参数或不填写')

if (!(option.data === undefined || typeof option.data === 'string'))
    throw new Error('data参数只接受字符串类型参数或不填写')

if (!(option.token === undefined || typeof option.token === 'string'))
    throw new Error('token参数只接受字符串类型参数或不填写')

if (!(option.dataType === undefined || /^(string|json)$/i.test(option.dataType)))
    throw new Error('dataType只能传递string或json或不填写')

if (!(option.success === undefined || typeof option.success === 'function'))
    throw new Error('success需要传入函数类型参数或不填写')

if (!(option.error === undefined || typeof option.error === 'function'))
    throw new Error('error需要传入函数类型参数或不填写')
    //2. 设置代码默认值
const _default = {
    url: option.url,
    method: option.method || 'GET',
    async: typeof option.async === 'boolean'?option.async : true,
    data: option.data || '',
    token: option.token || '',
    // async: option.async ?? true, //判断条件为空用默认值，非空就用判断值
    dataType: option.dataType || 'string',
    success: option.success || function() {},
    error: option.error || function() {}
}



if (_default.method.toUpperCase() === 'GET' && _default.data){
    _default.url += '?' + _default.data
}

const Xhr = new XMLHttpRequest()
Xhr.open(_default.method, _default.url, _default.async)

Xhr.onload = function() {
    const result = _default.dataType.toLowerCase() === 'json'? JSON.parse(Xhr.responseText) : Xhr.response
    // 根据http状态码选择调用success函数或者error函数
    if (Xhr.status >=200 && Xhr.status <= 299){

        _default.success(result)
    }else {
        _default.error('url地址错误或服务器未开启')
    }
    
}
if (_default.token) Xhr.setRequestHeader('authorization', _default.token)

if (_default.method.toUpperCase() === 'POST') Xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

_default.method.toUpperCase() === 'POST' ? Xhr.send(_default.data) : Xhr.send()

}

function pAjax(options = {}) {
const p = new Promise( (resolve, rejects) => {
ajax({
    url: options.url,
    data: options.data,
    token: options.token,
    async: options.async,
    method: options.method,
    dataType: options.dataType,
    success: function (res) {
        resolve(res)
    }
})
})
return p
}

































// let a = ajax({
//     url:'http://127.0.0.1:9000/second?name=wsq&age=22',
//     dataType: 'json',
//     success: function(result) {
//         console.log(result)
//     },
//     error: function(err){
//         console.log(err)
//     }
// })


// const p = new Promise((resolve, reject) => {

//     fs.readFile('./03login.html','utf-8' ,(err, data) => {
//         resolve(data)
//     })

// })
// p.then(function(data) {
//     let result = data.match(/<meta name="viewport" content="width=device-width, initial-scale=1.0">/g)
//     const b = new Promise((resolve, resject) => {
//         let res = result[0].split('=')
//         resolve(res)
//         // console.log(res)
    
//     })
//     return b})
// .then((res) => {
//     console.log(res)
// })



