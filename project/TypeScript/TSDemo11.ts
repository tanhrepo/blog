/*
 * @Author: tanhong
 * @Date: 2021-05-26 10:51:29
 * @LastEditTime: 2021-05-26 11:15:33
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo11.ts
 */

// 类的内部和类的外部
class Person {
  name: string; // 类的外部也可以调用，这是因为类定义的时候默认的属性为public
  public content: string;
  private secret = ' this is my secret ';
  // protected 和 private类似也是不能在外部调用,但是可以在子类中调用
  protected inherit = '这是传承';
  public say() {
    return this.content + this.secret + 'yes';
  }
}

class hong extends Person {
  sayMy() {
    return this.inherit;
  }
}

const ming1 = new Person();
ming1.name = 'mingzhu';
ming1.content = 'hello';
console.log(ming1.name, ming1.content);
// console.log(ming1.secret); // 属性“secret”为私有属性，只能在类“Person”中访问。
// console.log(ming1.inherit); // 属性“inherit”受保护，只能在类“Person”及其子类中访问。
console.log(ming1.say()); // hello this is my secret yes

const ming2 = new hong();
console.log(ming2.sayMy());
