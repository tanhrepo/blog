/*
 * @Author: tanhong
 * @Date: 2021-05-19 16:38:36
 * @LastEditTime: 2021-05-19 17:35:43
 * @LastEditors: tanhong
 * @FilePath: \blog\project\TypeScriptDemo\TSDemo8.ts
 */

// 接口
// interface
const screenResume = (name: string, age: number, perfessional: number) => {
  age < 55 && perfessional >= 100 && console.log(name + '进入了面试环节');
  age >= 55 || (perfessional < 100 && console.log(name + '被淘汰'));
};

const getResume = (name: string, age: number, perfessional: number) => {
  console.log(name + '的年龄是' + age);
  console.log(name + '的能力值' + perfessional);
};

screenResume('jack', 22, 200);
getResume('jack', 22, 200);
screenResume('tony', 33, 89);
getResume('tony', 33, 89);

// 上面的代码有太多重复部分可以优化
interface Girl {
  name: string;
  age: number;
  perfessional: number;
}

const jack = {
  name: 'jack',
  age: 99,
  perfessional: 300,
};

const tony = {
  name: 'tony',
  age: 20,
  perfessional: 300,
};
