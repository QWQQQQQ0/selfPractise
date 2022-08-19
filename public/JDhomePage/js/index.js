import goodsList from '../json/list.js'
import Sourse from '../json/sourse.js'
import RecommendList from '../json/recommend.js'
const Onbox = document.querySelector('.on')
const Offbox = document.querySelector('.off')
const nameBox = Onbox.querySelector('#username')
const token = window.localStorage.getItem('token')
const input = document.querySelector('#headPic')
const picImg = document.querySelector('label > img')
let time
let banner
console.log(goodsList, 'goodlist')
// 进入页面默认事件

// (function(){
//     const hotWord = ['京东家装节', '零食和好物']
//     const span = document.querySelector('#hot-words').firstElementChild
//     setInterval(() => {

//         span.innerText = span.innerText === hotWord[0]?hotWord[1] : hotWord[0]


//     },5000)
// })()



testLogin()
function testLogin() {
  const login = window.localStorage.getItem('login')
  if (login !== '0') {
    Offbox.classList.add('active')
    Onbox.classList.remove('active')
    return
  }

  const id = window.localStorage.getItem('id')
  const Xhr = new XMLHttpRequest()

  Xhr.open('GET', 'http://127.0.0.1:3007/my/index?id=' + id)
  Xhr.onload = () => testHandler(Xhr, id)
  Xhr.setRequestHeader('Authorization', token)

  Xhr.send()
}

async function testHandler(Xhr, id) {
  await new Promise((resolve, rejects) => {
    const res = JSON.parse(Xhr.responseText)
    if (res.code !== 1) {
      Offbox.classList.remove('active')
      Onbox.classList.add('active')
      nameBox.innerText = res.nickname
      picImg.src = `http://127.0.0.1:3007/${res.pic}`
      banner = res.banner
      resolve(banner)
    } else {
      window.localStorage.clear()
    }
  })
}






// 跳转页面
const CartBtn = document.querySelector('.cart')
const LogoutBtn = document.querySelector('.logout')
const SelfBtn = document.querySelector('.self')
const ListBtn = document.querySelector('.list')

CartBtn.onclick = () => {
  window.location.href = './cart.html'
}
ListBtn.onclick = () => {
  window.location.href = './list.html'
}
SelfBtn.onclick = () => {
  window.location.href = './self.html'
}
LogoutBtn.onclick = () => {
  window.localStorage.clear()
  window.location.reload()
}



// 修改头像

input.addEventListener('change', () => {

  const reader = new FileReader()
  reader.readAsDataURL(input.files[0], 'utf8')

  reader.onload = function () {
    picImg.src = reader.result
    const form = new FormData()
    const xhr = new XMLHttpRequest()
    xhr.open('POST', 'http://127.0.0.1:3007/my/updatePic')
    // xhr.open('POST', 'http://127.0.0.1:3007/api/cookie')
    xhr.onload = function () {
      console.log(xhr.responseText)
    }
    // form.append('pic', reader.result)
    form.append('pic', reader.result)
    // xhr.setRequestHeader('Content-type', 'multipart/form-data')
    // console.log(form.get('pic'))
    // xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded')
    xhr.setRequestHeader('Authorization', token)
    xhr.send(form)
  }
})

// 轮播图

