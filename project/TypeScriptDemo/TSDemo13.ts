/*
 * @Author: tanhong
 * @Date: 2021-05-26 14:14:43
 * @LastEditTime: 2021-05-26 16:13:03
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo13.ts
 */

// 存取器
// 使用 getter 和 setter 可以改变属性的赋值和读取行为：

class Xiao {
  constructor(private _age: number) {}

  get age() {
    return this._age - 5;
  }

  set age(value) {
    this._age = value + 1;
  }
}

const hong = new Xiao(22); // setter: 22
hong.age = 44; // setter: 44
console.log(hong.age);

// 静态方法
// 使用 static 修饰符修饰的方法称为静态方法，它们不需要实例化，而是直接通过类来调用：
// class BeautifulGirl {
//   sayHi() {
//     return 'graph!!';
//   }
// }
// const fangfang = new BeautifulGirl(); // 需要先实例化，然后再调用
// console.log(fangfang.sayHi());

// 用static后
class BeautifulGirl {
  static sayHi() {
    return 'graph!!';
  }
}
console.log(BeautifulGirl.sayHi()); // 直接通过类来调用：

// 只读属性
class Person {
  public readonly _name: string;
  constructor(public name: string) {
    this._name = name;
  }
}

const hong1 = new Person('jshong');
// hong1._name = 'hong';// 无法分配到 "_name" ，因为它是只读属性。
console.log(hong1._name);
