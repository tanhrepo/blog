/*
 * @Author: tanhong
 * @Date: 2021-08-31 11:36:10
 * @LastEditTime: 2021-09-22 10:21:54
 * @LastEditors: tanhong
 * @FilePath: \blog\project\Node\node01.js
 */
console.log("hello,world!");

const a = [1,1,1,1,1,1,1,1,2,2,0,0,0,0,0,0,0];
let b = [];
for (let i in a) {
  if (a[i] === 2) {
    b.push(i)
    console.log(b);
  }
}

