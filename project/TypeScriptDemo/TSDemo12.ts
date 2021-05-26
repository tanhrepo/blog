/*
 * @Author: tanhong
 * @Date: 2021-05-26 11:18:08
 * @LastEditTime: 2021-05-26 11:21:23
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo12.ts
 */

// 使用 class 定义类，使用 constructor 定义构造函数。
// 通过 new 生成新实例的时候，会自动调用构造函数。

class Animal {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
