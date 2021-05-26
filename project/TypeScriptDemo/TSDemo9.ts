/*
 * @Author: tanhong
 * @Date: 2021-05-26 10:08:44
 * @LastEditTime: 2021-05-26 10:29:23
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo9.ts
 */

// 接口
interface Girl {
  name: string;
  age: number;
  perfessional: number;
  waistline?: number;
  [propname: string]: any;
  say(): string;
}

// 接口不仅可以限制对象，也可以限制类
class zhuzhu implements Girl {
  name = 'ming';
  age = 23;
  perfessional = 1000;
  waistline = 60;
  say() {
    return 'baby';
  }
}

// 接口之间的继承
interface BabyGirl extends Girl {
  lovely: number;
}

const girl = {
  name: 'tony',
  age: 20,
  perfessional: 300,
  waistline: 80,
  sex: 'girl',
  say() {
    return 'welcome,chongqing';
  },
  lovely: 9999,
};

const screenResume3 = (girl: Girl) => {
  girl.age < 55 && girl.perfessional >= 100 && console.log(girl.name + '进入了面试环节');
  girl.age >= 55 || (girl.perfessional < 100 && console.log(girl.name + '被淘汰'));
};

const getResume3 = (girl: BabyGirl) => {
  console.log(girl.name + '的年龄是' + girl.age);
  console.log(girl.name + '的能力值' + girl.perfessional);
  girl.waistline && console.log(girl.waistline);
  girl.sex && console.log(girl.sex);
  girl.lovely && console.log(girl.lovely);
};

getResume3(girl);
