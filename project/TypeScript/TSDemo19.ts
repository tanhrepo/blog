// 类的Getter、Setter和静态属性static
// 类的访问类型private，最大用处是封装一个属性，然后通过 Getter 和 Setter 的形式来访问和修改这个属性。

// class Girl{
//   constructor(private _age:number){}
//   // 别人想知道_age，就必须通过getter属性知道,注意我这里用的是属性，对他就是一个属性。
//   // getter属性的关键字是get,后边跟着类似方法的东西,但是要注意，它并不是方法，归根到底还是属性。

//   get age(){
//     return this._age - 10; // 在getter里，我们可以对_age进行处理，比如偷摸的减少 10 岁。代码可以写成这样。
//   }

//   set age(value:number){
//     this._age = value; // 在setter里，我们可以对_age进行处理.
//   }

//   static say(){
//     console.log('say hello'); // 在类里面，我们可以定义静态方法，静态方法不需要实例化，
//     // 直接通过类名调用。不用 new 出对象就可以使用类里的方法了。
//   }
// }

// const Mingzhu = new Girl(18);
// console.log(Mingzhu.age)
// Mingzhu.age = 22 // 无法分配到 "age" ，因为它是只读属性。
// console.log(Mingzhu.age)
