const globalUtils = {
  // 将多选框字符串转为为数组,编辑显示
  ReversalDynCols(data, imageUrl) {
    Object.keys(data).forEach(function (key) {
      if (key.startsWith('checkbox') || key.startsWith('multipleSelect')) {
        if (null !== data[key] && data[key] !== '') {
          let tempArray = data[key].split(',');
          if (tempArray instanceof Array) {
            data[key] = tempArray;
          }
        } else {
          data[key] = [];
        }
      } else if (key.startsWith('imageUpload')) {
        if (null !== data[key] && data[key] !== '' && data[key] !== undefined) {
          let array = data[key].split(',');
          if (array.length > 0) {
            for (let i = 0, n = array.length; i < n; i++) {
              array[i] = imageUrl + "/" + array[i];
            }
            data[key] = array;
          }
        }
      } else if (key.startsWith('fileUpload')) {
        if (null !== data[key] && data[key] !== '' && data[key] !== undefined) {
          let array = data[key].split(',');
          if (array.length > 0) {
            data[key] = array;
          }
        }
      } else if (key.startsWith('switch')) {
        if (null !== data[key] && data[key] !== '' && data[key] !== undefined) {
          data[key] = data[key] === "0";
        }
      }
    });
  },
  // 将多选框数组形式转化为字符串形式提交,新增显示
  formatDynCols(data, imageUrl) {
    Object.keys(data).forEach(function (key) {
      if (key.startsWith('checkbox') || key.startsWith('multipleSelect')) {
        let str = "";
        if (data[key] instanceof Array && data[key].length > 0) {
          for (let i = 0, n = data[key].length; i < n; i++) {
            str += data[key][i] + ",";
          }
          //去掉最后一个逗号(如果不需要去掉,就不用写)
          if (str.length > 0) {
            str = str.substr(0, str.length - 1);
          }
        }
        data[key] = str;
      } else if (key.startsWith('imageUpload')) {
        if (null !== data[key] && data[key] !== '' && data[key] !== undefined && data[key] instanceof Array) {
          let str = "";
          for (let i = 0, n = data[key].length; i < n; i++) {
            str += data[key][i].split(imageUrl + "/")[1] + ",";
          }
          //去掉最后一个逗号(如果不需要去掉,就不用写)
          if (str.length > 0) {
            str = str.substr(0, str.length - 1);
          }
          data[key] = str;
        }
      } else if (key.startsWith('fileUpload')) {
        if (null !== data[key] && data[key] !== '' && data[key] !== undefined && data[key] instanceof Array) {
          let str = "";
          for (let i = 0, n = data[key].length; i < n; i++) {
            str += data[key][i] + ",";
          }
          //去掉最后一个逗号(如果不需要去掉,就不用写)
          if (str.length > 0) {
            str = str.substr(0, str.length - 1);
          }
          data[key] = str;
        }
      } else if (key.startsWith('switch')) {
        if (null !== data[key] && data[key] !== '' && data[key] !== undefined) {
          if (data[key]) {
            data[key] = "0";
          } else {
            data[key] = "1";
          }
        }
      }
    });
  },
  //字符串转日期
  formatStrToDate(date) {
    var t = Date.parse(date);
    if (!isNaN(t)) {
      return new Date(Date.parse(date.replace(/-/g, "/")));
    } else {
      return new Date();
    }
  },
  //匹配网址
  isDomain(val) {
    // let regNeg = /((https|http|ftp|rtsp|mms):\/\/)?(([0-9a-z_!~*'().&=+$%-]+:)?[0-9a-z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\.){3}[0-9]{1,3}|([0-9a-z_!~*'()-]+\.)*([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\.[a-z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+\/?)/g;
    let regNeg = /((https|http|ftp|rtsp|mms):\/\/)?(([0-9a-zA-Z_!~*'().&=+$%-]+:)?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}\\.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+\\.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z]\\.[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)/g
      ;
    return regNeg.test(val);
  },
  //判断字符串是否为数字
  isNumber(val) {
    // 非负浮点数
    let regPos = /^\d+(\.\d+)?$/;
    // 负浮点数
    let regNeg = /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
    return regPos.test(val) || regNeg.test(val);
  },
  //判断是否未定义
  isUndefined(T) {
    var res = false;
    if (T === null || T === undefined) {
      res = true;
    }
    return res;
  },
  //判断是否为空
  isNull(T) {
    var res = false;
    if (this.isUndefined(T) || T === '' || null === T) {
      res = true;
    }
    return res;
  },
  //是否是无效的字符串
  isInvalidValue(T) {
    var res = false;
    if (T === undefined || T === 'null' || null === T || 'undefined' === T) {
      res = true;
    }
    return res;
  },
  //判断是正整数
  isInteger(T) {
    var r = /^\+?[1-9][0-9]*$/;
    return r.test(T);
  },
  isUrlPath(url) {
    var expression = /(http|https):\/\/\S*/;
    var objExp = new RegExp(expression);
    return objExp.test(url);
  },
  //日期格式化
  formatDate(date, fmt) {
    if (date === undefined || date === null) {
      return '----';
    }
    if (!(date instanceof Date)) {
      let tempDate = date;
      if (typeof date === "string") {
        tempDate = tempDate.replace(new RegExp(/-/gm), "/");
        tempDate = new Date(date);
        if (!(tempDate instanceof Date)) {
          tempDate = new Date(date);
        }
        date = tempDate;
      } else {
        date = new Date(date);
      }
    }
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (date.getFullYear().toString() + "").substr(4 - RegExp.$1.length));
    }
    if (/(E+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, ((RegExp.$1.length > 1) ? (RegExp.$1.length > 2 ? "星期" : "周") : "") + week[date.getDay().toString() + ""]);
    }
    for (var k in o) {
      if (new RegExp("(" + k + ")").test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k].toString()) : (("00" + o[k].toString()).substr(("" + o[k].toString()).length)));
      }
    }
    return fmt;
  },
  //   before 3 //今天向前3个月  after //今天向后2个月
  getNewDate(flag, many) {
    const thirtyDays = [4, 6, 9, 11] // 30天的月份
    const thirtyOneDays = [1, 3, 5, 7, 8, 10, 12] // 31天的月份
    const currDate = new Date() // 今天日期
    const year = currDate.getFullYear()
    let month = currDate.getMonth() + 1
    let targetDateMilli = 0
    let GMTDate = '' // 中国标准时间
    let targetYear = '' // 年
    let targetMonth = '' // 月
    let targetDate = '' // 日
    let dealTargetDays = '' // 目标日期
    const isLeapYear = !!((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) // 是否是闰年
    // console.log(isLeapYear, "isLeapYear");
    let countDays = 0 // 累计天数
    for (let i = 0; i < many; i++) {
      if (flag === 'before') {
        month = month - 1 <= 0 ? 12 : month - 1
      } else {
        month = month + 1 > 12 ? 1 : month + 1
      }
      thirtyDays.includes(month) ?
        (countDays += 30) :
        thirtyOneDays.includes(month) ?
          (countDays += 31) :
          isLeapYear ?
            (countDays += 29) :
            (countDays += 28)
    }
    targetDateMilli = currDate.setDate(
      currDate.getDate() - (flag === 'before' ? countDays : countDays * -1)
    )
    GMTDate = new Date(targetDateMilli)
    targetYear = GMTDate.getFullYear()
    targetMonth = GMTDate.getMonth() + 1
    targetDate = GMTDate.getDate()
    targetMonth = targetMonth.toString().padStart(2, '0')
    targetDate = targetDate.toString().padStart(2, '0')
    dealTargetDays = `${targetYear}-${targetMonth}-${targetDate}`
    return dealTargetDays
  },
  //日期格式化适配火狐浏览器
  formatDateToAdjustHuoHu(date, fmt) {
    if (date === undefined) {
      return date;
    }
    if (!(date instanceof Date)) {
      // 解决火狐显示日期显示 NaN 的问题
      date = "2001-" + date + ":00";
      date = date.replace(/-/g, ':').replace(' ', ':');
      date = date.split(':');
      date = new Date(date[0], (date[1] - 1), date[2], date[3], date[4], date[5]);
    }
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },
  //日期格式化适配IE浏览器
  formatDateToAdjustIE(date, fmt) {
    if (date === '' || date === undefined || date === 'NaN-aN-aN aN:aN:aN') {
      return null;
    }
    if (!(date instanceof Date)) {
      // 解决火狐/IE显示日期显示 NaN 的问题
      // date = new Date(date);
      // date = "2001-" + date + ":00"
      date = date + ":00";
      date = date.replace(/-/g, ':').replace(' ', ':');
      date = date.split(':');
      date = new Date(date[0], (date[1] - 1), date[2], date[3], date[4], date[5]);
    }
    var o = {
      "M+": date.getMonth() + 1, //月份
      "d+": date.getDate(), //日
      "h+": date.getHours(), //小时
      "m+": date.getMinutes(), //分
      "s+": date.getSeconds(), //秒
      "q+": Math.floor((date.getMonth() + 3) / 3), //季度
      "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
  },
  //对比时间
  isSameDate(date1, date2, fmt) {
    let d1 = this.formatDate(date1, fmt);
    let d2 = this.formatDate(date2, fmt);
    return d1 === d2;
  },
  //判断校验8到16位数字与密码组合的密码
  isValidPwd(T) {
    //let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/;
    let reg = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[/`~!@#$%^&*()\-+_=\\|[\]{};:'",<.>/? ]).{6,}$/;
    return reg.test(T);
  },
  //判断是否为电话号码
  isTel(T) {
    let reg = /^0\d{2,3}-?\d{7,8}$/;
    return reg.test(T);
  },
  //判断是否为手机号码
  isMobile(T) {
    // let reg = /^1[3|5|8][0-9]\d{4,8}$/;
    let reg = /^1([34578])\d{9}$/;
    return reg.test(T);
  },
  //判断是否为邮箱
  isEmail(T) {
    let reg = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return reg.test(T);
  },
  //拷贝对象
  clone(T) {
    var newObj = {};
    if (val instanceof Date) { //拷贝Date对象会造成栈溢出
      newObj = val;
    } else {
      if (T instanceof Array) {
        newObj = [];
      }
      for (var key in T) {
        var val = T[key];
        if (null == val) {
          newObj[key] = "";
        } else {
          newObj[key] = typeof val === 'object' ? this.clone(val) : val;
        }
      }
    }
    return newObj;
  },
  //清空对象
  clearData(T, boolean) {
    for (let key in T) {
      if (T[key] instanceof Object) {
        T[key] = {};
      } else if (T[key] instanceof Array) {
        T[key] = [];
      } else if (T[key] instanceof Boolean) {
        T[key] = boolean;
      } else {
        T[key] = '';
      }
    }
  },
  //性别转换
  formatSex(row, column) {
    return row.sex === '0' ? '男' : '女';
  },
  //标准数字格式化 fix 保留小数 pre 保留位数 flag 是否启用科学计数法
  formatterNum(value, fix, pre, flag) {
    if (value !== undefined && String.trim(value) !== "") {
      value = Number(value);
      value = value.toFixed(fix);
      if (pre) {
        if (!flag) {
          if (value > 1 && value < 1000) {
            value = Number(value).toPrecision(3);
          } else if (value >= 1000) {
            value = String(value);
            value = value.split(".")[0];
          }
        } else {
          value = Number(value).toPrecision(pre);
        }
      }
      return value;
    }
  },
  //随机生成32位的UUID
  generate32Uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 32; i++) {
      s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23];
    return s.join("");
  },

  //随机生成32位的UUID
  transformRequest(data) {
    let ret = ''
    for (let it in data) {
      if (data[it] != null) {
        ret += it + '=' + data[it] + '&';
      }
    }
    return ret.substring(0, ret.lastIndexOf('&'));
  },

  //判断JSON
  isJSON(str) {
    if (typeof str == 'string') {
      try {
        var obj = JSON.parse(str);
        if (typeof obj == 'object' && obj) {
          return true;
        } else {
          return false;
        }

      } catch (e) {
        return false;
      }
    }
  }
};


export default {
  instance: globalUtils,
  //注册插件
  install(Vue) {
    if (Vue.prototype.globalUtils) return;
    Vue.prototype.globalUtils = globalUtils;

    Vue.isNull = function (T) {
      return KHUtils.isNull(T);
    }
  }
}
