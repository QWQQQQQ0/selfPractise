//登录
const Form = document.querySelector('form')
const NameInp = Form.querySelector('#username')
const PasswordInp = Form.querySelector('#password')
const Errbox = Form.querySelector('.error')

Form.addEventListener('submit',e => {
    e = e || window.event
    try { e.preventDefault() } catch(err) {e.returnValue = false}


    const username = NameInp.value
    const password = PasswordInp.value


    
    //非空验证
    if(!username || !password) return window.alert("请填写用户名或密码")

    const Xhr = new XMLHttpRequest()
    Xhr.open('POST', 'http://127.0.0.1:3007/api/login')

    Xhr.onload = () => loginHandler(Xhr, username)

    Xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')

    Xhr.send(`username=${username}&password=${password}`)
})

function loginHandler (Xhr, username) {
    let res = JSON.parse(Xhr.responseText)

    if (res.code === 1) {
        Errbox.classList.add('active')
        return
    }
    window.localStorage.setItem('login', res.code)
    window.localStorage.setItem('id', res.user.id)
    window.localStorage.setItem('token', res.token)
    const url = window.localStorage.getItem('url')
    window.location.href = `./${url?url:'index'}.html`
    window.localStorage.removeItem('url')
    
}