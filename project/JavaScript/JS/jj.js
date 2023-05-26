let date1 = 20220822
// 将date1的yyyyMMdd转换为yyyy-MM-dd
date1 = date1.toString().substring(0, 4) + '-' + date1.toString().substring(4, 6) + '-' + date1.toString().substring(6, 8)
console.log(date1)