class RotationMap {
  constructor(num) {
    this.bannerNum = num
    this.pointer = document.querySelector('.pointer')
    this.main = document.querySelector('.main')
    this.index = 0
    this.timer = 1

    this.init()
  }
  init() {

    this.setPoint()
    // this.change()
    this.click()
    this.main.querySelector('img').classList.add('active')
    this.pointer.querySelector('li').classList.add('active')
    this.autoPlay()
  }
  setPoint() {
    let picBox = ['https://img14.360buyimg.com/pop/s590x470_jfs/t1/207188/5/25011/73811/62fc430fEeac3aeee/92538e37ef89ce34.jpg.avif','https://imgcps.jd.com/img-cubic/creative_server_cid/v2/2000366/10048047908329/FocusFullshop/CkNqZnMvdDEvMTM1NjQ5LzIwLzI5NjA4LzEwOTc0LzYyZWFjYzNjRThhMzQxZWZmL2JmYThiZGFiYWM4NzY3NDkucG5nEgkzLXR5XzBfNTQwAjjui3pCEAoM5rW35bCU5Yaw566xEAFCEQoN56eS5p2A5Lu3MzU2OBACQhAKDOeri-WNs-aKoui0rRAGQgoKBuenjeiNiRAHWOmLzvK3pAI/cr/s/q.jpg',
                  'https://imgcps.jd.com/ling4/100032226552/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/p-5f3a47329785549f6bc7a6f6/dfc64d6c/cr/s/q.jpg', 'https://imgcps.jd.com/img-cubic/creative_server_cid/v2/2000367/7214578/FocusFullshop/CkNqZnMvdDEvMjIyMDMyLzIwLzE5ODY4Lzc0NDA1LzYyZjQwOGZmRTAyZTU1MjA1LzFkNDBkNWM0YTNjMmFjOTgucG5nEgk0LXR5XzBfNTUwAjjvi3pCFgoS6KW_6Zeo5a2Q5rSX56KX5py6EAFCEAoM6ZyH5pK85p2l5Li0EAJCEAoM56uL5Y2z5oqi6LStEAZCCgoG6LaF5YC8EAdY8qu4Aw/cr/s/q.jpg', 'https://img30.360buyimg.com/pop/s590x470_jfs/t1/201288/25/23710/64955/62f070fdE95cb4f47/22b916d938a43bb5.jpg.avif']
    for (let i = 0; i < this.bannerNum; i++) {
      let li = document.createElement('li')
      let bannerImg = document.createElement('img')
      li.dataset.point = i
      bannerImg.src = picBox[i]
      this.pointer.appendChild(li)
      this.main.appendChild(bannerImg)
    }
  }
  change(type) {
    const li = this.pointer.querySelectorAll('li')
    const img = this.main.querySelectorAll('img')
    li[this.index].classList.remove('active')
    img[this.index].classList.remove('active')
    if (type === 'right') {
      this.index++
      if (this.index >= this.bannerNum) this.index = 0
    }
    else if (type === 'left') {
      this.index--
      if (this.index < 0) this.index = 4
    } else {
      this.index = type
    }
    li[this.index].classList.add('active')
    img[this.index].classList.add('active')
  }
  click() {
    this.main.addEventListener('click', e => {
      e = e || window.event
      const target = e.target || e.srcElement
      if (target.className === 'leftBtn') {
        clearInterval(this.timer)
        this.change('left')
        this.autoPlay()
      }
      else if (target.className === 'rightBtn') {
        clearInterval(this.timer)
        this.change('right')
        this.autoPlay()
      }
      else if (target.dataset.point) {
        clearInterval(this.timer)
        this.change(target.dataset.point)
        this.autoPlay()
      }
    })
  }
  autoPlay() {

    this.timer = setInterval(() => {
      this.change('right')
    }, 2500);
  }
}
new RotationMap(5)

