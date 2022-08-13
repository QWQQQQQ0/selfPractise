const login = window.localStorage.getItem('login')
const id = window.localStorage.getItem('id')
const token = window.localStorage.getItem('token')


function queryStringify(obj) {
    let str = ''
    for (let k in obj) str += k + '=' + obj[k] + '&'
    return str.slice(0, -1)
}

testLogin()
function testLogin() {
    if(!login) {
        window.localStorage.setItem('url', 'self')
        window.location.href = './login.html'
        return
    }


    ajax({
        url: 'http://localhost:3007/my/userinfo',
        data: `id=${id}`,
        dataType: 'json',
        token: token,
        success: function(res) {
            if (res.code === 1){
                window.localStorage.setItem('url', 'self')
                window.localStorage.href = './login.html'
                return
            }
        }
    })
}
const form = document.querySelector('form')
const oldPwd = document.querySelector('.old')
const newPwd = document.querySelector('.new')
const cfmPwd = document.querySelector('.confirmNew')

form.addEventListener('submit', e => {
    e = e || window.event
    try {e.preventDefault()} catch (err) {e.returnValue = false}
    const info = {
        oldPwd: oldPwd.value,
        newPwd: newPwd.value,
        cfmPwd: cfmPwd.value
    }

    for (let key in info){
        if(!info[key]) return window.alert('请填写完整信息')
    }
    if (info.newPwd !== info.cfmPwd) return window.alert('两次密码不一致，请重新填写')

    ajax({
        url: 'http://127.0.0.1:3007/my/updatepwd',
        method: 'POST',
        dataType:'json',
        data: queryStringify(info),
        token: token,
        success: function(res) {
            window.localStorage.clear()
            window.alert('请重新登录')
            window.location.href = './login.html'
        }
    })
})