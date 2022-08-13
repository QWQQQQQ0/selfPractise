
console.log(location.search.slice(1))
async function goods() {
    const res = await pAjax({
        url: 'http://127.0.0.1:3007/api/goods/list',
        method: 'post',
        data: location.search.slice(1),
        dataType: 'json'
    })
    let str = `
        <div id="img">
            <img src="${res[0].image}" alt="xxx">
        </div>
        <div id="text">
            <p>${res[0].name}</p>
            <p>折扣${res[0].goodRate}</p>
            <p>${res[0].pPrice}元</p>
        </div>
    `
    document.querySelector('.content').innerHTML = str
    
    console.log(res)
    
}
goods()
