/*
 * @Author: tanhong
 * @Date: 2021-05-19 16:12:47
 * @LastEditTime: 2021-05-26 15:04:18
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo7.ts
 */

// 元组，这个概念是js里面没有的，可以看作是加强的数组，可以更好的控制或者规范里面的类型。

// // 为数组的时候，内部元素类型顺序变化无影响
// const boy1: (string | number)[] = ['jack', 'student', 18];
// const boy2: (string | number)[] = ['jack', 18, 'student'];

// // 为元组的时候
// const girl2: [string, string, number] = ['marry', 'student', 18];
// // const girl2: [string, string, number] = ['jack', 18, 'student']; // 顺序变化会有类型错误

// 每个元素类型的位置给固定住了，这就叫做元组。
// const group: [string, string, number][] = [
//   ['marry', 'student', 18],
//   ['jack', 'student', 21],
//   ['tony', 'teacher', 33],
// ];
