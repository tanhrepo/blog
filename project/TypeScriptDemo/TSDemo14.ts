/*
 * @Author: tanhong
 * @Date: 2021-05-28 15:48:42
 * @LastEditTime: 2021-05-28 15:58:46
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo14.ts
 */

// 抽象类

abstract class Girl3 {
  abstract skill();
}

class Waiter extends Girl3 {
  // 非抽象类“Waiter”不会实现继承自“Girl3”类的抽象成员“skill”。
  skill() {
    console.log('water');
  }
}

class BaseTeacher extends Girl3 {
  skill() {
    console.log('base');
  }
}

class seniorTeacher extends Girl3 {
  skill() {
    console.log('high');
  }
}
