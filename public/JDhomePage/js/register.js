const Form = document.querySelector('form')
const NameInp = Form.querySelector('#username')
const PwdInp = Form.querySelector('#password')
const ConfirmInp = Form.querySelector('.confirm')
const errbox = Form.querySelector('span')

function queryStringify(obj) {
    let str = ''
    for (let k in obj) str += k + '=' + obj[k] + '&'
    return str.slice(0, -1)
}



Form.addEventListener('submit', e  => {
    
    e = e || window.event
    try {e.preventDefault() } catch (err) {e.returnValue = false}


    const Info = {
        username: NameInp.value,
        password: PwdInp.value,
        CfmPwd: ConfirmInp.value
    }
    
    for (let key in Info){
        if(!Info[key]) return alert('请完整填写信息')
    }
    
    if (Info.password !== Info.CfmPwd) return alert('两次密码填写不一致，请重新填写')
    delete Info.CfmPwd
    
    let data = queryStringify(Info)
    console.log(data)
    ajax({
        url: 'http://127.0.0.1:3007/api/reguser',
        method: 'POST',
        data: data,
        dataType: 'json',
        success: function(res){
            console.log(res)
            if (res.code === 1) {
                errbox.classList.add('active')
                return
            }
            window.alert('注册成功，点击跳转登录页')
            window.location.href = './login.html'
        },
        error:function(res) {
            console.log(res)
        } 
    })
})