/*
 * @Author: tanhong
 * @Date: 2021-05-28 16:49:22
 * @LastEditTime: 2021-05-28 17:25:16
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo15.ts
 */
// 联合类型和类型保护

interface Waiter1 {
  anjiao: boolean;
  say: () => {};
}

interface Teacher1 {
  anjiao: boolean;
  skill: () => {};
}

// function judaeWho(animal: Waiter1 | Teacher1) {
//   // 两种或两种以上叫做联合类型
//   // animal.say() //类型“Waiter1 | Teacher1”上不存在属性“say”,类型“Teacher1”上不存在属性“say”。
//   if (animal.anjiao) {
//     (animal as Teacher1).skill();
//   } else {
//     (animal as Waiter1).say();
//   }
// }