// 主轮播左侧列表
// const leftBox = `家用电器；手机，运营商，数码；电脑，办公；家居，家具，家装，厨具；男装，女装，童装，内衣；美妆，个户清洁，宠物；女鞋，箱包，钟表，珠宝；男鞋，运动，户外；房产，汽车，汽车用品；母婴，玩具乐器；食品，酒类，生鲜，特产；艺术，礼品鲜花，农资绿植；医药保健，计生情趣；图书，文娱，教育，电子书；机票，酒店，旅游，生活；理财，众筹，白条，保险；安装，维修，清洗，二手；工业品`
// let a = leftBox.split('；').reduce((acc, cur,index) => {
//     acc[index] = cur.split('，')
//     return acc
// }, [])
goods()
async function goods() {
  let categories = []
  let categoriesLink = []
  // const res = await pAjax({
  //   url: 'http://127.0.0.1:3007/api/goods/list',
  //   method: 'post',
  //   dataType: 'json'
  // })
  const res = {data: goodsList}
  console.log(goodsList, 'gggggggggggggggggggggggg',res)
  // const res = {data: goodsList}
  for (let i in res.data) {
    categories[i] = []
    categoriesLink[i] = []
    for (let k in res.data[i].s) {
      categories[i].push(res.data[i].s[k].n.match(/[\u4e00-\u9fa5]+/g).toString())
      categoriesLink[i].push(res.data[i].s[k].n.match(/[\s\S]*com(.*html)?/g).toString())
    }
    // console.log(res.data[i].s[0].n.match(/[\u4e00-\u9fa5]+/g).toString())
  }
  leftList(categories, categoriesLink)
  categoriesShow(res.data)

}

function leftList(value, link) {
  value.forEach((element, ind) => {
    let li = document.createElement("li")
    li.dataset.id = ind
    element.forEach((item, index) => {

      let a = document.createElement('a')
      let span = document.createElement("span")
      a.innerText = item
      a.target = '_blank'
      a.href = 'https://' + link[ind][index]
      span.innerText = '/'

      li.appendChild(a)
      li.appendChild(span)
      if (element.length - 1 === index) {
        span.remove()
      }
    })
    document.querySelector('.left').appendChild(li)
  });
}

// console.log(document.querySelector('ul.left'))

function categoriesShow(res) {
  let cateTime
  let outTime
  let id
  const categories = document.querySelector('#categories')

  document.querySelectorAll('ul.left > li').forEach(item => {
    item.onmouseover = function (e) {
      e = e || window.event
      let target = e.target || e.srcElement
      if (target.nodeName === 'A') {
        target = e.path[1]
      }
      if (target.nodeName === 'LI' || target.nodeName === 'A') {
        if (parseInt(target.dataset.id) === id) return
        id = parseInt(target.dataset.id)
        let mainTitle = res[id].t
        let rowFirst = res[id].s[0].s
        clearTimeout(cateTime)
        cateTime = setTimeout(() => {
          categories.innerHTML = `<ul class="itemCate" id="mainCate">
                    </ul>`
          let fragrant = document.createDocumentFragment()
          // let fra = document.createDocumentFragment()
          const mainCate = document.querySelector('#mainCate')
          document.querySelector('#categories').style.display = 'flex'
          document.querySelector('#categories').onmouseover = () => {
            clearTimeout(cateTime)
            clearTimeout(outTime)
          }
          for (let i in mainTitle) {
            let text = mainTitle[i].match(/\|.*\|/g)[0].replace(/\|/g, '')
            const li = document.createElement('li')
            const str = `<a>${text}</a>`
            li.innerHTML = str
            fragrant.appendChild(li)
          }
          mainCate.appendChild(fragrant)
          for (let k = 0; k < rowFirst.length; k++) {
            let ul = document.createElement('ul')
            ul.className = 'itemCate'
            let firstLi = document.createElement('li')
            firstLi.innerHTML = `<a>${rowFirst[k].n.match(/\|.*\|/g)[0].replace(/\|/g, '')}</a>`
            ul.appendChild(firstLi)
            // 每行其他分类
            let rowOther = rowFirst[k].s
            for (let j = 0; j < rowOther.length; j++) {
              let itemLi = document.createElement('li')
              itemLi.innerHTML = `<a>${rowOther[j].n.match(/\|.*\|/g)[0].replace(/\|/g, '')}</a>`
              ul.appendChild(itemLi)
            }
            categories.appendChild(ul)
          }
        }, 300)
      } else {
        return false
      }
    }
  })
  document.querySelector('div.container').onmouseleave = (e) => {

    outTime = setTimeout(() => {
      document.querySelector('#categories').style.display = 'none'
    }, 300)
  }
}





