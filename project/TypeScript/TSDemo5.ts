/*
 * @Author: tanhong
 * @Date: 2021-05-19 15:19:49
 * @LastEditTime: 2022-02-22 09:39:37
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScript\TSDemo5.ts
 */

// void 空的
// function sayHello(): void {
//   console.log('hello');
//   // return null; // 函数定义为void时，不能返回值,返回只能为空。
//   // return 1; //不能将类型“number”分配给类型“void”。
//   // return undefined;
//   // return false; // 不能将类型“boolean”分配给类型“void”。
//   // return '1'; // 不能将类型“string”分配给类型“void”。
// }

// 函数接收的参数是一个对象的时候，需要单独为对象里面的字段赋值
// 此时可以自动识别add返回的数据类型,但是是可变的
// 如果return one + two + '';此时返回的为字符串，所以add为字符串
// 可以在函数外定义，让返回值固定为number，定义函数的时候尽量严谨
// function add(): number{}
// function add({ one, two }: { one: number; two: number }): number {
//   return one + two;
// }
// const total = add({ one: 1, two: 2 });

// function getNum({ one }: { one: number }): number {
//   return one;
// }
// const one = getNum({ one: 1 });

// test
// jadsjdkshb

// function getNum({one,two}:{one:number,two:number}){
//   return one + two
// }

// const aaa = getNum({one:3,two:4})
// console.log(aaa)
