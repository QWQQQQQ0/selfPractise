


testLogin()
function testLogin() {
    const login = window.localStorage.getItem('login')
    // console.log(login)
    if (login !== '0') {
        window.localStorage.setItem('url', 'cart')
        window.location.href = './login.html'
    }
}

const Token = window.localStorage.getItem('token')

console.log(Token)
const Xhr = new XMLHttpRequest()

Xhr.open('GET', 'http://127.0.0.1:3007/my/cart')

Xhr.onload = function() {
    const Res = JSON.parse(Xhr.responseText)
    const h = Xhr.getAllResponseHeaders()
    console.log(h)
    console.log(Res)
    if (Res.code !== '0') {
        window.localStorage.setItem('url', 'cart')
        window.location.href = './login.html'
        return
    }
}

Xhr.setRequestHeader('Authorization', Token)

Xhr.send()