// 类的只读属性readonly

class Person {
    readonly name: string; // 在实例化对象时赋予的名字，以后不能再更改了，也就是我们常说的只读属性。
    constructor(name: string) {
        this.name = name;
    }
}

const person = new Person('mingzhu');
// person.name = 'mingzhu2'; // 无法分配到 "name" ，因为它是只读属性。
console.log(person.name);


// 抽象类
// 什么是抽象类?抽象类是不允许被实例化的类，抽象类中的抽象方法必须被子类实现。

abstract class Girl{
  abstract skill():any
}

class Waiter extends Girl{
  skill() {
    console.log('welcome')
  }
}

class xiaoJie extends Girl{
  skill() {
    console.log('lalala!!!')
  }
}

const waiter = new Waiter(23)
waiter.skill()

// 正则匹配身份证号码
function IDNumber(){

}

