/*
 * @Author: tanhong
 * @Date: 2021-05-19 14:37:24
 * @LastEditTime: 2021-05-19 15:18:49
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo4.ts
 */

// type annotation 类型注解
// type inference  类型推断

// const one = 1;
// const two = 2;
// const three = one + two

function getTotal(one: number, two: number): number {
  return one + two;
}
const total = getTotal(1, 2);
// console.log(total);

const boy = {
  name: 'Michael',
  age: 18,
};
