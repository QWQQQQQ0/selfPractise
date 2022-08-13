

const form = document.querySelector('form')
const nameInp = document.querySelector('.username')
const ageInp = document.querySelector('.age')
const nickInp = document.querySelector('.nickname')
const genderInp = document.querySelector('.gender')

const login = window.localStorage.getItem('login')
const id = window.localStorage.getItem('id')
const token = window.localStorage.getItem('token')

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
            nameInp.value = res.data.username
            ageInp.value = res.data.age
            nickInp.value = res.data.nickname

            genderInp.value = res.data.gender

        }
    })
}


form.addEventListener('submit', e => {
    
    e = e || window.event
    try {e.preventDefault()} catch(err) {e.returnValue = false}
    const nickname = nickInp.value
    const age = ageInp.value
    
    const gender = genderInp.value
    let data = ''
    data += `&username=${nameInp.value}`
    data += nickname? `&nickname=${nickname}`:''
    data +='&email='
    data += age? `&age=${age}`:''
    data += gender? `&gender=${gender}`:''
    
    ajax({
        url: 'http://localhost:3007/my/userinfo',
        method: 'POST',
        dataType: 'json',
        token: token,
        data: data,
        success: function(res) {
            console.log(data)
            if (res.code === 0) window.alert(res.message)
            else{
                console.log(res)
            }
        },
        error: function(res){
            console.log(res)
        }
    })
})