class NewRotationMap {
  constructor(mainBox) {

  }
  move(ele, target = Object, times, start, end) {
    const sty = window.getComputedStyle(ele)
    let current
    let time = times / 1000 * 60
    for (let k in target) {
      let fixDistance
      if (k === 'opacity') {
        current = sty[k] * 100
        fixDistance = (target[k] * 100 - current) / time
      } else {
        current = parseInt(sty[k])
        fixDistance = (target[k] - current) / time
      }
      const timer = setInterval(() => {
        current += fixDistance
        if (k === 'opacity') {
          ele.style[k] = current / 100
          if (parseFloat(sty[k]) === target[k]) {
            clearInterval(timer)
          }
        } else {
          ele.style[k] = current + 'px'
          if ((Math.abs((Math.abs(target[k]) - Math.abs(parseInt(sty[k]))))) < Math.abs(fixDistance)) {
            ele.style[k] = target[k] + 'px'
            if (start) {
              if (target[k] === end) {
                ele.style[k] = start + 'px'
              }
            }
            // if (end) {
            //     if (target[k] === start)
            //     ele.style[key] = end + 'px'
            // }

            clearInterval(timer)
          }
        }
      }, 1000 / 60)
    }
  }

}



// 秒杀倒计时
function dataFormat(dataStr) {

  const dt = new Date(dataStr)

  const y = padZero(dt.getFullYear())
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())
  const hour = padZero(dt.getHours())
  const min = padZero(dt.getMinutes())
  const s = padZero(dt.getSeconds())

  return { y, m, d, hour, min, s }
}

function padZero(n) {
  return n > 9 ? n : '0' + n
}

function secondKillCountDown() {
  const Countd = document.querySelector("#secondSkllL > p")
  const h = document.querySelector("#hour")
  const m = document.querySelector("#mintue")
  const s = document.querySelector("#second")
  const value = dataFormat(new Date().getTime())
  const time = () => {
    const nowTime = parseInt(value.hour)
    console.log(value)
    if (nowTime % 2 === 0) return nowTime
    return nowTime - 1
  }
  let count = {
    h: 1 - parseInt(value.hour) % 2,
    m: 59 - parseInt(value.min),
    s: 59 - parseInt(value.s)
  }
  h.innerText = count.h
  m.innerText = count.m
  Countd.innerText = time() + ': 00点场 距结束'
  let counttime = setInterval(() => {
    s.innerText = count.s < 10 ? '0' + count.s : count.s
    count.s--
    if (count.s === -1) {
      count.s = 59
      count.m--
      m.innerText = count.m < 10 ? '0' + count.m : count.m
      if (count.m === -1) {
        count.h--
        h.innerText = count.h
      }
    }
    if (count.h < 0) {
      clearInterval(counttime)
      secondKillCountDown()
    }
  }, 1000)
}

// 秒杀部分轮播图
let flag
document.querySelector('#SkillRotationMap').addEventListener('click', e => {
  if (flag === false) return false
  // console.log(flag)
  flag = false
  e = e || window.event
  const target = e.target || e.srcElement
  const ele = document.querySelector('#SkillBox')
  // console.log(ele.style.left)
  if (target.id === 'lBtn') {
    if (parseInt(window.getComputedStyle(ele).left) >= 0) {
      ele.style.left = -4000 + 'px'
    }

    new NewRotationMap().move(ele, { left: parseInt(window.getComputedStyle(ele).left) + 800 }, 400)
  }
  setTimeout(() => {
    flag = true
  }, 700)
  if (target.id === 'rBtn') {
    if (parseInt(window.getComputedStyle(ele).left) <= -4800) {
      ele.style.left = -800 + 'px'
    }
    new NewRotationMap().move(ele, { left: parseInt(window.getComputedStyle(ele).left) - 800 }, 400)
    setTimeout(() => {
      flag = true
    }, 700)
  }

})
// 
function sideKill() {
  let a = 1
  let b = 0
  let c
  setInterval(() => {
    document.querySelectorAll('.SkllsideR')[a].classList.add("active")
    document.querySelectorAll('.SkllsideR')[b].classList.remove("active")
    c = a
    a = b
    b = c

  }, 5000)
}



