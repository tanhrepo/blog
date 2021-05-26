/*
 * @Author: tanhong
 * @Date: 2021-05-19 16:38:36
 * @LastEditTime: 2021-05-26 10:09:38
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo8.ts
 */

// 接口
// interface
// const screenResume = (name: string, age: number, perfessional: number) => {
//   age < 55 && perfessional >= 100 && console.log(name + '进入了面试环节');
//   age >= 55 || (perfessional < 100 && console.log(name + '被淘汰'));
// };

// const getResume = (name: string, age: number, perfessional: number) => {
//   console.log(name + '的年龄是' + age);
//   console.log(name + '的能力值' + perfessional);
// };

// screenResume('jack', 22, 200);
// getResume('jack', 22, 200);
// screenResume('tony', 33, 89);
// getResume('tony', 33, 89);

// 上面的代码有太多重复部分可以优化
// interface Girl {
//   name: string;
//   age: number;
//   perfessional: number;
//   waistline?: number;
// }

// const girl = {
//   name: 'tony',
//   age: 20,
//   perfessional: 300,
//   waistline: 80,
// };
// 重构
// const screenResume2 = (girl: Girl) => {
//   girl.age < 55 && girl.perfessional >= 100 && console.log(girl.name + '进入了面试环节');
//   girl.age >= 55 || (girl.perfessional < 100 && console.log(girl.name + '被淘汰'));
// };

// const getResume2 = (girl: Girl) => {
//   console.log(girl.name + '的年龄是' + girl.age);
//   console.log(girl.name + '的能力值' + girl.perfessional);
//   girl.waistline && console.log(girl.waistline);
// };

// screenResume2(girl);
// getResume2(girl);
