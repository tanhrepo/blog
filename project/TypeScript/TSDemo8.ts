/*
 * @Author: tanhong
 * @Date: 2021-05-19 16:38:36
 * @LastEditTime: 2021-05-26 10:09:38
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo8.ts
 */

// interface接口 用来规范类型
// 接口\类型别名，这两个语法和用处好像一样，确实用起来基本一样，但是也有少许的不同。
// 类型别名可以直接给类型，比如string，而接口必须代表对象。

// 接口只是对我们开发的约束，在生产环境中并没有体现。也可以说接口只是在 TypeScript
// 里帮我们作语法校验的工具，编译成正式的js代码，就不会有任何用处了。

// interface
// const screenResume = (name: string, age: number, perfessional: number) => {
//   age < 55 && perfessional >= 100 && console.log(name + '进入了面试环节');
//   age >= 55 || (perfessional < 100 && console.log(name + '被淘汰'));
// };

// const getResume = (name: string, age: number, perfessional: number) => {
//   console.log(name + '的年龄是' + age);
//   console.log(name + '的能力值' + perfessional);
// };

// screenResume('jack', 22, 200);
// getResume('jack', 22, 200);
// screenResume('tony', 33, 89);
// getResume('tony', 33, 89);

// 上面的代码有太多重复部分可以优化
// 不作强制要求，就是可选值。那接口如何定义那？其实typeScript已经为我们准备好了相应的办法，就是在:号前加一个?

// interface Girl {
//   name: string;
//   age: number;
//   perfessional: number;
//   waistline?: number;
// }
// 这时候在定义girl对象的时候，就可以写waistline（腰围），也可以不写了。

// 允许加入任意值

// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number;
//   [propname: string]: any;
// }

// 这个的意思是，属性的名字是字符串类型，属性的值可以是任何类型。

// const girl = {
//   name: "大脚",
//   age: 18,
//   bust: 94,
//   waistline: 21,
//   sex: "女",
// };
// const getResume = (girl: Girl) => {
//   console.log(girl.name + "年龄是：" + girl.age);
//   console.log(girl.name + "胸围是：" + girl.bust);
//   girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
//   girl.sex && console.log(girl.name + "性别是：" + girl.sex); // Girl并没有定义sex属性
// };


// 接口里面的方法
// 比如这时候有个say()方法，返回值是string类型。

// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number;
//   [propname: string]: any;
//   say(): string;
// }

// 加上这个say()方法后，程序马上就会报错，因为我们对象里没有 say 方法。那我们就要给对象一个 say 方法

// const girl = {
//   name: "大脚",
//   age: 18,
//   bust: 94,
//   waistline: 21,
//   sex: "女",
//   say() {
//     return "欢迎光临 ，红浪漫洗浴！！";
//   },
// };
// const getResume = (girl: Girl) => {
//   console.log(girl.name + "年龄是：" + girl.age);
//   console.log(girl.name + "胸围是：" + girl.bust);
//   girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
//   girl.sex && console.log(girl.name + "性别是：" + girl.say); // Girl并没有定义sex属性
// };



// const girl = {
//   name: 'tony',
//   age: 20,
//   perfessional: 300,
//   waistline: 80,
// };
// 重构
// const screenResume2 = (girl: Girl) => {
//   girl.age < 55 && girl.perfessional >= 100 && console.log(girl.name + '进入了面试环节');
//   girl.age >= 55 || (girl.perfessional < 100 && console.log(girl.name + '被淘汰'));
// };

// const getResume2 = (girl: Girl) => {
//   console.log(girl.name + '的年龄是' + girl.age);
//   console.log(girl.name + '的能力值' + girl.perfessional);
//   girl.waistline && console.log(girl.waistline);
// };

// screenResume2(girl);
// getResume2(girl);


// 接口和类的约束

// 类可以和接口很好的结合，我们先来看一个例子。
// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number;
//   [propname: string]: any;
//   say(): string;
// }

// class XiaoJieJie implements Girl {}

// 类“XiaoJieJie”错误实现接口“Girl”。
  // 类型“XiaoJieJie”缺少类型“Girl”中的以下属性: name, age, bust, sayts(2420)
// 这时候类会直接报错，所以我们需要把这个类写的完全点。

// class XiaoJieJie implements Girl {
//   name = "刘英";
//   age = 18;
//   bust = 90;
//   say() {
//     return "欢迎光临 ，红浪漫洗浴！！";
//   }
// }


// 接口间的继承
// interface Girl {
//   name: string;
//   age: number;
//   bust: number;
//   waistline?: number;
//   [propname: string]: any;
//   say(): string;
// }

// // const girl = {
// //   name: "大脚",
// //   age: 18,
// //   bust: 94,
// //   waistline: 21,
// //   sex: "女",
// //   say() {
// //     return "欢迎光临 ，红浪漫洗浴！！";
// //   },
// // };

// 接口也可以用于继承的，比如你新写一个Teacher接口，继承于Person接口。

// interface Teacher extends Girl {
//   teach(): string;
// }

// 只看 Teacher 级别的简历，那我们需要修改getResume()方法。

// const getResume = (girl: Teacher) => {
//   console.log(girl.name + "年龄是：" + girl.age);
//   console.log(girl.name + "胸围是：" + girl.bust);
//   girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
//   girl.sex && console.log(girl.name + "性别是：" + girl.sex);
// };

// getResume(girl);// 类型中缺少属性 "teach"，但类型 "Teacher" 中需要该属性。ts(2345)
// 发现下面我们调用getResume()方法的地方报错了,因为这时候传的值必须有Teach方法，

// const girl = {
//   name: "大脚",
//   age: 18,
//   bust: 94,
//   waistline: 21,
//   sex: "女",
//   say() {
//     return "欢迎光临 ，红浪漫洗浴！！";
//   },
//   teach() {
//     return "我是一个老师";
//   },
// };

// getResume(girl)
