// 类的访问类型，private，protected，public

// 不在类里对name的访问属性进行定义，那么它就会默认是public访问属性。
// class Person{
//   name: string;
// }
// 相当于
// class Person {
//   public name: string;
// }
// public 允许在类的内部和外部被调用.

// class Person {
//   public name!: string;
//   private age : number = 18; // private 访问属性的意思是，只允许再类的内部被调用，外部不允许调用
//   protected feng: string = 'feng qing wu'; // protected 允许在类内及继承的子类中使用
//   public say() {
//     console.log( this.name + ' wanan '+ this.age);
//     // this.name就是类的内部调用
//   }
// }

// class hong extends Person {
//   sayMy() {
//     return this.feng; // 子类可以访问类的protected属性
//   }
// }

// const person = new Person();
// const hong1 = new hong();
// person.name = 'mingzhu';
// // person.age = 18; //报错，属性“age”为私有属性，只能在类“Person”中访问。ts(2341)

// person.say();
// console.log(hong1.sayMy());


