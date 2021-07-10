/*    “等下进去后，不要离开我太远，就在我五米范围内活动，一旦你感觉到危险，马上示警，到时候我们就沿着进去的路往后撤退，听的懂吗？”*/
/*
 * @Author: tanhong
 * @Date: 2021-05-28 16:49:22
 * @LastEditTime: 2021-07-10 11:13:30
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScript\TSDemo15.ts
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
//  // 两种或两种以上叫做联合类型
//  // animal.say() //类型“Waiter1 | Teacher1”上不存在属性“say”,类型“Teacher1”上不存在属性“say”。
//   if (animal.anjiao) {
//     (animal as Teacher1).skill();
//   } else {
//     (animal as Waiter1).say();
//   }
// }
