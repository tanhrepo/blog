/*　　小和尚？任禾翻了个白眼难怪对方要剔个光头，这头发明显是才刚刚剃好的连一点青茬都没有，这也是够拼了只不过昆仑里的那个小和尚明显面相要求必须特别端正，你这……*/
/*
 * @Author: tanhong
 * @Date: 2021-05-28 16:49:22
 * @LastEditTime: 2021-06-28 16:12:34
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
