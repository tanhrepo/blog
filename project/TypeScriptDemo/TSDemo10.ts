/*
 * @Author: tanhong
 * @Date: 2021-05-26 10:32:56
 * @LastEditTime: 2021-05-26 10:48:42
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo10.ts
 */

// 类
class Lady {
  content: string = 'hi,handsome boy';
  say() {
    return this.content;
  }
}

// 类的继承
class fang extends Lady {
  sayLove() {
    return 'Titanic';
  }
  say() {
    // super关键字调用父级的方法
    return super.say() + ', my honey';
  }
}

const zhuzhu1 = new fang();
console.log(zhuzhu1.say());
console.log(zhuzhu1.sayLove());
