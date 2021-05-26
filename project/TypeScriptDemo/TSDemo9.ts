/*
 * @Author: tanhong
 * @Date: 2021-05-26 10:08:44
 * @LastEditTime: 2021-05-26 10:18:14
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

const girl = {
  name: 'tony',
  age: 20,
  perfessional: 300,
  waistline: 80,
  sex: 'girl',
  say() {
    return 'welcome,chongqing';
  },
};

const screenResume3 = (girl: Girl) => {
  girl.age < 55 && girl.perfessional >= 100 && console.log(girl.name + '进入了面试环节');
  girl.age >= 55 || (girl.perfessional < 100 && console.log(girl.name + '被淘汰'));
};

const getResume3 = (girl: Girl) => {
  console.log(girl.name + '的年龄是' + girl.age);
  console.log(girl.name + '的能力值' + girl.perfessional);
  girl.waistline && console.log(girl.waistline);
  girl.sex && console.log(girl.sex);
};

getResume3(girl);
