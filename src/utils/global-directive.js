import Vue from 'vue';

Vue.directive('dialogDrag', {
  bind(el, binding, vnode, oldVnode) {
    let timeControl = 0
    let timer = false
    let cursorStyle
    let minWidth = 400;
    let minHeight = 300;
    let isFullScreen = false;
    let nowWidth = 0;
    let nowHight = 0;
    let nowMarginTop = 0;
    let selectedEl
    let resize
    const dialogHeaderEl = el.querySelector('.el-dialog__header');
    const dragDom = el.querySelector('.el-dialog');
    const wait = (time) => {
      return new Promise(resolve => {
        timeControl = setTimeout(() => {
          resolve(true)
        }, time);
      })
    }
    dragDom.style.overflow = "auto";
    const sty = dragDom.currentStyle || window.getComputedStyle(dragDom, null);
    let moveDown = async (e) => {
      document.onmouseup = function (e) {
        if (!timer) {
          clearTimeout(timeControl)
        } else {
          timer = false
          selectedEl.style.cursor = cursorStyle
        }
        document.onmousemove = null;
        document.onmouseup = null;
      };
      timer = await wait(binding.value ? binding.value.delay ? binding.value.delay : 300 : 300)
      cursorStyle = getComputedStyle(e.target).cursor
      selectedEl = e.target
      // e.target.style.cursor = 'move';
      const disX = e.clientX - dialogHeaderEl.offsetLeft;
      const disY = e.clientY - dialogHeaderEl.offsetTop;
      let styL, styT;
      if (sty.left.includes('%')) {
        styL = +document.body.clientWidth * (+sty.left.replace(/\%/g, '') / 100);
        styT = +document.body.clientHeight * (+sty.top.replace(/\%/g, '') / 100);
      } else {
        styL = +sty.left.replace(/\px/g, '');
        styT = +sty.top.replace(/\px/g, '');
      };
      document.onmousemove = function (e) {
        if (!timer) {
          return false
        }
        const l = e.clientX - disX;
        const t = e.clientY - disY;
        dragDom.style.left = `${l + styL}px`;
        dragDom.style.top = `${t + styT}px`;
      };
    }
    dialogHeaderEl.ondblclick = (e) => {
      if (isFullScreen == false) {
        nowHight = dragDom.clientHeight;
        nowWidth = dragDom.clientWidth;
        nowMarginTop = dragDom.style.marginTop;
        dragDom.style.left = 0;
        dragDom.style.top = 0;
        dragDom.style.height = "100VH";
        dragDom.style.width = "100VW";
        dragDom.style.marginTop = 0;
        isFullScreen = true;
        dialogHeaderEl.style.cursor = 'initial';
        dialogHeaderEl.onmousedown = null;
      } else {
        dragDom.style.height = "auto";
        dragDom.style.width = nowWidth + 'px';
        dragDom.style.marginTop = nowMarginTop;
        isFullScreen = false;
        // dialogHeaderEl.style.cursor = 'move';
        dialogHeaderEl.onmousedown = moveDown;
      }
    }
    dragDom.onmousemove = function (e) {
      let moveE = e;
      if (e.clientX > dragDom.offsetLeft + dragDom.clientWidth - 10 || dragDom.offsetLeft + 10 > e.clientX) {
        dragDom.style.cursor = 'w-resize';
        resize = true
      } else if (el.scrollTop + e.clientY > dragDom.offsetTop + dragDom.clientHeight - 10) {
        resize = true
        dragDom.style.cursor = 's-resize';
      } else {
        resize = false
        dragDom.style.cursor = 'default';
        dragDom.onmousedown = null;
      }
      dragDom.onmousedown = resize ? (e) => {
        const clientX = e.clientX;
        const clientY = e.clientY;
        let elW = dragDom.clientWidth;
        let elH = dragDom.clientHeight;
        let EloffsetLeft = dragDom.offsetLeft;
        let EloffsetTop = dragDom.offsetTop;
        dragDom.style.userSelect = 'none';
        let ELscrollTop = el.scrollTop;
        if (clientX > EloffsetLeft && clientX < EloffsetLeft + elW && clientY > EloffsetTop && clientY < EloffsetTop + 100) {
          console.log('fffff');
        } else {
          document.onmousemove = function (e) {
            e.preventDefault();
            if (clientX > EloffsetLeft && clientX < EloffsetLeft + 20) {
              if (clientX > e.clientX) {
                dragDom.style.width = elW + (clientX - e.clientX) * 2 + 'px';
              }
              if (clientX < e.clientX) {
                if (dragDom.clientWidth < minWidth) {
                } else {
                  dragDom.style.width = elW - (e.clientX - clientX) * 2 + 'px';
                }
              }
            }
            if (clientX > EloffsetLeft + elW - 10 && clientX < EloffsetLeft + elW) {
              if (clientX > e.clientX) {
                if (dragDom.clientWidth < minWidth) {
                } else {
                  dragDom.style.width = elW - (clientX - e.clientX) * 2 + 'px';
                }
              }
              if (clientX < e.clientX) {
                dragDom.style.width = elW + (e.clientX - clientX) * 2 + 'px';
              }
            }
            if (ELscrollTop + clientY > EloffsetTop + elH - 20 && ELscrollTop + clientY < EloffsetTop + elH) {
              if (clientY > e.clientY) {
                if (dragDom.clientHeight < minHeight) {
                } else {
                  dragDom.style.height = elH - (clientY - e.clientY) * 2 + 'px';
                }
              }
              if (clientY < e.clientY) {
                dragDom.style.height = elH + (e.clientY - clientY) * 2 + 'px';
              }
            }
          };
          document.onmouseup = function (e) {
            resize = false
            document.onmousemove = null;
            document.onmouseup = null;
          };
        }
      } : moveDown
    }
  }
})
Vue.directive('wheelModel', {
  bind(el, binding, vnode, oldVnode) {
    let key = binding.value.key
    let isPercent = { width: true }
    let options = binding.value.option
    el.onmousewheel = e => {
      e.preventDefault();
      if (e.deltaY > 0) {
        options[key] = isPercent[key] ? parseInt(options[key]) - 1 + '%' : parseInt(options[key]) - 1
      } else {
        options[key] = isPercent[key] ? parseInt(options[key]) + 1 + '%' : parseInt(options[key]) + 1
      }
    }
    console.log(el, binding);
  }
})