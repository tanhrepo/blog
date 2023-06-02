// 获取过去第n天 随机时刻的时间戳，格式化为yyyy-MM-dd hh:mm:ss
// 用于模拟过去n天的数据
function getPastTime(n) {
    var d = new Date();
    d.setDate(d.getDate() - n);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var date = d.getDate();
    var hour = Math.floor(Math.random() * 24);
    var minute = Math.floor(Math.random() * 60);
    var second = Math.floor(Math.random() * 60);
    return year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
}


console.log(getPastTime(1));

// 获取过去n月的时间戳，格式化为yyyy-MM‘月’
function getPastMonth(n) {
    var d = new Date();
    d.setMonth(d.getMonth() - n);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    return year + "-" + month + "月";
}
