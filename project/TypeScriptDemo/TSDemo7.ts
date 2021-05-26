/*
 * @Author: tanhong
 * @Date: 2021-05-19 16:12:47
 * @LastEditTime: 2021-05-19 16:38:08
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo7.ts
 */

// 元组

// 为数组的时候，内部元素类型顺序变化无影响
const boy1: (string | number)[] = ['jack', 'student', 18];
const boy2: (string | number)[] = ['jack', 18, 'student'];

// 为元组的时候
const girl1: [string, string, number] = ['marry', 'student', 18];
// const girl2: [string, string, number] = ['jack', 18, 'student']; // 顺序变化会有类型错误

const group: [string, string, number][] = [
  ['marry', 'student', 18],
  ['jack', 'student', 21],
  ['tony', 'teacher', 33],
];
