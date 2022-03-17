/*
 * @Author: tanhong
 * @Date: 2021-05-26 10:32:56
 * @LastEditTime: 2021-05-26 11:38:26
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo10.ts
 */

// 类


// 类的基本使用

// 定义一个最简单的Lady类,这里要使用关键字class,类里边有姓名属性和一个得到姓名的方法：
// class Lady {
//   content: string = 'hi,handsome boy';
//   say() {
//     return this.content;
//   }
// }

// const goddess = new Lady();
// console.log(goddess.say());




// 类的继承

// TypeScrip 的继承和ES6中的继承是一样的。关键字也是extends,比如我们这里新建一个XiaoJieJie的类，
// 然后继承自Lady类，在XiaoJieJie类里写一个新的方法，叫做sayLove,具体代码如下。
// class fang extends Lady {
//   sayLove() {
//     return 'Titanic';
//   }
//   say() {
//     // 使用 extends 关键字实现继承，子类中使用 super 关键字来调用父类的构造函数和方法。
//     return super.say() + ', my honey';
//   }
// }

// const zhuzhu1 = new fang();
// console.log(zhuzhu1.say());
// console.log(zhuzhu1.sayLove());