(function dayLowerPrice() {
  let box = {
    select: ['https://img14.360buyimg.com/seckillcms/s144x144_jfs/t1/187192/40/21832/202093/623ded7eEb70230fd/78730696142aa5c6.jpg!q70.jpg.webp',
      'https://img10.360buyimg.com/seckillcms/s144x144_jfs/t1/215387/31/14972/122318/62300440E99a97ae7/18e410dfe4f6ee5b.jpg!q70.jpg.webp',
      'https://img30.360buyimg.com/seckillcms/s144x144_jfs/t1/106101/40/25907/66071/6241c7e7Ecd83827d/8f96e7cb60e9f0c0.jpg!q70.jpg.webp',
      'https://img13.360buyimg.com/seckillcms/s144x144_jfs/t1/137150/24/24210/162415/62418be1E4d267a07/a0c8abfd939f7407.jpg!q70.jpg.webp',
      'https://img10.360buyimg.com/seckillcms/s144x144_jfs/t1/219895/11/11203/195311/61e6693fE32cc0157/d8c6ac9c9abcd3c8.jpg!q70.jpg.webp'],
    food: ['https://img11.360buyimg.com/seckillcms/s144x144_jfs/t1/166778/19/19756/107164/607d5657E2eaf49ec/04c336696b6e6ce9.jpg!q70.jpg.webp',
      'https://img12.360buyimg.com/seckillcms/s144x144_jfs/t1/214909/2/14441/207030/622aef5bE992a15a4/83e08d7a775b3213.jpg!q70.jpg.webp',
      'https://img13.360buyimg.com/seckillcms/s144x144_jfs/t1/137150/24/24210/162415/62418be1E4d267a07/a0c8abfd939f7407.jpg!q70.jpg.webp',
      'https://img10.360buyimg.com/seckillcms/s144x144_jfs/t1/219895/11/11203/195311/61e6693fE32cc0157/d8c6ac9c9abcd3c8.jpg!q70.jpg.webp',
      'https://img11.360buyimg.com/seckillcms/s144x144_jfs/t1/109289/11/26918/179998/6246771eE642bddf7/c032de8816d63892.jpg!q70.jpg.webp'],
    department:
      ['https://img13.360buyimg.com/seckillcms/s144x144_jfs/t1/148569/24/872/171160/5ee9ed32Ef8525f74/7d99c032f184769c.jpg!q70.jpg.webp',
        'https://img14.360buyimg.com/seckillcms/s144x144_jfs/t1/100491/22/16129/177068/5e774563E120c6535/2bfe87f184160e7d.jpg!q70.jpg.webp',
        'https://img20.360buyimg.com/seckillcms/s144x144_jfs/t1/170483/34/27942/240844/61bd8790E698a01d7/75272b812b85e997.jpg!q70.jpg.webp',
        'https://img12.360buyimg.com/seckillcms/s144x144_jfs/t1/207063/30/19428/201871/622df9f2E2db5eb06/8d2bf317e9f0a4e9.jpg!q70.jpg.webp',
        'https://img30.360buyimg.com/seckillcms/s144x144_jfs/t1/117062/25/20350/216547/6226fef8Ef7615cc6/1c716c3115c797b4.jpg!q70.jpg.webp']
  }

  const imgBox = document.querySelectorAll('#barginPricePic > a > img')
  const spanBox = Array.from(document.querySelectorAll('.barginAndFPuText > div > span')).slice(0, 3)

  spanBox.forEach((item, index) => {
    item.onmouseover = () => {
      for (let i = 0; i < imgBox.length; i++) {
        imgBox[i].src = box[spanBox[index].id][i]
      }
    }
  })

})()


