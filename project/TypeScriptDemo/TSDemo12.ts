/*
 * @Author: tanhong
 * @Date: 2021-05-26 11:18:08
 * @LastEditTime: 2021-05-26 15:04:58
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo12.ts
 */

// 使用 class 定义类，使用 constructor 定义构造函数。
// 通过 new 生成新实例的时候，会自动调用构造函数。

// class Animal {
//   public name: string;

//   // constructor 应传入 1 个参数，
//   constructor(name: string) {
//     this.name = name;
//   }
//   sayHi() {
//     return `My name is ${this.name}`;
//   }
// }

// // 上面的更加直观理解，可以简化
// class Animal {
//   // constructor 应传入 1 个参数，
//   constructor(public name: string) {}
//   sayHi() {
//     return `My name is ${this.name}`;
//   }
// }

// class Panda extends Animal {
//   // constructor(public age: number) {} //派生类的构造函数必须包含 "super" 调用。不管父类有没有构造函数
//   constructor(public age: number) {
//     super('panda'); // 父类没有构造函数的时候，super不用传值
//   }
// }

// const whale = new Animal('whale');
// console.log(whale.sayHi()); // My name is Jack
// const panda = new Panda(18);
// console.log(panda.name, panda.age, panda.sayHi());
