/**     我依旧记得在我爷爷家隔街程孝老大爷的事情，老大爷岁数挺大的了，几年前有只猫头鹰在他家门口老叫唤。 **/
/*
 * @Author: tanhong
 * @Date: 2021-07-16 20:52:21
 * @LastEditTime: 2021-09-22 15:25:06
 * @LastEditors: tanhong
 * @FilePath: \blog\project\JavaScript\JS\js01.js
 */

// 毫秒数转换为时分秒
function MillisecondToDate(msd) {
  var time = parseFloat(msd) / 1000;
  if (null != time && '' != time) {
    if (time > 60 && time < 60 * 60) {
      time = parseInt(time / 60.0) + '分钟' + parseInt((parseFloat(time / 60.0) - parseInt(time / 60.0)) * 60) + '秒';
    } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
      time =
        parseInt(time / 3600.0) +
        '小时' +
        parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) +
        '分钟' +
        parseInt(
          (parseFloat((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60) -
            parseInt((parseFloat(time / 3600.0) - parseInt(time / 3600.0)) * 60)) *
            60
        ) +
        '秒';
    } else {
      time = parseInt(time) + '秒';
    }
  }
  return time;
}

// 时间单位换算
export function rTime(date, pattern) {
  if (!date) {
    return null;
  }
  return parseTime(new Date(date).getTime(), pattern);
}
// 日期格式化

export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = pattern || '{y}-{m}-{d} {h}:{i}:{s}';
  let date;
  if (typeof time === 'object') {
    date = time;
  } else {
    if (typeof time === 'string' && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    } else if (typeof time === 'string') {
      time = time.replace(new RegExp(/-/gm), '/');
    }
    if (typeof time === 'number' && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    // Note: getDay() returns 0 on Sunday
    if (key === 'a') {
      return ['日', '一', '二', '三', '四', '五', '六'][value];
    }
    if (result.length > 0 && value < 10) {
      value = '0' + value;
    }
    return value || 0;
  });
  return time_str;
}
