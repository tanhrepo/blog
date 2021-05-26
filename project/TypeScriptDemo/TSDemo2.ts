/*
 * @Author: 谭虹
 * @Date: 2021-05-19 11:30:10
 * @LastEditTime: 2021-05-19 14:13:32
 * @LastEditors: 谭虹
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo2.ts
 */

// let count: number = 1;
// count = 3;

interface user {
  name: string;
  age: number;
}

const kang: user = {
  name: 'er',
  age: 2,
};
console.log(kang.age)
