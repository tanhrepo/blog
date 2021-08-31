/*
 * @Author: tanhong
 * @Date: 2021-08-23 17:15:46
 * @LastEditTime: 2021-08-23 17:31:30
 * @LastEditors: tanhong
 * @FilePath: \blog\project\JavaScript\算法\快速排序.js
 */
let arr = [31, 23, 34, 2, 13, 234];
function quicksort(arr) {
  //1、 找基准数，并且将比基准数小的全部放到左边(左数组)
  //大于等于基准数的全部放到右边(右数组)
  let base_num = arr[0];
  let left_arr = [];
  let right_arr = [];
  for (let i = 1, j = arr.length; i < j; i++) {}
  //2、 对左右数组分别进行快排，返回排序好的左右数组
  // (条件:就是数组中的元素要大于等于2个)
  //3、 合并排序好之后的左数组、基准数、排序好的右数组， 并且返回
}

quicksort(arr);