// 发现好物轮播图
function foundGoodsMap() {
  const mainBox = document.querySelector('#foundRoMap')
  const element = document.querySelector('#foundBox')
  const point = document.querySelector('#scollPoint')
  let left = parseInt(window.getComputedStyle(element).left)
  let clock = 0
  let distance = left
  const movePap = function () {
    if (document.body.onmousemove !== null) return
    time = setInterval(() => {
      element.style.left = distance + 'px'
      point.style.left = 860 / 1980 * (-distance) + 'px'
      distance -= 1
      if (distance <= -1980) {
        element.style.left = 0
        point.style.left = 0
        distance = 0
      }
    }, 16.67)
    mainBox.onmouseover = () => clearInterval(time)
    point.onmousedown = (e) => {
      // 锁
      // console.log(clock)
      const pointLeft = parseInt(window.getComputedStyle(point).left)
      document.body.onmousemove = (eve) => {
        clock = -1
        clearInterval(time)
        let moveDis = eve.clientX - e.clientX + pointLeft
        point.style.left = moveDis + 'px'
        element.style.left = -1980 / 860 * moveDis + 'px'
        distance = -1980 / 860 * moveDis
        if (moveDis < 0) {
          point.style.left = 0
          element.style.left = 0
          distance = 0
        } else if (moveDis > 860) {
          point.style.left = 860 + 'px'
          element.style.left = -1980 + 'px'
          distance = 0
        }
      }
    }
    document.onmouseup = (e) => {
      document.body.onmousemove = null
      clock++
      if (clock != 0) return false
      console.log(clock)
      movePap()
    }
  }

  return { movePap, mainBox }
}
const m = foundGoodsMap()

m.mainBox.onmouseout = function () {

  m.movePap()
}


// 新品首发轮播图
let proTime // 计时器全局变量
function newProduct() {
  const item = document.querySelectorAll('#coreMapBox > a')
  const mainBox = document.querySelector('#coreMapBox')
  let distance = -68.75
  let index = 1
  let end
  item[index].classList.add('Bigactive')
  function proRoMap() {
    proTime = setInterval(() => {
      if (end) {
        item[end].classList.remove('Bigactive')
        end = null
      }
      item[index].classList.remove('Bigactive')
      index++
      item[index].classList.add('Bigactive')
      distance -= 150
      new NewRotationMap().move(mainBox, { left: distance }, 400, -68.75, -668.75)
      if (distance === -668.75) {
        end = index
        distance = -68.75
        index = 1
        item[index].classList.add('Bigactive')
      }
    }, 5000)
  }
  return proRoMap
}
const pro = newProduct()
// 频道广场
function inputContent() {
  const channelItem = document.querySelector("#channelItem")
  const res = Sourse.name.channelSquare
  console.log(Sourse, 'sourse')
  let arr = randArr(res.h4.length)
  for (let i in arr) {
    let div = document.createElement('div')
    div.className = 'channelItem'
    let innerStr = `
              <h4>${res.h4[arr[i]]}<span>${res.span[arr[i]]}</span></h4>
              <img src="${res.img[arr[i]][0]}" alt="xx">
              <img src="${res.img[arr[i]][1]}" alt="xxxx">
          `
    div.innerHTML = innerStr
    channelItem.appendChild(div)
  // const xhr = new XMLHttpRequest()
//   xhr.open('get', 'http://127.0.0.1:3007/api/json/sourse.json')
//   xhr.onload = () => {
//     // console.log(JSON.parse(xhr.responseText)['京东'].sort((a, b) => {
//     //     return a.pcpPrice - b.pcpPrice
//     // }))
//     // const res = JSON.parse(xhr.responseText).name.channelSquare
//     // const res = Sourse.name.channelSquare
//     // let arr = randArr(res.h4.length)
//     // for (let i in arr) {
//     //   let div = document.createElement('div')
//     //   div.className = 'channelItem'
//     //   let innerStr = `
//     //             <h4>${res.h4[arr[i]]}<span>${res.span[arr[i]]}</span></h4>
//     //             <img src="${res.img[arr[i]][0]}" alt="xx">
//     //             <img src="${res.img[arr[i]][1]}" alt="xxxx">
//     //         `
//     //   div.innerHTML = innerStr
//     //   channelItem.appendChild(div)
//     }
//   }
//   xhr.send()
}}


// 打乱数组
function randArr(arr) {
  if (typeof arr === 'number') {
    let newArr = []
    for (let i = 0; i < arr; i++) {
      newArr.push(i)
    }
    for (let k = 0; k < newArr.length; k++) {
      let randNum = parseInt(Math.random() * newArr.length)
      let medi = newArr[k]
      newArr[k] = newArr[randNum]
      newArr[randNum] = medi
    }
    return newArr
  } else {
    for (let i = 0; i < arr.length; i++) {
      let randNum = parseInt(Math.random() * arr.length)
      let medi = arr[i]
      arr[i] = arr[randNum]
      arr[randNum] = medi
    }
    return arr
  }
}

// 处理刷新页面和更换页面
let mainCount = 2
document.addEventListener('visibilitychange', () => {
  console.log(document.visibilityState)
  if (document.visibilityState === 'hidden') {
    clearInterval(time)
    // clearInterval(proTime)
    mainCount--
    // console.log('maincountoff', mainCount)
  }
  if (document.visibilityState === 'visible' && mainCount === 0) {
    mainCount++
    m.movePap()
    // pro()        
    // console.log('maincounton', mainCount)
  }
})
console.log(document.querySelector('#logo').normalize)
// 滚动条事件
function seekScroll() {
  let recommend = document.querySelector('#recommendItem')
  const footer = document.querySelector('.footer')
  let flag = true
  let number = 0
  const stikySearch = document.querySelector('#fixHeader')
  // console.log(typeof recommend.offsetTop,typeof scrollY, typeof window.innerHeight)
  window.onscroll = function (e) {
    if (scrollY <= 700) {
      stikySearch.style.display = 'none'
    } else {
      stikySearch.style.display = 'flex'
    }
    if (scrollY + window.innerHeight >= footer.offsetTop - 800) {
      if (flag === false) return
      if (footer.offsetTop > 12000) return
      flag = false
      async function p() {
        // const res = await pAjax({
        //   url: 'http://127.0.0.1:3007/api/goods/list',
        //   method: 'post',
        //   dataType: 'json',
        //   data: queryStringify({ number: number })
        // })
        const res = RecommendList
        let scrollFra = document.createDocumentFragment()
        for (let i = 0; i < 20; i++) {
          const li = document.createElement('li')
          li.className = 'recommendItem'
          const innerStr = `
                    <a>
                        <img src="${res[i].image}" alt="${res[i].name}">
                        <p class="recommendItemIn"><span>自营</span>${res[i].name}</p>
                        <p class="recommendItemP"><span>¥</span>${res[i].pPrice}.00<span>券</span></p>
                    </a>
                    `
          li.dataset.skuId = res[i].skuId
          li.innerHTML = innerStr
          scrollFra.appendChild(li)
        }
        recommend.appendChild(scrollFra)

        console.log(res)
        number++
        flag = true
      }
      p()
    }
  }
}
seekScroll()


document.querySelector('#recommendItem').addEventListener('click', e => {
  e = e || window.event
  let target = e.target || e.srcElement
  while (!target.dataset.skuId) {
    target = target.parentElement
  }
  const a = document.createElement('a')
  a.href = `./list.html?skuId=${target.dataset.skuId}`
  a.target = '_blank'
  a.click()
  a.remove()

})



window.onload = function () {
  mainCount--
  m.movePap()
  pro()
  sideKill()
  // console.log('maincount', mainCount)
}
function init() {
  secondKillCountDown()
  inputContent()
}

init()

// window.onresize = function() {
//     console.log(window.innerHeight)
//     console.log(scrollY)
// }